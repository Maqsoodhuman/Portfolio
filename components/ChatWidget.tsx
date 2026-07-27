"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hey, I'm Maqsood's assistant. Ask me about his work, projects, or how to reach him.",
};

const SUGGESTIONS = [
  "What are you working on now?",
  "Tell me about MedRoute",
  "Are you open to roles?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    setErr(null);
    const history = msgs.filter((m) => m !== GREETING);
    const next = [...msgs, { role: "user" as const, content: q }];
    setMsgs(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q, history }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErr(data.error ?? "Something went wrong.");
      } else {
        setMsgs((m) => [...m, { role: "assistant", content: data.reply }]);
      }
    } catch {
      setErr("Network error. Check your connection and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* launcher */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Chat with Maqsood"}
        className="fixed bottom-5 right-5 z-[60] flex items-center gap-2.5 rounded-full bg-[#c8f542] px-5 py-3.5 text-[14px] font-bold tracking-[.5px] text-[#0d0f0c] shadow-[0_8px_28px_rgba(200,245,66,.4)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0d0f0c]"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0d0f0c] opacity-40" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#0d0f0c]" />
        </span>
        {open ? "Close" : "Chat with me"}
      </button>

      {/* panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Maqsood"
          className="fixed bottom-[84px] right-5 z-[60] flex h-[min(560px,72vh)] w-[min(384px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-[#232720] bg-[#0d0f0c] text-[#eef1e8] shadow-[0_30px_70px_-20px_rgba(0,0,0,.7)]"
        >
          {/* header */}
          <div className="flex items-center gap-3 border-b border-[#232720] px-5 py-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c8f542] text-[13px] font-black text-[#0d0f0c]">
              MA
            </div>
            <div className="leading-tight">
              <div className="text-[14px] font-bold">Maqsood&rsquo;s Assistant</div>
              <div className="font-jet text-[10px] uppercase tracking-[.14em] text-[#7d8674]">
                Usually replies instantly
              </div>
            </div>
          </div>

          {/* messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-[1.5] [text-wrap:pretty] ${
                    m.role === "user"
                      ? "rounded-br-sm bg-[#c8f542] text-[#0d0f0c]"
                      : "rounded-bl-sm bg-[#191c17] text-[#dfe4d8]"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {busy && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-[#191c17] px-4 py-3.5">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#7d8674]"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {err && (
              <div className="rounded-lg border border-[#3a2020] bg-[#1a1210] px-3.5 py-2.5 text-[12.5px] text-[#f3b0a0]">
                {err}
              </div>
            )}

            {msgs.length === 1 && !busy && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="font-jet rounded-full border border-[#2c3128] px-3 py-1.5 text-[11px] text-[#b9c0b0] transition-colors hover:border-[#c8f542] hover:text-[#eef1e8]"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-end gap-2 border-t border-[#232720] p-3"
          >
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              maxLength={600}
              placeholder="Ask about my work…"
              className="max-h-24 flex-1 resize-none rounded-xl border border-[#232720] bg-[#12150f] px-3.5 py-2.5 text-[13.5px] text-[#eef1e8] placeholder:text-[#5f6959] focus:border-[#c8f542] focus:outline-none"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-[#c8f542] text-[#0d0f0c] transition-opacity disabled:opacity-40"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path d="M4 12l16-8-6 8 6 8-16-8z" fill="currentColor" />
              </svg>
            </button>
          </form>
          <p className="px-4 pb-3 text-center text-[10px] text-[#5f6959]">
            AI assistant · answers from Maqsood&rsquo;s public info
          </p>
        </div>
      )}
    </>
  );
}
