import Image from "next/image";
import BrandIcon from "./BrandIcon";
import HeroFx from "./HeroFx";
import { HERO_STACK } from "@/lib/data";

const NAV = [
  ["#stack", "SKILLS"],
  ["#projects", "PROJECTS"],
  ["#work", "EXPERIENCE"],
  ["#writing", "WRITING"],
  ["#contact", "CONTACT"],
] as const;

/* mini glyphs for the rail badges */
const DroneGlyph = () => (
  <svg viewBox="0 0 44 20" aria-hidden="true" className="h-[16px] w-[36px]">
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
      <path d="M16 12 L7 5 M28 12 L37 5" />
      <path d="M2 5h10 M32 5h10" />
    </g>
    <path d="M14 11 Q22 7 30 11 L28 16 Q22 19 16 16 Z" fill="currentColor" />
  </svg>
);

const CloudGlyph = () => (
  <svg viewBox="0 0 44 20" aria-hidden="true" className="h-[16px] w-[36px]">
    <path
      d="M13 16 a6 6 0 1 1 2-11.6 A7.5 7.5 0 0 1 29 6.5 a5.5 5.5 0 0 1 2 10.5 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
      transform="translate(4 0)"
    />
  </svg>
);

const RAIL: Array<{
  badge: React.ReactNode;
  title: string;
  items: readonly string[];
  px: string;
}> = [
  {
    badge: "AI",
    title: "AI / ML",
    items: ["Data to decisions", "Intelligent systems", "Predictive models"],
    px: "0.26",
  },
  {
    badge: (
      <span className="flex flex-col items-center gap-[3px]">
        <DroneGlyph />
        <span className="text-[19px]">LLM</span>
      </span>
    ),
    title: "LLMS THAT FLY",
    items: ["Multimodal models on drones", "30+ FPS edge inference", "Voice & vision → flight logic"],
    px: "0.4",
  },
  {
    badge: (
      <span className="flex flex-col items-center gap-[3px]">
        <CloudGlyph />
        <span className="text-[19px]">AWS</span>
      </span>
    ),
    title: "CLOUD AT SCALE",
    items: ["Event-driven AWS platforms", "2M events a day", "99.9% uptime · 500K users"],
    px: "0.54",
  },
];

const ArrowIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" aria-hidden="true">
    <path d="M2 10 L10 2 M4 2h6v6" stroke="currentColor" strokeWidth="1.8" fill="none" />
  </svg>
);

