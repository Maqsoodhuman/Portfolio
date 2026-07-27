"use client";

import { useEffect } from "react";

/**
 * Global scroll-driven effects, mirroring the approved static build:
 *  - light/dark theme variable switching as [data-theme] sections cross 55% viewport
 *  - hero parallax ([data-px] elements + hero image), desktop only
 *  - photo-strip horizontal scrub
 *  - signature write-on: once the stage is properly in view, the name is
 *    drawn like a real pen stroke (eased rAF + glowing pen tip), the pen
 *    lifts, then the underline flourish sweeps in
 *  - [data-rv] reveal animations via IntersectionObserver
 */

const THEMES: Record<string, Record<string, string>> = {
  dark: {
    "--bg": "#0d0f0c",
    "--fg": "#eef1e8",
    "--muted": "#b9c0b0",
    "--faint": "#7d8674",
    "--dim": "#5f6959",
    "--line": "#232720",
    "--chip": "#2c3128",
    "--hoverbg": "#12150f",
    "--s1": "#191c17",
    "--s2": "#151813",
    "--accent": "#c8f542",
  },
  light: {
    "--bg": "#ece7da",
    "--fg": "#16180f",
    "--muted": "#4b4e40",
    "--faint": "#6f7263",
    "--dim": "#9a9a8a",
    "--line": "#d3cdb9",
    "--chip": "#c6c0ab",
    "--hoverbg": "#e2dcc9",
    "--s1": "#dfd9c6",
    "--s2": "#d7d1bd",
    "--accent": "#3f6212",
  },
};

export default function ScrollFx() {
  useEffect(() => {
    const root = document.getElementById("root");
    const heroImg = document.getElementById("heroImg");
    const strip = document.getElementById("strip");
    const sigPath = document.getElementById(
      "sigPath",
    ) as unknown as SVGPathElement | null;
    const sigFlourish = document.getElementById(
      "sigFlourish",
    ) as unknown as SVGPathElement | null;
    const sigPen = document.getElementById(
      "sigPen",
    ) as unknown as SVGCircleElement | null;
    const sigSvg = document.getElementById("sigSvg");
    const sigStage = document.getElementById("sigStage");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* prime both strokes fully hidden */
    let nameLen = 0;
    let flLen = 0;
    if (sigPath && sigFlourish) {
      nameLen = sigPath.getTotalLength();
      flLen = sigFlourish.getTotalLength();
      for (const [p, len] of [
        [sigPath, nameLen],
        [sigFlourish, flLen],
      ] as const) {
        p.style.strokeDasharray = String(len);
        p.style.strokeDashoffset = String(len);
      }
    }

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const movePen = (path: SVGPathElement, at: number) => {
      if (!sigPen) return;
      const pt = path.getPointAtLength(at);
      sigPen.setAttribute("cx", String(pt.x));
      sigPen.setAttribute("cy", String(pt.y));
    };

    let sigRaf = 0;
    let sigPlayed = false;
    const playSignature = () => {
      if (sigPlayed || !sigPath || !sigFlourish) return;
      sigPlayed = true;

      const finish = () => {
        sigPath.style.strokeDashoffset = "0";
        sigFlourish.style.strokeDashoffset = "0";
        if (sigPen) sigPen.style.opacity = "0";
        sigSvg?.classList.add("sig-done");
      };
      if (reduced) {
        finish();
        return;
      }

      const NAME_MS = 2200; /* writing the name */
      const LIFT_MS = 180; /* pen lifts off the paper */
      const FLOURISH_MS = 520; /* underline sweep */
      let start = 0;
      const frame = (ts: number) => {
        if (!start) start = ts;
        const el = ts - start;
        if (el <= NAME_MS) {
          const p = easeInOutCubic(el / NAME_MS);
          sigPath.style.strokeDashoffset = String(nameLen * (1 - p));
          if (sigPen) sigPen.style.opacity = "1";
          movePen(sigPath, nameLen * p);
        } else if (el <= NAME_MS + LIFT_MS) {
          sigPath.style.strokeDashoffset = "0";
          if (sigPen) sigPen.style.opacity = "0";
        } else if (el <= NAME_MS + LIFT_MS + FLOURISH_MS) {
          const p = easeOutCubic((el - NAME_MS - LIFT_MS) / FLOURISH_MS);
          sigFlourish.style.strokeDashoffset = String(flLen * (1 - p));
          if (sigPen) sigPen.style.opacity = "1";
          movePen(sigFlourish, flLen * p);
        } else {
          finish();
          return;
        }
        sigRaf = requestAnimationFrame(frame);
      };
      sigRaf = requestAnimationFrame(frame);
    };

    const sigIO = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting)) {
          playSignature();
          sigIO.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    if (sigStage) sigIO.observe(sigStage);

    let curTheme = "light";

    /* static node lists: queried once, not per scroll frame */
    const themeSections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-theme]"),
    );
    const pxNodes = Array.from(
      document.querySelectorAll<HTMLElement>("#top [data-px]"),
    );

    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;

      /* theme switch */
      let cur = "dark";
      themeSections.forEach((s) => {
        if (s.getBoundingClientRect().top <= vh * 0.55)
          cur = s.dataset.theme as string;
      });
      if (cur !== curTheme && root) {
        curTheme = cur;
        const t = THEMES[cur];
        for (const k in t) root.style.setProperty(k, t[k]);
      }

      /* hero parallax (desktop only) */
      const p = Math.min(1, y / vh);
      if (window.innerWidth > 1023) {
        pxNodes.forEach((n) => {
          const sp = parseFloat(n.dataset.px as string);
          const base = n.dataset.base || "";
          n.style.transform = `${base} translateY(${y * sp}px)`;
        });
        if (heroImg)
          heroImg.style.transform = `translateX(-50%) translateY(${y * -0.05}px) scale(${1 + p * 0.06})`;
      } else {
        pxNodes.forEach((n) => {
          n.style.transform = "";
        });
        if (heroImg) heroImg.style.transform = "";
      }

      /* photo strip scrub */
      if (strip) {
        const r = strip.getBoundingClientRect();
        const sp = 1 - Math.min(1, Math.max(0, (r.top + r.height) / (vh + r.height)));
        const over = strip.scrollWidth - window.innerWidth;
        strip.style.transform = `translateX(${-sp * Math.max(0, over)}px)`;
      }

    };

    /* reveals */
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            const t = e.target as HTMLElement;
            t.style.transition =
              "opacity .9s cubic-bezier(.19,1,.22,1), transform .9s cubic-bezier(.19,1,.22,1), background-color .6s, border-color .6s, color .6s";
            t.style.opacity = "1";
            t.style.transform = "translateY(0)";
            io.unobserve(t);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll<HTMLElement>("[data-rv]").forEach((n) => {
      n.style.opacity = "0";
      n.style.transform = "translateY(36px)";
      io.observe(n);
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
      sigIO.disconnect();
      cancelAnimationFrame(sigRaf);
    };
  }, []);

  return null;
}
