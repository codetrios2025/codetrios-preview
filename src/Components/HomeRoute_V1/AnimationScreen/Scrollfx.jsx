import { useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./Scrollfx.css";

/**
 * <ScrollFX />  (mount once per page, e.g. in HomeRouteV1)
 *
 * 1. Smooth, inertial scrolling (Lenis) + smooth same-page anchor links.
 * 2. Scroll reveal: any element with data-reveal animates in when it enters the viewport.
 *      data-reveal="up | down | left | right | zoom | fade | clip"
 *      data-reveal-delay="200"        extra delay in ms
 *      data-reveal-duration="1.2s"    override duration
 *      data-reveal-distance="80px"    override travel distance
 *      data-reveal-once               opt out of replay for this element (default: replays every time)
 *    Elements that enter the viewport in the same moment are staggered automatically,
 *    so a row of cards cascades in without any per-card delay.
 *    Animations play only while scrolling DOWN. Scrolling UP never animates: content is simply there.
 *    Replay: an element that leaves through the bottom of the screen (you scrolled up past it) resets,
 *    so it animates again the next time you scroll down to it. Elements that leave through the top stay
 *    visible, so scrolling back up shows them instantly.
 *    <ScrollFX replay={false} />            every element animates only once
 *    <ScrollFX animateOnScrollUp />         also animate when scrolling up (content enters from above)
 * 3. Parallax:
 *      data-parallax="0.08"           moves slower/faster than the page (keep it small)
 *      data-parallax-zoom             pair with data-parallax on an <img> inside an overflow-hidden parent
 *      data-drift="0.2"               drifts down as you scroll away from the top (hero content)
 *      data-scroll-fade="0.8"         fades out over 0.8 viewport-heights of scrolling
 *    Don't put data-reveal and data-parallax/data-drift on the same element (they share `translate`).
 * 4. A thin scroll-progress bar at the top of the page.
 *
 * Respects prefers-reduced-motion: no smooth scroll, no hidden/animated elements, no parallax.
 */

const STAGGER_MS = 90;
const MAX_STAGGER_STEPS = 6;
const MIN_RATIO = 0.12; // how much of an element must be visible before it reveals
const THRESHOLDS = Array.from({ length: 21 }, (_, i) => i / 20);
const SELECTOR = "[data-reveal],[data-parallax],[data-drift],[data-scroll-fade]";

let activeLenis = null;

/** The running Lenis instance (or null). Use lenis.stop() / lenis.start() when opening/closing modals. */
export const getLenis = () => activeLenis;

/** Smooth-scroll to an element, selector ("#contact") or pixel offset. Falls back to native smooth scroll. */
export function scrollToTarget(target, options = {}) {
  if (activeLenis) {
    activeLenis.scrollTo(target, options);
    return;
  }
  let top;
  if (typeof target === "number") top = target;
  else {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (el) top = el.getBoundingClientRect().top + window.scrollY + (options.offset || 0);
  }
  if (typeof top === "number") window.scrollTo({ top, behavior: "smooth" });
}

export default function ScrollFX({ offset = 80, smooth = true, progress = true, replay = true, animateOnScrollUp = false }) {
  const barRef = useRef(null);

  // Layout effect: the "fx-on" class (which hides not-yet-revealed elements) is applied before first paint, so nothing flashes.
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const root = document.documentElement;
    root.classList.add("fx-on");

    /* ---------- smooth scroll ---------- */
    let lenis = null;
    let raf = 0;
    if (smooth) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
        smoothWheel: true,
      });
      activeLenis = lenis;
      const loop = (time) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    /* ---------- parallax + progress (runs in the frame after a scroll) ---------- */
    const moving = new Set();
    let queued = false;

    const update = () => {
      const sy = window.scrollY;
      const vh = window.innerHeight;

      if (barRef.current) {
        const max = root.scrollHeight - vh;
        barRef.current.style.transform = `scaleX(${max > 0 ? Math.min(sy / max, 1) : 0})`;
      }

      moving.forEach((el) => {
        const d = el.dataset;
        let y = null;
        if (d.parallax !== undefined) {
          const r = (el.parentElement || el).getBoundingClientRect(); // parent is not transformed, so no feedback loop
          y = (vh / 2 - (r.top + r.height / 2)) * (parseFloat(d.parallax) || 0);
          if (d.parallaxZoom !== undefined) {
            const limit = el.offsetHeight * 0.075; // stay inside the 1.16x zoom margin
            y = Math.max(-limit, Math.min(limit, y));
          }
        } else if (d.drift !== undefined) {
          y = sy * (parseFloat(d.drift) || 0);
        }
        if (y !== null) el.style.setProperty("--py", `${y.toFixed(1)}px`);
        if (d.scrollFade !== undefined) {
          const dist = vh * (parseFloat(d.scrollFade) || 0.7);
          el.style.opacity = String(Math.min(1, Math.max(0, 1 - sy / dist)));
        }
      });
    };

    const schedule = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        update();
      });
    };

    // scroll direction: +1 down, -1 up (used so reveals travel the right way)
    let dir = 1;
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) > 1) {
        dir = y > lastY ? 1 : -1;
        lastY = y;
      }
      schedule();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);

    const movingIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? moving.add(e.target) : moving.delete(e.target)));
        schedule();
      },
      { rootMargin: "20% 0px 20% 0px" }
    );

    /* ---------- reveal ---------- */
    const isOnce = (el) => !replay || el.hasAttribute("data-reveal-once");

    const reveal = (el, index = 0) => {
      if (dir < 0 && !animateOnScrollUp) {
        // scrolling up: no animation, the element is just there (any value other than "1" skips the animation CSS)
        el.removeAttribute("data-rv-up");
        el.setAttribute("data-revealed", "instant");
        if (isOnce(el)) revealIO.unobserve(el);
        return;
      }
      const d = el.dataset;
      const base = parseFloat(d.revealDelay) || 0;
      el.style.setProperty("--rv-delay", `${base + Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
      el.style.setProperty("--rv-dir", String(dir)); // scrolling up => vertical reveals come from above
      if (dir < 0) el.setAttribute("data-rv-up", "");
      else el.removeAttribute("data-rv-up");
      if (d.revealDuration) el.style.setProperty("--rv-dur", d.revealDuration);
      if (d.revealDistance) el.style.setProperty("--fx-dist", d.revealDistance);
      el.setAttribute("data-revealed", "1");
      if (isOnce(el)) revealIO.unobserve(el);
    };

    // fully off-screen again: go back to the hidden state so the next entry plays the animation again
    const hide = (el) => {
      el.removeAttribute("data-revealed");
      el.style.removeProperty("--rv-delay");
    };

    const revealIO = new IntersectionObserver(
      (entries) => {
        const vh = window.innerHeight;
        const ready = [];
        entries.forEach((e) => {
          const shown = e.target.hasAttribute("data-revealed");
          if (e.isIntersecting && !shown && (e.intersectionRatio >= MIN_RATIO || e.intersectionRect.height >= vh * 0.4)) {
            ready.push(e);
          }
        });
        // stagger order follows the scroll: top-to-bottom going down, bottom-to-top going up; left to right within a row
        ready.sort(
          (a, b) =>
            (Math.round(a.boundingClientRect.top / 24) - Math.round(b.boundingClientRect.top / 24)) * dir ||
            a.boundingClientRect.left - b.boundingClientRect.left
        );
        ready.forEach((e, i) => reveal(e.target, i));
      },
      { threshold: THRESHOLDS, rootMargin: "0px 0px -6% 0px" }
    );

    // Resets only when the element is completely outside the real viewport (never while partly visible),
    // and only when it left through the BOTTOM: that is the direction it will re-enter from when you scroll down again.
    // Elements that left through the top stay revealed, so scrolling up shows them with no animation.
    const leaveIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting || !e.target.hasAttribute("data-revealed") || isOnce(e.target)) return;
          const viewH = e.rootBounds ? e.rootBounds.height : window.innerHeight;
          const leftThroughBottom = e.boundingClientRect.top >= viewH;
          if (leftThroughBottom || animateOnScrollUp) hide(e.target);
        });
      },
      { threshold: 0 }
    );

    /* ---------- find elements now and as React adds them later ---------- */
    const register = (el) => {
      if (el.hasAttribute("data-reveal")) {
        revealIO.observe(el);
        if (!isOnce(el)) leaveIO.observe(el);
      }
      if (el.hasAttribute("data-parallax") || el.hasAttribute("data-drift") || el.hasAttribute("data-scroll-fade")) {
        movingIO.observe(el);
      }
    };
    const scan = (node) => {
      if (node.nodeType !== 1) return;
      if (node.matches(SELECTOR)) register(node);
      node.querySelectorAll(SELECTOR).forEach(register);
    };
    scan(document.body);
    const mo = new MutationObserver((records) => records.forEach((r) => r.addedNodes.forEach(scan)));
    mo.observe(document.body, { childList: true, subtree: true });

    /* ---------- smooth same-page anchor links (<a href="#x"> and <Link to="/#x">) ---------- */
    const onClick = (e) => {
      if (!lenis || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a || (a.target && a.target !== "_self")) return;
      let url;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (!url.hash || url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      if (!e.defaultPrevented) {
        e.preventDefault();
        window.history.pushState(null, "", url.hash);
      }
      lenis.scrollTo(target, { offset: -offset, duration: 1.4 });
    };
    document.addEventListener("click", onClick);

    schedule();

    return () => {
      cancelAnimationFrame(raf);
      if (lenis) {
        lenis.destroy();
        if (activeLenis === lenis) activeLenis = null;
      }
      revealIO.disconnect();
      leaveIO.disconnect();
      movingIO.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("click", onClick);
      moving.forEach((el) => {
        el.style.removeProperty("--py");
        el.style.removeProperty("opacity");
      });
      root.classList.remove("fx-on");
    };
  }, [offset, smooth, replay, animateOnScrollUp]);

  if (!progress) return null;
  return (
    <div className="fx-progress" aria-hidden="true">
      <span ref={barRef} />
    </div>
  );
}