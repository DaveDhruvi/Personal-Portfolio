import React, { useEffect, useRef } from 'react';

export default function GridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Floating data packets along network paths
    const packets = Array.from({ length: 22 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      size: Math.random() * 2.5 + 1.2,
      alpha: Math.random() * 0.25 + 0.1,
      color: Math.random() > 0.4 ? '6, 182, 212' : '59, 130, 246',
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.006;

      // Coordinate grid dots
      const GRID = 56;
      const cols = Math.ceil(canvas.width / GRID);
      const rows = Math.ceil(canvas.height / GRID);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * GRID;
          const y = j * GRID;
          const wave = Math.sin(t + (i + j) * 0.18) * 0.035;
          const alpha = 0.06 + wave;

          if (alpha > 0.02) {
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.fill();
          }
        }
      }

      // Draw floating telemetry packets
      packets.forEach(p => {
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      // Subtle atmospheric cloud glow in top-right and bottom-left
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.85, canvas.height * 0.15, 0,
        canvas.width * 0.85, canvas.height * 0.15, 500
      );
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.045)');
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.025)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
