"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { nav } from "@/lib/site";
import { person } from "@/lib/content";
import { scrollToHash } from "@/lib/scroll";

gsap.registerPlugin(useGSAP);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .set(menuRef.current, { visibility: "visible" })
        .fromTo(
          menuRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 0.9, ease: "expo.inOut" }
        )
        .from(
          "[data-menu-link]",
          { yPercent: 110, duration: 0.9, stagger: 0.06, ease: "expo.out" },
          "-=0.35"
        )
        .from("[data-menu-meta]", { autoAlpha: 0, y: 12, duration: 0.6 }, "-=0.6");
    },
    { scope: menuRef }
  );

  useEffect(() => {
    if (!tl.current) return;
    if (open) tl.current.timeScale(1).play();
    else tl.current.timeScale(1.6).reverse();
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.paused(open);
    else document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    // let the menu start closing before scrolling
    setTimeout(() => scrollToHash(href), open ? 350 : 0);
  };

  return (
    <>
      <header
        data-nav
        className="fixed inset-x-0 top-0 z-[70] gutter pt-3 sm:pt-4"
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 rounded-full border border-ink/10 bg-paper/75 py-2 pl-2 pr-2 shadow-[0_8px_30px_-12px_rgba(10,23,18,0.25)] backdrop-blur-xl sm:pl-3"
        >
          <a
            href="#top"
            onClick={(e) => go(e, "#top")}
            className="group flex items-center gap-3"
            aria-label={`${person.name} — back to top`}
          >
            <span className="grid size-9 place-items-center rounded-full bg-ink font-serif text-[0.95rem] italic text-paper transition-transform duration-500 group-hover:rotate-[-12deg]">
              OD
            </span>
            <span className="hidden text-sm font-medium tracking-tight sm:block">
              {person.name}
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className="group flex items-baseline gap-1.5 rounded-full px-4 py-2 text-sm transition-colors hover:bg-sage"
                >
                  <span className="label text-[0.6rem] text-moss">
                    0{i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => go(e, "#contact")}
              className="hidden rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-moss sm:block"
            >
              Let&rsquo;s talk
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative grid size-10 place-items-center rounded-full bg-sage lg:hidden"
            >
              <span
                className={`absolute h-px w-4 bg-ink transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-[3px]"}`}
              />
              <span
                className={`absolute h-px w-4 bg-ink transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-[3px]"}`}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className="invisible fixed inset-0 z-[65] flex flex-col justify-between bg-night gutter pb-8 pt-28 text-paper lg:hidden"
        aria-hidden={!open}
        inert={!open}
      >
        <ul className="flex flex-col gap-1">
          {[...nav, { href: "#contact", label: "Contact" }].map((item, i) => (
            <li key={item.href} className="overflow-hidden">
              <a
                data-menu-link
                href={item.href}
                onClick={(e) => go(e, item.href)}
                className="flex items-baseline gap-4 py-1"
              >
                <span className="label text-fern">0{i + 1}</span>
                <span className="display text-[13vw] sm:text-[9vw]">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div data-menu-meta className="flex flex-col gap-2 text-mist">
          <a href={`mailto:${person.email}`} className="text-sm underline-offset-4 hover:underline">
            {person.email}
          </a>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </>
  );
}
