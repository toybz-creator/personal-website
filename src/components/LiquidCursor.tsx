import { useEffect, useRef, useState, useCallback } from "react";

interface Metaball {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  speed: number;
}

const LiquidCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(true);
  const mouseRef = useRef({ x: -100, y: -100 });
  const metaballsRef = useRef<Metaball[]>([]);
  const rafRef = useRef<number>(0);

  const initMetaballs = useCallback(() => {
    const balls: Metaball[] = [];
    for (let i = 0; i < 8; i++) {
      balls.push({
        x: -100,
        y: -100,
        targetX: -100,
        targetY: -100,
        radius: 15 + Math.random() * 20,
        speed: 0.05 + Math.random() * 0.08,
      });
    }
    metaballsRef.current = balls;
  }, []);

  useEffect(() => {
    initMetaballs();
  }, [initMetaballs]);

  useEffect(() => {
    if (!enabled) {
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const balls = metaballsRef.current;
      const mouse = mouseRef.current;

      // Update positions with staggered following
      balls.forEach((ball, i) => {
        const leader = i === 0 ? { targetX: mouse.x, targetY: mouse.y } : balls[i - 1];
        ball.targetX = leader.targetX;
        ball.targetY = leader.targetY;
        ball.x += (ball.targetX - ball.x) * ball.speed;
        ball.y += (ball.targetY - ball.y) * ball.speed;
      });

      // Draw transparent gelly blobs — content shows underneath
      ctx.globalCompositeOperation = "source-over";
      balls.forEach((ball) => {
        const gradient = ctx.createRadialGradient(
          ball.x, ball.y, 0,
          ball.x, ball.y, ball.radius * 1.8
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.12)");
        gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.06)");
        gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.02)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius * 1.8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add subtle edge highlight for gelly look
      balls.forEach((ball) => {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius * 0.8, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [enabled]);

  return (
    <>
      {enabled && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-50"
          aria-hidden="true"
        />
      )}
      <button
        onClick={() => setEnabled(!enabled)}
        className="fixed bottom-6 right-6 z-50 border border-border bg-background/80 backdrop-blur-sm px-4 py-2 text-xs font-heading uppercase tracking-widest text-foreground hover:bg-secondary transition-colors"
        aria-label={enabled ? "Disable cursor effect" : "Enable cursor effect"}
      >
        {enabled ? "FX: ON" : "FX: OFF"}
      </button>
    </>
  );
};

export default LiquidCursor;
