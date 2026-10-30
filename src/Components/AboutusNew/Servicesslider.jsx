import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SceneDefs, SCENES } from "./Servicescenes.jsx";
import './Servicesslider.css';
import {
  Smartphone,
  SearchCheck,
  Zap,
  ShieldCheck,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
} from "lucide-react";

const AUTOPLAY_MS = 6500;

const SERVICES = [
  {
    tag: "Design & Experience",
    title: "Website Design",
    short: "Modern, responsive, conversion-focused",
    text: "CodeTrios is a website design company in India helping businesses, startups and growing brands build modern, responsive, high-performing websites. We combine business strategy, UI/UX design, accessibility and SEO-friendly architecture to create websites that support real business goals.",
    chips: ["Responsive", "UI/UX", "SEO-friendly"],
    href: "/",
  },
  {
    tag: "Featured Service",
    title: "Web Development",
    short: "Fast, secure, scalable builds",
    text: "We build fast, secure and scalable websites and web applications using modern frontend and backend technologies, performance optimization and maintainable architecture, designed around your real business requirements.",
    chips: ["React", "APIs", "Performance"],
    href: "/",
  },
  {
    tag: "Commerce & Growth",
    title: "E-Commerce Solutions",
    short: "Stores that turn visitors into buyers",
    text: "Online stores with secure payments, easy product catalogs and checkout flows tuned for conversion, so your shop is simple to manage and a pleasure to buy from on any device.",
    chips: ["Payments", "Catalog", "Checkout"],
    href: "/",
  },
  {
    tag: "Custom Platforms",
    title: "Web Applications",
    short: "Dashboards, portals and custom tools",
    text: "Custom web applications, portals and dashboards that automate workflows and turn your data into something your team can use every day, built to grow with your business.",
    chips: ["Dashboards", "Portals", "Automation"],
    href: "/",
  },
  {
    tag: "UI / UX",
    title: "Design Services",
    short: "From wireframe to polished interface",
    text: "User research, wireframes, prototypes and polished interface design. We shape clear, accessible experiences and a consistent visual system before a single line of code is written.",
    chips: ["Wireframes", "Prototypes", "Design systems"],
    href: "/",
  },
];

const FEATURES = [
  { icon: Smartphone, title: "Mobile-first", text: "Looks right on every screen" },
  { icon: SearchCheck, title: "SEO-ready", text: "Clean, crawlable structure" },
  { icon: Zap, title: "Fast loading", text: "Performance built in" },
  { icon: ShieldCheck, title: "Secure & reliable", text: "Ongoing care after launch" },
];

const pad = (n) => String(n + 1).padStart(2, "0");

