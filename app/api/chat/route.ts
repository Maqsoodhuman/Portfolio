import { SYSTEM_PROMPT } from "@/lib/bio";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* ---- config ----
   Works with OpenRouter out of the box (key = OpenRouter key, model =
   deepseek/deepseek-chat). To hit DeepSeek's API directly instead, set
   CHAT_BASE_URL=https://api.deepseek.com/v1 and CHAT_MODEL=deepseek-chat.
   Both are OpenAI-compatible, so only env vars change. */
const BASE_URL = (process.env.CHAT_BASE_URL ?? "https://openrouter.ai/api/v1").replace(/\/$/, "");
const CHAT_URL = `${BASE_URL}/chat/completions`;
const MODEL = process.env.CHAT_MODEL ?? process.env.OPENROUTER_MODEL ?? "deepseek/deepseek-chat";
const MAX_MSGS_PER_SESSION = Number(process.env.CHAT_SESSION_LIMIT ?? 20);
const SESSION_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_INPUT_CHARS = 600;
const MAX_TURNS = 12; // client history we'll accept per request

type Msg = { role: "user" | "assistant"; content: string };

/* ---- best-effort in-memory per-session rate limit ----
   Serverless instances are ephemeral, so this caps a burst within a single
   warm instance. For hard limits across instances, back this with Vercel KV
   / Upstash, the shape stays the same. */
const buckets = new Map<string, { count: number; resetAt: number }>();

function rateLimit(sid: string) {
  const now = Date.now();
  const b = buckets.get(sid);
  if (!b || now > b.resetAt) {
    buckets.set(sid, { count: 1, resetAt: now + SESSION_WINDOW_MS });
    return { ok: true, remaining: MAX_MSGS_PER_SESSION - 1 };
  }
  if (b.count >= MAX_MSGS_PER_SESSION) {
    return { ok: false, remaining: 0, retryAt: b.resetAt };
  }
  b.count += 1;
  return { ok: true, remaining: MAX_MSGS_PER_SESSION - b.count };
}

function readCookie(req: Request, name: string) {
  const raw = req.headers.get("cookie") ?? "";
  for (const part of raw.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return decodeURIComponent(v.join("="));
  }
  return null;
}

function newSid() {
  return (
    "s_" +
    globalThis.crypto.randomUUID().replace(/-/g, "").slice(0, 20)
  );
}

export async function POST(req: Request) {
  const key = process.env.CHAT_API_KEY ?? process.env.OPENROUTER_API_KEY;
  if (!key) {
    return Response.json(
      { error: "The chat assistant isn't configured yet. Email maqsoodhuman@gmail.com." },
      { status: 503 },
    );
  }

  let body: { message?: string; history?: Msg[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Bad request." }, { status: 400 });
  }

  const message = (body.message ?? "").toString().trim();
  if (!message) return Response.json({ error: "Say something first." }, { status: 400 });
  if (message.length > MAX_INPUT_CHARS)
    return Response.json({ error: "That's a bit long. Keep it under 600 characters." }, { status: 400 });

  // session id via cookie
  let sid = readCookie(req, "chat_sid");
  const freshSid = !sid;
  if (!sid) sid = newSid();

  const rl = rateLimit(sid);
  if (!rl.ok) {
    return Response.json(
      { error: "You've reached this session's message limit. Reach me directly at maqsoodhuman@gmail.com." },
      { status: 429 },
    );
  }

  // trim client-supplied history to recent turns, sanitize roles
  const history: Msg[] = Array.isArray(body.history)
    ? body.history
        .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
        .slice(-MAX_TURNS)
        .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_INPUT_CHARS) }))
    : [];

  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...history,
    { role: "user", content: message },
  ];

  let reply: string;
  try {
    const res = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://maqsoodhuman.com",
        "X-Title": "Maqsood Ahmed, Portfolio",
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        max_tokens: 400,
        temperature: 0.5,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("OpenRouter error", res.status, detail.slice(0, 300));
      return Response.json(
        { error: "The assistant is unavailable right now. Try again shortly." },
        { status: 502 },
      );
    }

    const data = await res.json();
    reply = data?.choices?.[0]?.message?.content?.trim() || "Sorry, I didn't catch that. Mind rephrasing?";
  } catch (e) {
    console.error("chat fetch failed", e);
    return Response.json(
      { error: "The assistant is unavailable right now. Try again shortly." },
      { status: 502 },
    );
  }

  const headers = new Headers({ "Content-Type": "application/json" });
  if (freshSid) {
    headers.append(
      "Set-Cookie",
      `chat_sid=${sid}; Path=/; Max-Age=86400; HttpOnly; SameSite=Lax; Secure`,
    );
  }
  return new Response(JSON.stringify({ reply, remaining: rl.remaining }), { headers });
}
