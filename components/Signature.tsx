import Image from "next/image";

/* Hand-authored single-stroke cursive "Maqsood".
   Written on like a real pen stroke once in view (see ScrollFx). */
const SIG_PATH = `
M 55,232
C 70,175 92,105 106,78
C 116,60 128,64 128,84
C 128,120 116,190 110,232
C 122,180 140,116 152,90
C 160,72 172,74 172,94
C 172,130 166,196 162,232
C 170,200 186,170 212,162
C 194,164 178,184 178,204
C 178,224 192,236 208,229
C 222,222 232,204 236,186
C 234,204 234,222 242,230
C 250,238 262,228 266,214
C 274,190 290,166 314,162
C 296,166 280,184 280,204
C 280,224 294,236 310,229
C 324,222 334,204 338,186
C 338,220 338,262 341,286
C 343,302 352,306 358,296
C 363,288 362,274 366,258
C 371,238 380,214 394,192
C 400,182 406,172 410,166
C 414,160 420,162 419,170
C 417,181 405,190 396,201
C 388,211 386,222 392,229
C 399,237 412,233 421,222
C 429,212 437,198 446,186
C 452,174 464,164 478,164
C 460,168 448,186 448,204
C 448,222 462,234 478,227
C 492,220 500,202 500,186
C 500,174 492,166 480,168
C 492,168 504,176 514,184
C 522,172 534,164 548,164
C 530,168 518,186 518,204
C 518,222 532,234 548,227
C 562,220 570,202 570,186
C 570,174 562,166 550,168
C 562,168 574,176 584,184
C 592,176 604,168 618,166
C 600,170 588,188 588,206
C 588,224 602,235 618,228
C 632,221 640,204 644,186
C 650,152 656,112 660,90
C 663,74 672,72 674,88
C 676,112 668,180 664,232
C 676,214 696,200 720,194
C 750,186 790,184 830,176`;

/* Underline flourish — drawn as a second pen stroke after the name completes. */
const SIG_FLOURISH = `
M 640,282
C 560,300 400,310 300,300
C 280,298 270,292 268,286`;

const MQ_SERIF = "Built it at scale — Built it at scale — Built it at scale — ";
const MQ_ANTON = "And I will ship it forever · And I will ship it forever · ";

export default function Signature() {
  return (
    <section id="about" data-theme="dark" className="relative overflow-hidden py-24 sm:py-28 lg:py-[150px] lg:pb-[170px]">
      <div data-rv className="relative z-[3] mb-12 text-center lg:mb-[70px]">
        <div className="font-anton text-[26px] text-[var(--accent)]">MA</div>
        <div className="font-jet mt-2.5 text-[11px] font-medium uppercase tracking-[.22em] text-[var(--muted)]">
          Message from Maqsood
        </div>
      </div>

      <div id="sigStage" className="relative h-[400px] sm:h-[480px] lg:h-[560px]">
        <div className="absolute left-0 right-0 top-[6%] z-[1] overflow-visible whitespace-nowrap">
          <div className="anim-mqL font-iserif inline-flex text-[84px] italic leading-none text-[#9db830] [animation-duration:30s] sm:text-[118px] lg:text-[150px]">
            <span className="pr-[70px]">{MQ_SERIF.repeat(1)}</span>
            <span className="pr-[70px]">{MQ_SERIF.repeat(1)}</span>
          </div>
        </div>
        <div className="absolute left-0 right-0 top-[38%] z-[1] overflow-visible whitespace-nowrap">
          <div className="anim-mqR font-anton inline-flex text-[84px] uppercase leading-none text-[var(--fg)] [animation-duration:34s] sm:text-[118px] lg:text-[150px]">
            <span className="pr-[70px]">{MQ_ANTON.repeat(1)}</span>
            <span className="pr-[70px]">{MQ_ANTON.repeat(1)}</span>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 z-[2] h-[400px] w-[520px] max-w-[86vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden sm:h-[480px] lg:h-[560px]">
          <Image
            src="/images/maqsood-detroit.png"
            alt="Maqsood, Detroit riverfront"
            fill
            sizes="520px"
            className="object-cover object-[42%_20%] opacity-85 brightness-[.92] contrast-[1.05] grayscale"
          />
          <div className="absolute inset-0 bg-[rgba(13,15,12,.18)]" />
        </div>

        {/* signature — written on like a real pen stroke once in view (see ScrollFx) */}
        <svg
          id="sigSvg"
          className="sig-svg pointer-events-none absolute left-1/2 top-1/2 z-[4] w-[min(880px,88vw)] -translate-x-1/2 -translate-y-[54%] -rotate-[9deg] overflow-visible"
          viewBox="0 0 960 340"
          aria-label="Maqsood signature"
        >
          <path id="sigPath" d={SIG_PATH} />
          <path id="sigFlourish" d={SIG_FLOURISH} />
          <circle id="sigPen" className="sig-pen" r="8" cx="-60" cy="-60" />
        </svg>
      </div>

      <div
        data-rv
        className="relative z-[3] mx-auto mt-12 max-w-[820px] px-5 text-center text-[clamp(20px,2.4vw,32px)] font-semibold leading-[1.4] tracking-[-.01em] [text-wrap:pretty] sm:px-8 lg:mt-20 lg:px-10"
      >
        <em className="not-italic text-[var(--accent)]">Redefining</em> what ships at the edge. Keeping{" "}
        <em className="not-italic text-[var(--accent)]">critical infrastructure</em> alive. Turning research into{" "}
        <em className="not-italic text-[var(--accent)]">systems that fly</em> — literally.
      </div>
    </section>
  );
}
