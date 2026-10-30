
import React, { useEffect, useRef } from "react";
import "./AnimatedHeroBackground.css";
import logoIcon from '../../../assets/images/ct_icon.svg';
const PARTICLE_COUNT = 48;
const FRAME_INTERVAL = 33;

export default function AnimatedHeroBackground({
  children,
  className = "",
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = false;
    let destroyed = false;
    let time = 0;
    let lastFrame = 0;
    let particles = [];

    const random = (min, max) =>
      Math.random() * (max - min) + min;

    const createParticles = () => {
      const count = width < 767 ? null : PARTICLE_COUNT;

      particles = Array.from({ length: count }, () => ({
        x: random(0, width),
        y: random(0, height),
        vx: random(-0.12, 0.12),
        vy: random(-0.10, 0.10),
        radius: random(0.8, 1.7),
        phase: random(0, Math.PI * 2),
        cyan: Math.random() > 0.55,
      }));
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const isMobile = width < 600;
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(
        window.devicePixelRatio || 1,
        isMobile ? 1 : 1.25
      );

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();

      if (!running) draw(0, true);
    };

    const drawRibbon = (
      baseY,
      amplitude,
      frequency,
      phase,
      color,
      lineWidth
    ) => {
      ctx.beginPath();

      for (let x = 0; x <= width + 8; x += 8) {
        const wave =
          Math.sin(x * frequency + time * 0.00065 + phase) *
            amplitude +
          Math.sin(x * frequency * 0.48 - time * 0.0004 + phase) *
            amplitude *
            0.55;

        const y =
          baseY +
          wave +
          Math.sin(time * 0.0003 + phase) * amplitude * 0.25;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    };

    const draw = (timestamp = 0, staticFrame = false) => {
      if (destroyed) return;

      if (!staticFrame && lastFrame && timestamp - lastFrame < FRAME_INTERVAL) {
        raf = requestAnimationFrame(draw);
        return;
      }

      const delta = lastFrame
        ? Math.min(timestamp - lastFrame, 32)
        : 16;

      lastFrame = timestamp;

      if (!staticFrame) {
        time += delta;
      }

      // Deep navy foundation.
      ctx.fillStyle = "#071426";
      ctx.fillRect(0, 0, width, height);

      // Large blue and cyan energy fields.
      const glow = ctx.createRadialGradient(
        width * 0.76,
        height * 0.44,
        0,
        width * 0.76,
        height * 0.44,
        Math.max(width, height) * 0.72
      );

      glow.addColorStop(0, "rgba(16, 77, 180, 0.30)");
      glow.addColorStop(0.42, "rgba(10, 48, 105, 0.17)");
      glow.addColorStop(1, "rgba(7, 20, 38, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Atmospheric flowing energy ribbons.
      ctx.save();
      ctx.globalCompositeOperation = "screen";

      drawRibbon(
        height * 0.35, height * 0.13,
        0.0042, 0.5,
        "rgba(37, 99, 235, 0.22)", 2
      );

      drawRibbon(
        height * 0.49, height * 0.16,
        0.0032, 2.2,
        "rgba(34, 211, 238, 0.19)", 1.8
      );

      drawRibbon(
        height * 0.65, height * 0.10,
        0.0052, 4.0,
        "rgba(59, 130, 246, 0.20)", 1.5
      );

      // Bright moving energy stream.
      ctx.beginPath();

      for (let x = 0; x <= width + 8; x += 6) {
        const y =
          height * 0.52 +
          Math.sin(x * 0.004 + time * 0.0009) *
            height * 0.10 +
          Math.sin(x * 0.009 - time * 0.00055) *
            height * 0.045;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.shadowBlur = 18;
      ctx.shadowColor = "#22d3ee";
      ctx.strokeStyle = "rgba(34, 211, 238, 0.20)";
      ctx.lineWidth = 2.4;
      ctx.stroke();

      ctx.restore();

      // Subtle digital grid, strongest on the right.
      const gridSize = width < 600 ? 44 : 54;

      ctx.save();
      ctx.lineWidth = 0.5;

      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          const fade = Math.max(0, (x / width - 0.18) / 0.82);
          const pulse =
            0.5 +
            0.5 *
              Math.sin(x * 0.015 + y * 0.012 - time * 0.001);

          ctx.fillStyle = `rgba(56, 189, 248, ${
            fade * pulse * 0.12
          })`;

          ctx.fillRect(x, y, 1.5, 1.5);
        }
      }

      ctx.restore();

      // Move the neural particles.
      if (!staticFrame) {
        particles.forEach((p) => {
          p.x += p.vx * (delta / 16);
          p.y += p.vy * (delta / 16);

          if (p.x < -5) p.x = width + 5;
          if (p.x > width + 5) p.x = -5;
          if (p.y < -5) p.y = height + 5;
          if (p.y > height + 5) p.y = -5;
        });
      }

      // Connect nearby nodes into a neural network.
      ctx.save();
      ctx.lineWidth = 0.7;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = width < 600 ? 85 : 125;

          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.23;

            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Glowing nodes and their gentle pulse.
      particles.forEach((p) => {
        const pulse = 0.7 + 0.3 * Math.sin(
          time * 0.0015 + p.phase
        );

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = p.cyan
          ? "rgba(34, 211, 238, 0.85)"
          : "rgba(96, 165, 250, 0.85)";
        ctx.shadowBlur = 9;
        ctx.shadowColor = p.cyan ? "#22d3ee" : "#3b82f6";
        ctx.fill();
      });

      ctx.restore();

      if (!staticFrame && running && !destroyed) {
        raf = requestAnimationFrame(draw);
      }
    };

    const start = () => {
      if (running || destroyed || reducedMotion.matches) return;

      running = true;
      lastFrame = 0;
      raf = requestAnimationFrame(draw);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
      raf = 0;
      lastFrame = 0;
    };

    const update = () => {
      stop();

      if (reducedMotion.matches) {
        draw(0, true);
      } else {
        start();
      }
    };

    resize();

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) start();
            else stop();
          }, { rootMargin: "100px" })
        : null;

    observer?.observe(container);

    if (!observer) start();

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else if (!reducedMotion.matches) start();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    const resizeObserver =
      "ResizeObserver" in window
        ? new ResizeObserver(resize)
        : null;

    resizeObserver?.observe(container);

    reducedMotion.addEventListener?.("change", update);

    return () => {
      destroyed = true;
      stop();
      observer?.disconnect();
      resizeObserver?.disconnect();

      document.removeEventListener(
        "visibilitychange",
        onVisibilityChange
      );

      reducedMotion.removeEventListener?.("change", update);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={`ct-ai-hero ${className}`.trim()}
    >
      <canvas
        ref={canvasRef}
        className="ct-ai-hero__canvas"
        aria-hidden="true"
      />
      <div className="ct-ai-hero__shade" aria-hidden="true" />
    

<div className="ct-digital-visual ct-digital-visual--compact" aria-hidden="true">
  <div className="ct-hub-glow" />
  <div className="ct-hub-ring ct-hub-ring--outer" />
  <div className="ct-hub-ring ct-hub-ring--inner" />

  <svg className="ct-hub-connections" viewBox="0 0 440 400" fill="none">
    <path d="M220 200 L112 105" />
    <path d="M220 200 L328 105" />
    <path d="M220 200 L80 200" />
    <path d="M220 200 L360 200" />
    <path d="M220 200 L125 300" />
    <path d="M220 200 L315 300" />
  </svg>

  <div className="ct-hub-center">
    {/* <span className="ct-hub-logo">CT</span> 
    <strong>CodeTrios</strong>*/}
    <img src={logoIcon} />
    <small>Digital Solutions</small>
    <span className="ct-hub-status">
      <i /> Connected
    </span>
  </div>

  <div className="ct-hub-service ct-hub-service--web">
    <span>&lt;/&gt;</span>
    <small>Web Dev</small>
  </div>

  <div className="ct-hub-service ct-hub-service--design">
    <span>✳</span>
    <small>UI / UX</small>
  </div>

  <div className="ct-hub-service ct-hub-service--apps">
    <span>▧</span>
    <small>Web Apps</small>
  </div>

  <div className="ct-hub-service ct-hub-service--shop">
    <span>◇</span>
    <small>Ecommerce</small>
  </div>

  <div className="ct-hub-service ct-hub-service--software">
    <span>⌘</span>
    <small>Software</small>
  </div>

  <div className="ct-hub-service ct-hub-service--growth">
    <span>↗</span>
    <small>SEO + GEO</small>
  </div>

  <div className="ct-hub-pill ct-hub-pill--top">
    <i /> Smart digital experiences
  </div>

  <div className="ct-hub-pill ct-hub-pill--bottom">
    Strategy <b>·</b> Hosting <b>·</b> Growth
  </div>
</div>


      <div className="ct-ai-hero__content">
        {children}
      </div>
    </section>
  );
}