export default function ServicesSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false); // user pressed pause
  const [hover, setHover] = useState(false); // pointer / focus inside
  const [auto, setAuto] = useState(true); // false under reduced motion
  const drag = useRef(null);
  const n = SERVICES.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
  }, []);

  const go = useCallback((i) => setActive(((i % n) + n) % n), [n]);
  const next = useCallback(() => go(active + 1), [go, active]);
  const prev = useCallback(() => go(active - 1), [go, active]);

  const running = auto && !paused && !hover;

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };

  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    drag.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e) => {
    const s = drag.current;
    drag.current = null;
    if (!s) return;
    const dx = e.clientX - s.x;
    const dy = e.clientY - s.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) (dx < 0 ? next : prev)();
  };

  return (
    <section className="svSlider" id="our-services" aria-roledescription="carousel" aria-label="Our services">
      <SceneDefs />
      <div className="svSlider__glow" aria-hidden="true" />
      <Container>
        <Row>
          <Col>
            <div
              className="svSlider__frame"
              onKeyDown={onKeyDown}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onFocus={() => setHover(true)}
              onBlur={() => setHover(false)}
            >
              <div className="svSlider__main">
                {/* ---------- copy ---------- */}
                <div className="svSlider__copy">
                  <div className="sectionHead">
                    <div className="tag" data-reveal="up">OUR SERVICES</div>
                    <h2 data-reveal="up">
                      Websites &amp; software that <span>grow your business</span>
                    </h2>
                    <p data-reveal="up">
                      From first idea to launch and beyond, CodeTrios designs, builds and maintains websites, stores and web applications that are fast, secure and made to convert.
                    </p>
                  </div>
                  <div className="svSlider__cta" data-reveal="up">
                    <Link to="/" className="ctBtn ct-primery-btn">
                      Explore Our Work <ArrowUpRight aria-hidden="true" size={19} />
                    </Link>
                  </div>
                </div>

                {/* ---------- artwork + slide text ---------- */}
                <div
                  className="svSlider__stage"
                  data-reveal="zoom"
                  onPointerDown={onPointerDown}
                  onPointerUp={onPointerUp}
                  onPointerCancel={() => (drag.current = null)}
                >
                  <div className="svSlider__slides" aria-live={running ? "off" : "polite"}>
                    {SERVICES.map((s, i) => {
                      const Scene = SCENES[i];
                      const on = i === active;
                      return (
                        <article
                          key={s.title}
                          className={`svSlide${on ? " is-active" : ""}`}
                          role="group"
                          aria-roledescription="slide"
                          aria-label={`${i + 1} of ${n}: ${s.title}`}
                          aria-hidden={on ? undefined : true}
                          inert={on ? undefined : ""}
                        >
                          <Scene />
                          <div className="svSlide__info">
                            <span className="svSlide__tag">{s.tag}</span>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                            <ul className="svSlide__chips">
                              {s.chips.map((c) => (
                                <li key={c}>{c}</li>
                              ))}
                            </ul>
                          </div>
                          <Link to={s.href} className="svSlide__go" tabIndex={on ? 0 : -1} aria-label={`Learn more about ${s.title}`}>
                            <ArrowUpRight aria-hidden="true" />
                          </Link>
                        </article>
                      );
                    })}
                  </div>


                  <div className="svSlider__controls">
                    <button type="button" className="svCtl" onClick={prev} aria-label="Previous service"><ChevronLeft /></button>
                    <button type="button" className="svCtl" onClick={next} aria-label="Next service"><ChevronRight /></button>
                    {auto && (
                      <button
                        type="button"
                        className="svCtl"
                        onClick={() => setPaused((p) => !p)}
                        aria-label={paused ? "Start autoplay" : "Pause autoplay"}
                      >
                        {paused ? <Play /> : <Pause />}
                      </button>
                    )}
                  </div>
                </div>

                {/* ---------- stepper ---------- */}
                <ol className="svSlider__steps" data-reveal="left" aria-label="Choose a service">
                  {SERVICES.map((s, i) => {
                    const on = i === active;
                    return (
                      <li key={s.title} className={on ? "is-active" : ""}>
                        <button type="button" onClick={() => go(i)} aria-current={on ? "true" : undefined}>
                          <span className="svStep__num">{pad(i)}</span>
                          <span className="svStep__txt">
                            <strong>{s.title}</strong>
                            <small>{s.short}</small>
                          </span>
                          <span className="svStep__bar" aria-hidden="true">
                            {on && (
                              <i
                                key={`${active}-${auto}`}
                                className={running ? "run" : "hold"}
                                style={{ animationDuration: `${AUTOPLAY_MS}ms`, animationPlayState: running ? "running" : "paused" }}
                                onAnimationEnd={auto ? next : undefined}
                              />
                            )}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* ---------- feature strip ---------- */}
              <div className="svSlider__features" data-reveal="up">
                {FEATURES.map(({ icon: Icon, title, text }) => (
                  <div className="svFeat" key={title}>
                    <span className="svFeat__icon"><Icon aria-hidden="true" /></span>
                    <div>
                      <strong>{title}</strong>
                      <small>{text}</small>
                    </div>
                  </div>
                ))}
                <div className="svFeat svFeat--stat">
                  <div>
                    <b>98%</b>
                    <small>Client satisfaction</small>
                  </div>
                  <svg viewBox="0 0 90 36" aria-hidden="true">
                    <path d="M2 30C14 28 18 14 30 18S46 30 58 16S76 6 88 4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}