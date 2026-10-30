import { useEffect, useRef } from "react";
import "./NetworkBackground.css";

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!context) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let width = 0;
    let height = 0;
    let frameId = 0;
    let elapsed = 0;
    let previousTime = null;
    let points = [];
    let visible = true;

    const rows = 13;
    let columns = 38;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();

      width = bounds.width;
      height = bounds.height;

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      columns = width < 768 ? 24 : 38;

      points = Array.from({ length: rows }, (_, row) =>
        Array.from({ length: columns }, (_, column) => ({
          row,
          column,
          x: 0,
          y: 0,
          depth: 0,
          // Stable variation keeps the network organic.
          seed: Math.sin(row * 127.1 + column * 311.7) * 0.5 + 0.5,
        }))
      );

      draw();
    };

    function updatePoints() {
      const time = elapsed;
      const mobile = width < 768;

      for (const row of points) {
        for (const point of row) {
          const u = point.column / (columns - 1);
          const v = point.row / (rows - 1);

          const spread = (v - 0.5) * height * 0.28;

          const wave =
            Math.sin(u * 7.2 - time * 0.38 + v * 1.8) *
            height *
            0.12;

          const ripple =
            Math.cos(u * 12 + v * 4 - time * 0.25) *
            height *
            0.025;

          // Wave rises toward the right side of the banner.
          const center =
            height * (mobile ? 0.82 : 0.91) -
            u * height * (mobile ? 0.34 : 0.57);

          point.x =
            width * (mobile ? 0.02 : 0.30) +
            u * width * (mobile ? 1.12 : 0.79) +
            Math.sin(time * 0.2 + v * 5) * 5;

          point.y = center + spread + wave + ripple;

          point.depth =
            (Math.sin(u * 8 + v * 5 - time * 0.4) + 1) / 2;
        }
      }
    }

    function drawConnection(first, second, diagonal = false) {
      const depth = (first.depth + second.depth) / 2;
      const alpha = (diagonal ? 0.065 : 0.12) + depth * 0.15;

      context.beginPath();
      context.moveTo(first.x, first.y);
      context.lineTo(second.x, second.y);
      context.strokeStyle = `rgba(72, 153, 255, ${alpha})`;
      context.lineWidth = diagonal ? 0.45 : 0.65;
      context.stroke();
    }

    function draw() {
      if (!width || !height) return;

      context.clearRect(0, 0, width, height);
      updatePoints();

      // Broad blue atmosphere behind the wave.
      const glow = context.createRadialGradient(
        width * 0.79,
        height * 0.52,
        0,
        width * 0.79,
        height * 0.52,
        width * 0.5
      );

      glow.addColorStop(0, "rgba(25, 92, 205, 0.14)");
      glow.addColorStop(0.5, "rgba(35, 62, 160, 0.06)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");

      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          const point = points[row][column];

          if (column < columns - 1) {
            drawConnection(point, points[row][column + 1]);
          }

          if (row < rows - 1) {
            drawConnection(point, points[row + 1][column]);
          }

          if (
            row < rows - 1 &&
            column < columns - 1 &&
            (row + column) % 2 === 0
          ) {
            drawConnection(point, points[row + 1][column + 1], true);
          }
        }
      }

      // Draw light nodes over the mesh.
      for (const row of points) {
        for (const point of row) {
          const prominent = point.seed > 0.94;

          const pulse =
            0.65 +
            Math.sin(elapsed * 1.2 + point.column + point.row) * 0.25;

          const radius = prominent
            ? 1.8 + point.depth * 1.1
            : 0.65 + point.depth * 0.65;

          if (prominent) {
            const halo = context.createRadialGradient(
              point.x,
              point.y,
              0,
              point.x,
              point.y,
              17
            );

            halo.addColorStop(
              0,
              `rgba(105, 185, 255, ${pulse * 0.5})`
            );
            halo.addColorStop(1, "rgba(70, 130, 255, 0)");

            context.fillStyle = halo;
            context.beginPath();
            context.arc(point.x, point.y, 17, 0, Math.PI * 2);
            context.fill();
          }

          context.fillStyle = prominent
            ? `rgba(185, 229, 255, ${pulse})`
            : `rgba(85, 163, 255, ${0.3 + point.depth * 0.5})`;

          context.beginPath();
          context.arc(point.x, point.y, radius, 0, Math.PI * 2);
          context.fill();

          // Sparse vertical light stems.
          if (
            prominent &&
            point.row < 4 &&
            point.column % 3 === 0
          ) {
            const stemHeight = 24 + point.seed * 52;

            const stem = context.createLinearGradient(
              point.x,
              point.y,
              point.x,
              point.y - stemHeight
            );

            stem.addColorStop(0, "rgba(85, 156, 255, 0)");
            stem.addColorStop(1, "rgba(113, 191, 255, 0.6)");

            context.strokeStyle = stem;
            context.lineWidth = 0.7;
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(point.x, point.y - stemHeight);
            context.stroke();

            context.fillStyle = "rgba(166, 222, 255, 0.85)";
            context.beginPath();
            context.arc(
              point.x,
              point.y - stemHeight,
              1.7,
              0,
              Math.PI * 2
            );
            context.fill();
          }
        }
      }
    }

    function animate(timestamp) {
      if (previousTime !== null) {
        elapsed += Math.min((timestamp - previousTime) / 1000, 0.05);
      }

      previousTime = timestamp;
      draw();
      frameId = requestAnimationFrame(animate);
    }

    function syncAnimation() {
      cancelAnimationFrame(frameId);
      previousTime = null;

      if (visible && !document.hidden && !motionQuery.matches) {
        frameId = requestAnimationFrame(animate);
      } else {
        draw();
      }
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        syncAnimation();
      },
      { threshold: 0 }
    );

    intersectionObserver.observe(canvas);

    document.addEventListener("visibilitychange", syncAnimation);
    motionQuery.addEventListener("change", syncAnimation);

    resize();
    syncAnimation();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", syncAnimation);
      motionQuery.removeEventListener("change", syncAnimation);
    };
  }, []);

  return (
    <div className="network-background" aria-hidden="true">
      <canvas ref={canvasRef} className="network-background__canvas" />
      <div className="network-background__fade" />
    </div>
  );
}