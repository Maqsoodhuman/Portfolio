import Image from "next/image";
import BrandIcon from "./BrandIcon";
import {
  LIME_MARQUEE,
  TECH_MARQUEE,
  PROJECTS,
  JOBS,
  POSTS,
} from "@/lib/data";

/* ---------- lime marquee ---------- */
export function LimeMarquee() {
  const items = [...LIME_MARQUEE, ...LIME_MARQUEE];
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden whitespace-nowrap border-y border-[var(--line)] bg-[#c8f542] py-4"
    >
      <div className="anim-mqL font-anton inline-flex gap-14 text-[26px] uppercase tracking-[.03em] text-[#0d0f0c] [animation-duration:22s]">
        {items.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- photo strip ---------- */
const STRIP: Array<{ img: string; pos?: string; cap: string }> = [
  { img: "/images/maqsood-detroit.png", pos: "object-[38%_15%]", cap: "Detroit riverfront, 2025" },
  { img: "/images/maqsood-dl.jpg", pos: "object-[45%_30%]", cap: "Presenting MedRoute — UB, 2026" },
  { img: "/images/maqsood-car.jpg", pos: "object-[45%_45%]", cap: "CAVAS Lab — autonomous vehicle, 2026" },
  { img: "/images/maqsood-redflag.jpg", pos: "object-[50%_40%]", cap: "Demoing Red Flag — Buffalo, 2025" },
  { img: "/images/maqsood-dunes.jpg", pos: "object-[50%_42%]", cap: "Off duty — the dunes, 2025" },
];

export function PhotoStrip() {
  return (
    <section aria-label="Moments from the field" data-theme="light" className="overflow-hidden py-[130px]">
      <div id="strip" className="flex w-max gap-[22px] px-10 will-change-transform">
        {STRIP.map((c, i) => (
          <figure key={c.cap} className={`m-0 w-[300px] flex-none sm:w-[340px] ${i % 2 === 1 ? "mt-[46px]" : ""}`}>
            <div className="relative h-[380px] overflow-hidden rounded-md bg-[var(--s1)] sm:h-[430px]">
              <Image src={c.img} alt={c.cap} fill sizes="(max-width: 640px) 300px, 340px" className={`object-cover ${c.pos ?? ""}`} />
            </div>
            <figcaption className="font-jet mt-3 text-xs font-medium uppercase tracking-[.12em] text-[var(--faint)]">
              {c.cap}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------- in prod / in research ---------- */
export function Split() {
  return (
    <div id="work" data-theme="dark" className="grid grid-cols-1 border-y border-[var(--line)] lg:grid-cols-2">
      <a
        href="#projects"
        data-rv
        className="group block border-b border-[var(--line)] p-10 py-20 hover:bg-[var(--hoverbg)] focus-visible:[outline:2px_solid_var(--accent)] focus-visible:[outline-offset:-3px] lg:border-b-0 lg:border-r"
      >
        <h2 className="font-anton text-[clamp(60px,7vw,120px)] uppercase leading-[.92]">
          In
          <br />
          <span className="txt-outline-accent">Prod</span>
        </h2>
        <p className="mt-[26px] max-w-[380px] text-base leading-[1.6] text-[var(--muted)] [text-wrap:pretty]">
          Platforms serving <strong className="font-bold text-[var(--fg)]">500K+ customers</strong> — event-driven AWS,
          GenAI assistants on Bedrock, pipelines that survive storm season.
        </p>
        <div className="font-jet mt-[26px] text-xs font-medium tracking-[.14em] text-[var(--accent)]">
          /PRODUCTION{" "}
          <span
            aria-hidden="true"
            className="inline-block group-hover:[transform:translateX(6px)]"
            style={{ transition: "transform .3s ease" }}
          >
            →
          </span>
        </div>
      </a>
      <a
        href="#writing"
        data-rv
        className="group block p-10 py-20 hover:bg-[var(--hoverbg)] focus-visible:[outline:2px_solid_var(--accent)] focus-visible:[outline-offset:-3px]"
      >
        <h2 className="font-anton text-[clamp(60px,7vw,120px)] uppercase leading-[.92]">
          In
          <br />
          <span className="txt-outline-accent">Research</span>
        </h2>
        <p className="mt-[26px] max-w-[380px] text-base leading-[1.6] text-[var(--muted)] [text-wrap:pretty]">
          Published in <strong className="font-bold text-[var(--fg)]">molecular property prediction</strong>; active
          work in clinical sensing and digital-twin autonomous vehicles.
        </p>
        <div className="font-jet mt-[26px] text-xs font-medium tracking-[.14em] text-[var(--accent)]">
          /RESEARCH{" "}
          <span
            aria-hidden="true"
            className="inline-block group-hover:[transform:translateX(6px)]"
            style={{ transition: "transform .3s ease" }}
          >
            →
          </span>
        </div>
      </a>
    </div>
  );
}

/* ---------- stats ---------- */
const STATS = [
  ["4+", "Years in production"],
  ["100+", "APIs & pipelines shipped"],
  ["3×", "Edge latency reduction"],
  ["4.0", "GPA — MS CS, AI/ML"],
] as const;

export function Stats() {
  return (
    <div className="grid grid-cols-2 border-b border-[var(--line)] lg:grid-cols-4">
      {STATS.map(([n, l], i) => (
        <div
          key={l}
          data-rv
          className={`border-[var(--line)] p-8 py-9 lg:p-10 lg:py-11 ${i % 2 === 0 ? "border-r" : ""} ${i === 1 ? "lg:border-r" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""}`}
        >
          <div className="font-anton text-[clamp(46px,11vw,74px)] leading-none text-[var(--accent)]">{n}</div>
          <div className="font-jet mt-2 text-[10px] font-medium uppercase tracking-[.14em] text-[var(--faint)] sm:text-[11px]">
            {l}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- projects ---------- */
export function Projects() {
  return (
    <>
      <div id="projects" data-theme="light" className="mx-auto max-w-[1250px] px-10 pb-10 pt-[120px]">
        <div data-rv className="flex flex-wrap items-end justify-between gap-8">
          <h2 className="font-anton text-[clamp(54px,6vw,100px)] uppercase leading-[.92]">
            Projects
            <br />
            <span className="txt-outline">Hall of Fame</span>
          </h2>
          <p className="max-w-[300px] text-sm leading-[1.6] text-[var(--faint)] [text-wrap:pretty]">
            Systems built end-to-end — from prompt engineering to fault-tolerant deploys.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-[22px] px-10 pb-[120px] pt-[30px] sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => {
          const card = (
            <div
              className="rounded-lg group-hover:[transform:translateY(-8px)] group-hover:[box-shadow:0_22px_44px_-18px_rgba(0,0,0,.4)]"
              style={{ transition: "transform .4s cubic-bezier(.19,1,.22,1), box-shadow .4s ease" }}
            >
              <div className="overflow-hidden rounded-lg border border-[var(--line)] group-hover:border-[var(--accent)]">
                {p.img ? (
                  <div className="relative h-[200px] border-b border-[var(--line)]">
                    <Image
                      src={p.img}
                      alt={`${p.name} — project photo`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className={`object-cover ${p.imgPos ?? ""} transition-transform duration-700 group-hover:scale-[1.04]`}
                    />
                  </div>
                ) : (
                  <div className="ph-stripes relative flex h-[200px] items-end justify-between overflow-hidden border-b border-[var(--line)] px-[22px] pb-4">
                    <span aria-hidden="true" className="font-anton txt-outline select-none text-[110px] leading-[.8]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-jet mb-1 text-[10px] font-medium uppercase tracking-[.14em] text-[var(--dim)]">
                      {p.year}
                    </span>
                  </div>
                )}
                <div className="px-[26px] pb-7 pt-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-anton text-[26px] uppercase text-[var(--fg)] group-hover:text-[var(--accent)]">
                      {p.name}
                    </h3>
                    <span className="font-jet shrink-0 text-xs font-medium text-[var(--accent)]">
                      {p.link ? `${p.year} ↗` : p.year}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-[1.55] text-[var(--muted)] [text-wrap:pretty]">{p.desc}</p>
                  <div className="font-jet mt-3.5 text-[11px] font-medium uppercase tracking-[.08em] text-[var(--faint)]">
                    {p.tags}
                  </div>
                </div>
              </div>
            </div>
          );
          return p.link ? (
            <a
              key={p.name}
              href={p.link}
              data-rv
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg focus-visible:[outline:2px_solid_var(--accent)] focus-visible:[outline-offset:4px]"
            >
              {card}
            </a>
          ) : (
            <div key={p.name} data-rv className="group rounded-lg">
              {card}
            </div>
          );
        })}
      </div>
    </>
  );
}

/* ---------- tech marquee with real logos ---------- */
export function TechMarquee() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden whitespace-nowrap border-y border-[var(--line)] py-3.5"
    >
      <div className="anim-mqR font-jet inline-flex items-center gap-11 text-[15px] font-medium uppercase tracking-[.1em] text-[var(--dim)] [animation-duration:30s]">
        {items.map(([icon, label], i) => (
          <span key={i} className="inline-flex items-center gap-3">
            {icon && <BrandIcon name={icon} className="h-[19px] w-[19px] fill-[var(--dim)]" />}
            {label}
            <span className="ml-8">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- career timeline ---------- */
const CHIPS = [
  "AWS Certified — Solutions Architect",
  "Databricks — Spark Developer",
  "Shooting Star Award, LTIMindtree ’24",
  "arXiv 2602.22405 — MolFM-Lite",
];

export function Timeline() {
  return (
    <section id="stack" data-theme="dark" className="mx-auto max-w-[1250px] px-10 py-[120px]">
      <h2 data-rv className="font-anton mb-[60px] text-[clamp(54px,6vw,100px)] uppercase leading-[.92]">
        Career
        <br />
        <span className="txt-outline">Timeline</span>
      </h2>
      {JOBS.map((j) => (
        <div
          key={j.org}
          data-rv
          className="group grid grid-cols-1 items-baseline gap-2.5 border-t border-[var(--line)] py-[34px] lg:grid-cols-[200px_1fr_3fr] lg:gap-9"
        >
          <span className="font-jet text-[13px] font-medium tracking-[.08em] text-[var(--accent)]">{j.when}</span>
          <div className="group-hover:[transform:translateX(4px)]" style={{ transition: "transform .3s ease" }}>
            <h3 className="text-[22px] font-bold text-[var(--fg)] group-hover:text-[var(--accent)]">{j.org}</h3>
            <div className="font-jet mt-1.5 text-[13px] text-[var(--faint)]">{j.role}</div>
          </div>
          <p className="m-0 text-[15px] leading-[1.65] text-[var(--muted)] [text-wrap:pretty]">{j.blurb}</p>
        </div>
      ))}
      <div data-rv className="mt-14 flex flex-wrap gap-3.5">
        {CHIPS.map((c) => (
          <span
            key={c}
            className="font-jet rounded-full border border-[var(--chip)] px-[18px] py-2.5 text-xs font-medium tracking-[.06em] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--fg)]"
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- field notes ---------- */
export function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-[1250px] border-t border-[var(--line)] px-10 py-[120px]">
      <h2 data-rv className="font-anton mb-[50px] text-[clamp(54px,6vw,100px)] uppercase leading-[.92]">
        Field
        <br />
        <span className="txt-outline">Notes</span>
      </h2>
      {POSTS.map((w) => (
        <a
          key={w.title}
          href="#writing"
          data-rv
          className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-t border-[var(--line)] py-7 focus-visible:[outline:2px_solid_var(--accent)] focus-visible:[outline-offset:-3px] sm:gap-[30px]"
        >
          <span className="flex min-w-0 items-baseline gap-3">
            <span
              aria-hidden="true"
              className="inline-block font-jet text-[var(--accent)] opacity-0 [transform:translateX(-8px)] group-hover:opacity-100 group-hover:[transform:translateX(0)]"
              style={{ transition: "transform .3s ease, opacity .3s ease" }}
            >
              →
            </span>
            <h3 className="text-[clamp(20px,2.6vw,34px)] font-semibold tracking-[-.01em] text-[var(--fg)] [text-wrap:balance] group-hover:text-[var(--accent)]">
              {w.title}
            </h3>
          </span>
          <span className="font-jet whitespace-nowrap text-xs font-medium tracking-[.1em] text-[var(--faint)]">
            {w.meta}
          </span>
        </a>
      ))}
    </section>
  );
}

/* ---------- contact ---------- */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-[var(--line)] px-10 pb-[60px] pt-[140px] text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(200,245,66,.09),transparent_65%)]" />
      <div data-rv className="font-jet relative text-[13px] font-medium uppercase tracking-[.16em] text-[var(--accent)]">
        Open to full-time roles · freelance · talks
      </div>
      <h2 data-rv className="font-anton relative mt-6 text-[clamp(80px,13vw,220px)] uppercase leading-[.9]">
        Let&rsquo;s
        <br />
        <span className="txt-outline-accent2">Build</span>
      </h2>
      <div data-rv className="relative mt-11 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:maqsoodhuman@gmail.com"
          className="rounded-full bg-[var(--accent)] px-[34px] py-4 text-[15px] font-semibold text-[#0d0f0c] hover:[transform:scale(1.05)] focus-visible:[outline:2px_solid_var(--accent)] focus-visible:[outline-offset:3px]"
          style={{ transition: "transform .2s ease" }}
        >
          maqsoodhuman@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/maqsoodhuman"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile (opens in a new tab)"
          className="group rounded-full border border-[var(--chip)] px-[34px] py-4 text-[15px] font-semibold text-[var(--fg)] hover:border-[var(--accent)] focus-visible:[outline:2px_solid_var(--accent)] focus-visible:[outline-offset:3px]"
        >
          LinkedIn{" "}
          <span
            aria-hidden="true"
            className="inline-block group-hover:[transform:translate(3px,-3px)]"
            style={{ transition: "transform .3s ease" }}
          >
            ↗
          </span>
        </a>
        <a
          href="https://github.com/Maqsoodhuman"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile (opens in a new tab)"
          className="group rounded-full border border-[var(--chip)] px-[34px] py-4 text-[15px] font-semibold text-[var(--fg)] hover:border-[var(--accent)] focus-visible:[outline:2px_solid_var(--accent)] focus-visible:[outline-offset:3px]"
        >
          GitHub{" "}
          <span
            aria-hidden="true"
            className="inline-block group-hover:[transform:translate(3px,-3px)]"
            style={{ transition: "transform .3s ease" }}
          >
            ↗
          </span>
        </a>
      </div>
      <div data-rv className="font-jet relative mt-[120px] flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-[22px] text-[11px] font-medium uppercase tracking-[.12em] text-[var(--dim)]">
        <span>© 2026 Mohammed Maqsood Ahmed</span>
        <span>Always bringing the fight.</span>
        <span>Buffalo, NY — 42.88°N 78.87°W</span>
      </div>
    </section>
  );
}
