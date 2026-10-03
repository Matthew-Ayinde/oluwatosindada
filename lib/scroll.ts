import { ScrollSmoother } from "gsap/ScrollSmoother";

// Routes in-page navigation through ScrollSmoother when it is active
export function scrollToHash(hash: string) {
  const target = hash === "#top" ? document.body : document.querySelector(hash);
  if (!target) return;
  const smoother = ScrollSmoother.get();
  if (smoother) {
    smoother.scrollTo(hash === "#top" ? 0 : (target as Element), true, "top top");
  } else {
    if (hash === "#top") window.scrollTo({ top: 0, behavior: "smooth" });
    else target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (target instanceof HTMLElement && hash !== "#top") {
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }
  history.replaceState(null, "", hash === "#top" ? location.pathname : hash);
}