export default function Hero() {
  return (
    <section id="top" data-theme="light" className="hero-bg relative flex min-h-screen flex-col overflow-hidden lg:block">
      <div className="hero-texture pointer-events-none absolute inset-0 z-0" />

      {/* angular dark panel (desktop) */}
      <div aria-hidden="true" className="hero-clip absolute bottom-0 right-0 top-0 z-[1] hidden w-[56%] lg:block">
        <HeroFx />
        <svg className="absolute right-0 top-[26%] w-[70%] opacity-50" viewBox="0 0 700 260" fill="none">
          <path d="M0 260 L90 150 L150 200 L240 90 L330 190 L420 60 L510 170 L590 110 L700 220 L700 260 Z" fill="#1c1f21" />
          <path d="M240 90 L270 130 L255 128 L280 165 L305 150 L330 190 L240 90Z" fill="#3a3e41" />
          <path d="M420 60 L450 105 L432 100 L462 145 L488 128 L510 170 L420 60Z" fill="#44484b" />
        </svg>
      </div>

      {/* nav */}
      <nav aria-label="Primary" className="relative z-[8] flex items-center justify-between gap-4 px-5 pt-6 sm:gap-5 sm:px-7 lg:px-11">
        <a
          href="#top"
          aria-label="Maqsood Ahmed, back to top"
          className="rounded-sm text-[22px] font-black leading-[.95] tracking-[.5px] text-[var(--fg)] transition-opacity duration-200 hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--fg)]"
        >
          MAQSOOD
          <br />
          AHMED
        </a>
        <div className="flex items-center gap-[30px]">
          <ul className="nav-blend hidden list-none gap-8 lg:flex">
            {NAV.map(([href, label]) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-barlow relative inline-block py-1 text-sm font-semibold tracking-[1.4px] text-white transition-colors duration-200 hover:text-[var(--lime)] focus-visible:text-[var(--lime)] focus-visible:outline-none after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="font-barlow group inline-flex items-center gap-2 rounded-full bg-[var(--lime)] px-6 py-[13px] text-sm font-bold tracking-[1.2px] !text-[#111214] shadow-[0_2px_10px_rgba(200,240,0,.35)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(200,240,0,.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--fg)]"
          >
            LET&apos;S CONNECT
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowIcon size={11} />
            </span>
          </a>
        </div>
      </nav>

      {/* left column */}
      <div className="relative z-[5] flex max-w-full flex-col px-5 pt-6 sm:px-7 sm:pt-7 lg:max-w-[540px] lg:pl-[clamp(36px,6vw,90px)] lg:pr-0 lg:pt-[clamp(28px,5.5vh,64px)]">
        <div className="font-barlow flex items-center gap-3 text-[17px] font-bold tracking-[2.5px] text-[#5c7c00] sm:text-[19px] lg:text-[21px]">
          <span aria-hidden="true" className="relative flex h-2.5 w-2.5 flex-none">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lime)] opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#5c7c00]" />
          </span>
          SENIOR AI-CLOUD ENGINEER
        </div>
        <h1 className="mt-4 font-sans text-[clamp(52px,6vw,88px)] font-black italic uppercase leading-[.98] tracking-[-2px] text-[#141618]">
          Engineer.
          <br />
          Thinker.
          <br />
          Builder.
        </h1>
        <p className="mt-[clamp(14px,2.4vh,24px)] max-w-[420px] text-[clamp(15px,1.4vw,16.5px)] font-medium leading-[1.55] text-[#3a3c3e]">
          I build intelligent systems that ship: edge inference on drones, LLM applications, and cloud platforms engineered to scale.
        </p>
        <div className="mt-[clamp(18px,3vh,32px)] flex flex-wrap items-center gap-7">
          <a
            href="#projects"
            className="font-barlow group inline-flex items-center gap-2.5 rounded-full bg-[var(--lime)] px-7 py-4 text-[15px] font-bold tracking-[1.4px] text-[#111214] shadow-[0_4px_16px_rgba(180,215,0,.45)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(180,215,0,.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--fg)]"
          >
            VIEW MY WORK
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowIcon />
            </span>
          </a>
          <a
            href="/uploads/resume-1784183000150.pdf"
            download
            aria-label="Download CV (PDF)"
            className="font-barlow group inline-flex items-center gap-2 rounded-sm border-b-[1.5px] border-[var(--fg)] pb-0.5 text-[15px] font-semibold tracking-[1px] text-[var(--fg)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--fg)]"
          >
            Download CV
            <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-y-0.5">
              <path d="M7 1v8M3.5 6L7 9.5 10.5 6M2 12.5h10" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
          </a>
        </div>

        <div className="mt-[clamp(20px,4vh,44px)] flex flex-col gap-[clamp(14px,2.6vh,26px)] pb-10">
          <div>
            <div className="font-barlow flex items-center gap-3 text-xs font-bold tracking-[2.2px] text-[#7b7d80] after:h-px after:w-12 after:bg-gradient-to-r after:from-[#b9bab8] after:to-transparent after:content-['']">
              TECH STACK
            </div>
            <div className="mt-3.5 flex flex-wrap items-center gap-5">
              {HERO_STACK.map((k) => (
                <a
                  key={k}
                  href="#stack"
                  className="group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)]"
                >
                  <BrandIcon
                    name={k}
                    className="h-8 w-8 fill-[#2a2c2e] opacity-85 transition-all duration-200 group-hover:-translate-y-[3px] group-hover:fill-[var(--accent)] group-hover:opacity-100 group-focus-visible:-translate-y-[3px] group-focus-visible:fill-[var(--accent)] group-focus-visible:opacity-100"
                  />
                </a>
              ))}
              <span className="text-[22px] leading-none tracking-[2px] text-[#9a9c9e]">•••</span>
            </div>
          </div>
          <div>
            <div className="font-barlow flex items-center gap-3 text-xs font-bold tracking-[2.2px] text-[#7b7d80] after:h-px after:w-12 after:bg-gradient-to-r after:from-[#b9bab8] after:to-transparent after:content-['']">
              LET&apos;S CONNECT
            </div>
            <div className="mt-3.5 flex gap-4">
              {[
                {
                  href: "https://linkedin.com/in/maqsoodhuman",
                  label: "LinkedIn",
                  d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.31h4.52V23H.24V8.31zM8.34 8.31h4.33v2h.06c.6-1.14 2.08-2.34 4.28-2.34C21.6 7.97 22.4 11 22.4 14.9V23h-4.5v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V23h-4.4V8.31z",
                },
                {
                  href: "https://github.com/Maqsoodhuman",
                  label: "GitHub",
                  d: "M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17.1 4.7 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z",
                },
                {
                  href: "mailto:maqsoodhuman@gmail.com",
                  label: "Email",
                  d: "M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm10 8.5L3.5 6v12h17V6L12 12.5zM4.2 5.5l7.8 6 7.8-6H4.2z",
                },
              ].map((s) => {
                const external = s.href.startsWith("http");
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={external ? `${s.label} (opens in a new tab)` : s.label}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border-[1.5px] border-[#c9cac7] text-[#16180f] transition-[color,background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#111214] hover:bg-[#111214] hover:text-[var(--lime)] focus-visible:-translate-y-0.5 focus-visible:border-[#111214] focus-visible:bg-[#111214] focus-visible:text-[var(--lime)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--fg)]"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[17px] w-[17px] fill-current">
                      <path d={s.d} />
                    </svg>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* handwritten name tag (desktop) */}
      <div aria-hidden="true" data-px="0.3" className="pointer-events-none absolute left-[41%] top-[8.5%] z-[6] hidden text-left xl:block">
        <div className="font-caveat -rotate-[8deg] text-[40px] font-semibold leading-[.9] text-[#1c1e20]">
          Maqsood
          <span className="ml-[38px] block text-[24px]">Ahmed</span>
        </div>
        <div className="font-barlow mt-3.5 flex items-center gap-[7px] text-[13px] font-semibold tracking-[1.6px] text-[#3a3c3e]">
          <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
            <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="10" r="2.6" fill="currentColor" />
          </svg>
          BASED IN BUFFALO, NY
        </div>
      </div>

      {/* person cutout */}
      <Image
        id="heroImg"
        src="/images/person-cutout.png"
        alt="Portrait of Mohammed Maqsood Ahmed, Senior AI-Cloud Engineer"
        width={1006}
        height={935}
        priority
        className="hero-img-m pointer-events-none absolute bottom-0 left-[56.5%] z-[4] h-[76vh] max-h-[900px] min-h-[480px] w-auto drop-shadow-[0_18px_40px_rgba(0,0,0,.35)]"
      />

      {/* drone (desktop) */}
      <svg
        aria-hidden="true"
        className="anim-drone absolute right-[6%] top-[9%] z-[6] hidden w-[min(300px,22vw)] drop-shadow-[0_16px_26px_rgba(0,0,0,.5)] lg:block"
        viewBox="0 0 340 160"
        fill="none"
      >
        <g stroke="#26292b" strokeWidth="7" strokeLinecap="round">
          <path d="M120 78 L58 44" />
          <path d="M220 78 L282 44" />
          <path d="M126 96 L70 122" />
          <path d="M214 96 L270 122" />
        </g>
        <g opacity=".8">
          <ellipse cx="58" cy="42" rx="46" ry="6" fill="#1b1d1f" />
          <ellipse cx="282" cy="42" rx="46" ry="6" fill="#1b1d1f" />
          <ellipse cx="70" cy="122" rx="40" ry="5" fill="#1b1d1f" />
          <ellipse cx="270" cy="122" rx="40" ry="5" fill="#1b1d1f" />
        </g>
        <circle cx="58" cy="43" r="8" fill="#2f3234" />
        <circle cx="282" cy="43" r="8" fill="#2f3234" />
        <circle cx="70" cy="121" r="7" fill="#2f3234" />
        <circle cx="270" cy="121" r="7" fill="#2f3234" />
        <circle cx="58" cy="43" r="3" fill="#c8f000" />
        <circle cx="282" cy="43" r="3" fill="#c8f000" />
        <path d="M112 70 Q170 48 228 70 L236 96 Q170 118 104 96 Z" fill="#232628" />
        <path d="M120 72 Q170 56 220 72 L224 84 Q170 98 116 84 Z" fill="#33373a" />
        <rect x="150" y="98" width="40" height="24" rx="7" fill="#1a1c1e" />
        <circle cx="170" cy="110" r="9" fill="#0c0d0e" stroke="#4a4e51" strokeWidth="2" />
        <circle cx="170" cy="110" r="4" fill="#2b6cff" opacity=".7" />
        <circle cx="140" cy="104" r="2.5" fill="#c8f000" />
      </svg>

      {/* capability rail */}
      <div className="rail-m absolute right-[5%] top-[30%] z-[6] flex flex-col gap-[clamp(20px,3.6vh,36px)] lg:absolute">
        {RAIL.map((r) => (
          <div key={r.title} data-px={r.px} className="flex items-center gap-[18px]">
            <div aria-hidden="true" className="rail-badge flex h-[74px] w-[88px] flex-none items-center justify-center rounded-[14px] text-[28px] font-black tracking-[-1px] text-white">
              {r.badge}
            </div>
            <div>
              <h2 className="font-barlow mb-[7px] mt-0 text-[15px] font-bold tracking-[2px] text-[var(--lime)]">
                {r.title}
              </h2>
              <ul className="hidden list-none p-0 xl:block">
                {r.items.map((it) => (
                  <li
                    key={it}
                    className="font-barlow text-[12.5px] font-medium uppercase leading-[1.85] tracking-[1.6px] text-[#c8cacb]"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* scroll cue (desktop) */}
      <div aria-hidden="true" className="absolute bottom-[30px] right-11 z-[6] hidden flex-col items-center gap-3 text-[#e8e9ea] lg:flex">
        <span className="font-barlow text-xs font-semibold tracking-[2px]">SCROLL DOWN</span>
        <span className="relative block h-[38px] w-6 rounded-[14px] border-2 border-[#e8e9ea]">
          <span className="anim-wheel absolute left-1/2 top-[7px] h-[7px] w-[3px] rounded-[3px] bg-[var(--lime)]" />
        </span>
      </div>
    </section>
  );
}
