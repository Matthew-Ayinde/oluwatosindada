"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { scrollToHash } from "@/lib/scroll";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, useGSAP);

const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));

function formatCount(el: HTMLElement, v: number) {
  const prefix = el.dataset.prefix ?? "";
  const suffix = el.dataset.suffix ?? "";
  el.textContent = `${prefix}${Math.round(v).toLocaleString("en-NG")}${suffix}`;
}

/**
 * Single motion orchestrator. Sections are server-rendered with data-* hooks,
 * so all copy is crawlable HTML and the page reads fine without JavaScript.
 */
export default function Motion() {
  useGSAP((_, contextSafe) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fontsReady = Promise.race([
      document.fonts?.ready ?? Promise.resolve(),
      new Promise((r) => setTimeout(r, 2500)),
    ]);

    // In-page anchors outside the nav go through the smoother
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a || a.closest("[data-nav], #mobile-menu")) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      scrollToHash(href);
    };
    document.addEventListener("click", onClick);

    const loader = document.querySelector<HTMLElement>("[data-preloader]");

    if (reduce) {
      gsap.set(loader, { autoAlpha: 0, display: "none" });
      return () => document.removeEventListener("click", onClick);
    }

    /* ---------- Preloader: count up while fonts load ---------- */
    const countEl = document.querySelector<HTMLElement>("[data-preloader-count]");
    const counter = { v: 0 };
    const intro = gsap
      .timeline()
      .from("[data-preloader-word]", { yPercent: 110, duration: 1.1, ease: "expo.out" })
      .to(
        counter,
        {
          v: 100,
          duration: 1.6,
          ease: "power2.inOut",
          onUpdate: () => {
            if (countEl) countEl.textContent = String(Math.round(counter.v));
          },
        },
        0
      )
      .to("[data-preloader-bar]", { scaleX: 1, duration: 1.6, ease: "power2.inOut" }, 0);

    const start = contextSafe!(() => {
      setupHero();
      setupScroll();

      gsap
        .timeline()
        .to("[data-preloader-word]", { yPercent: -110, duration: 0.7, ease: "expo.in" })
        .to(loader, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1.1,
          ease: "expo.inOut",
        })
        .add(playHero(), "-=0.55")
        .set(loader, { display: "none" });
    });

    Promise.all([fontsReady, intro.then()]).then(() => start());

    /* ---------- Hero (runs once) ---------- */
    let heroTl: gsap.core.Timeline;
    function setupHero() {
      const lines = $("[data-hero-line]");
      const chars = lines.flatMap(
        (line) =>
          SplitText.create(line, {
            type: "lines,chars",
            mask: "lines",
            linesClass: "sl",
            aria: "hidden",
          })
            .chars as HTMLElement[]
      );
      heroTl = gsap
        .timeline({ paused: true })
        .from(chars, {
          yPercent: 118,
          rotate: 7,
          duration: 1.5,
          ease: "expo.out",
          stagger: 0.035,
        })
        .fromTo(
          "[data-hero-img]",
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" },
          0.05
        )
        .from("[data-hero-img] img", { scale: 1.45, duration: 2, ease: "expo.out" }, 0.3)
        .from(
          "[data-hero-fade]",
          { autoAlpha: 0, y: 24, duration: 1.1, ease: "expo.out", stagger: 0.08 },
          0.6
        );
    }
    function playHero() {
      return heroTl.play();
    }

    /* ---------- Scroll-driven motion (rebuilt per breakpoint) ---------- */
    let hashHandled = false;
    function setupScroll() {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px)",
          hover: "(hover: hover) and (pointer: fine)",
        },
        (ctx) => {
          const { desktop, hover } = ctx.conditions as { desktop: boolean; hover: boolean };
          const cleanups: (() => void)[] = [];

          ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.2,
            effects: true,
            smoothTouch: false,
          });

          // Hero drifts apart as you leave it
          gsap
            .timeline({
              scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true },
            })
            .to("[data-hero-line='1']", { xPercent: -10, ease: "none" }, 0)
            .to("[data-hero-line='2']", { xPercent: 10, ease: "none" }, 0)
            .to("[data-hero-img]", { yPercent: 18, scale: 0.92, ease: "none" }, 0);

          // Masked line reveals
          $("[data-split]").forEach((el) => {
            const chars = el.dataset.split === "chars";
            SplitText.create(el, {
              type: chars ? "lines,chars" : "lines",
              mask: "lines",
              linesClass: "sl",
              autoSplit: true,
              onSplit: (self) =>
                gsap.from(chars ? self.chars : self.lines, {
                  yPercent: 115,
                  rotate: chars ? 5 : 0,
                  duration: chars ? 1.3 : 1.2,
                  ease: "expo.out",
                  stagger: chars ? 0.02 : 0.09,
                  scrollTrigger: { trigger: el, start: "top 88%", once: true },
                }),
            });
          });

          // Manifesto: words light up as you read
          $("[data-words]").forEach((el) => {
            SplitText.create(el, {
              type: "words",
              autoSplit: true,
              onSplit: (self) =>
                gsap.from(self.words, {
                  opacity: 0.14,
                  stagger: 0.1,
                  ease: "none",
                  scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 50%", scrub: true },
                }),
            });
          });

          // Simple fades
          $("[data-reveal]").forEach((el) => {
            gsap.from(el, {
              y: 40,
              autoAlpha: 0,
              duration: 1.2,
              ease: "expo.out",
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            });
          });
          $("[data-stagger]").forEach((el) => {
            gsap.from(el.children, {
              y: 36,
              autoAlpha: 0,
              duration: 1.1,
              ease: "expo.out",
              stagger: 0.08,
              scrollTrigger: { trigger: el, start: "top 86%", once: true },
            });
          });

          // Hairline rules draw in
          $("[data-rule]").forEach((el) => {
            gsap.from(el, {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 1.4,
              ease: "expo.inOut",
              scrollTrigger: { trigger: el, start: "top 92%", once: true },
            });
          });

          // Image curtain reveals + inner parallax
          $("[data-img]").forEach((el) => {
            const img = el.querySelector("img");
            const inner = el.querySelector("[data-img-inner]");
            gsap
              .timeline({ scrollTrigger: { trigger: el, start: "top 82%", once: true } })
              .fromTo(
                el,
                { clipPath: "inset(100% 0% 0% 0%)" },
                { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" }
              )
              .from(img, { scale: 1.35, duration: 2, ease: "expo.out" }, 0.2);
            if (inner) {
              gsap.fromTo(
                inner,
                { yPercent: -8 },
                {
                  yPercent: 8,
                  ease: "none",
                  scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
                }
              );
            }
          });

          // Counters
          $("[data-count]").forEach((el) => {
            const target = Number(el.dataset.count);
            const obj = { v: 0 };
            formatCount(el, 0);
            gsap.to(obj, {
              v: target,
              duration: 2,
              ease: "power3.out",
              onUpdate: () => formatCount(el, obj.v),
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            });
          });

          // Oversized type drifting sideways with scroll
          $("[data-drift]").forEach((el) => {
            gsap.fromTo(
              el,
              { xPercent: 0 },
              {
                xPercent: Number(el.dataset.drift),
                ease: "none",
                scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
              }
            );
          });

          // Strike-through ledger
          $("[data-ledger-row]").forEach((row) => {
            gsap
              .timeline({ scrollTrigger: { trigger: row, start: "top 85%", once: true } })
              .from(row.querySelector("[data-strike]"), {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 0.8,
                ease: "expo.inOut",
              })
              .from(
                row.querySelectorAll("[data-after]"),
                { autoAlpha: 0, x: -16, duration: 0.8, ease: "expo.out", stagger: 0.08 },
                "-=0.3"
              );
          });

          // Velocity-reactive marquees
          $("[data-marquee]").forEach((el) => {
            const track = el.querySelector("[data-marquee-track]");
            const dir = el.dataset.marquee === "reverse" ? 1 : -1;
            const loop = gsap.fromTo(
              track,
              { xPercent: dir === -1 ? 0 : -50 },
              { xPercent: dir === -1 ? -50 : 0, duration: 38, ease: "none", repeat: -1 }
            );
            // headroom so scrolling up (negative timeScale) never stalls at time 0
            loop.totalTime(loop.duration() * 200);
            const skew = gsap.quickTo(track, "skewX", { duration: 0.5, ease: "power3" });
            ScrollTrigger.create({
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              onUpdate: (self) => {
                const v = self.getVelocity();
                gsap.to(loop, {
                  timeScale: gsap.utils.clamp(1, 6, 1 + Math.abs(v) / 300) * (v < 0 ? -1 : 1),
                  duration: 0.2,
                  overwrite: true,
                  onComplete: () => {
                    gsap.to(loop, { timeScale: v < 0 ? -1 : 1, duration: 1.2, overwrite: true });
                  },
                });
                skew(gsap.utils.clamp(-8, 8, v / -250));
              },
              onToggle: (self) => !self.isActive && skew(0),
            });
          });

          // Hide nav on scroll down, show on scroll up
          const navTo = gsap.quickTo("[data-nav]", "yPercent", { duration: 0.6, ease: "expo.out" });
          ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => navTo(self.scroll() > 240 && self.direction === 1 ? -140 : 0),
          });

          if (desktop) {
            // Horizontal case-study rail
            $("[data-hscroll]").forEach((section) => {
              const track = section.querySelector<HTMLElement>("[data-hscroll-track]")!;
              const bar = section.querySelector("[data-hscroll-progress]");
              const distance = () => track.scrollWidth - window.innerWidth;
              gsap.to(track, {
                x: () => -distance(),
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top top",
                  end: () => `+=${distance()}`,
                  pin: true,
                  scrub: 1,
                  invalidateOnRefresh: true,
                  anticipatePin: 1,
                  onUpdate: (self) => bar && gsap.set(bar, { scaleX: self.progress }),
                },
              });
            });

            // Pinned chapter headers
            $("[data-pin-parent]").forEach((parent) => {
              const col = parent.querySelector<HTMLElement>("[data-pin]");
              if (!col) return;
              ScrollTrigger.create({
                trigger: parent,
                pin: col,
                start: "top top+=120",
                end: () => `bottom top+=${col.offsetHeight + 160}`,
                pinSpacing: false,
                invalidateOnRefresh: true,
              });
            });
          }

          if (hover) {
            $("[data-magnetic]").forEach((el) => {
              const xTo = gsap.quickTo(el, "x", { duration: 0.8, ease: "elastic.out(1, 0.4)" });
              const yTo = gsap.quickTo(el, "y", { duration: 0.8, ease: "elastic.out(1, 0.4)" });
              const move = (e: PointerEvent) => {
                const r = el.getBoundingClientRect();
                xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
                yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
              };
              const leave = () => {
                xTo(0);
                yTo(0);
              };
              el.addEventListener("pointermove", move);
              el.addEventListener("pointerleave", leave);
              cleanups.push(() => {
                el.removeEventListener("pointermove", move);
                el.removeEventListener("pointerleave", leave);
              });
            });
          }

          ScrollTrigger.sort();
          ScrollTrigger.refresh();

          // Honour a hash in the URL on first load
          if (!hashHandled && location.hash) {
            hashHandled = true;
            requestAnimationFrame(() => scrollToHash(location.hash));
          }

          return () => cleanups.forEach((fn) => fn());
        }
      );
    }

    return () => document.removeEventListener("click", onClick);
  });

  return null;
}
