import { useEffect, useRef } from "react";

export function WarpingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to window size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Get the dot size and spacing from CSS
    const dotSize = 1;
    const dotSpacing = 20;
    const warpRadius = 300;
    const maxWarp = 30;

    // Draw function with warp effect
    const draw = () => {
      const { x: mouseX, y: mouseY } = mousePos.current;

      // Determine background color (light or dark mode)
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const bgColor = isDark ? "#2a2a2a" : "#faf9f7";
      const dotColor = isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.15)";

      // Clear canvas with background color
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw warped dots
      ctx.fillStyle = dotColor;

      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          // Calculate distance from cursor
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < warpRadius) {
            // Calculate warp effect - dots pushed away from cursor with smoother easing
            const ratio = distance / warpRadius;
            const easing = Math.pow(1 - ratio, 2.5);
            const warpAmount = maxWarp * easing;
            const angle = Math.atan2(dy, dx);

            const warpedX = x + Math.cos(angle) * warpAmount;
            const warpedY = y + Math.sin(angle) * warpAmount;

            ctx.beginPath();
            ctx.arc(warpedX, warpedY, dotSize, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Draw dots normally outside warp radius
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(draw);
    };

    // Handle dark mode changes
    const darkModeWatcher = window.matchMedia("(prefers-color-scheme: dark)");
    darkModeWatcher.addEventListener("change", () => {
      // Redraw on theme change
      draw();
    });

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      darkModeWatcher.removeEventListener("change", () => {});
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
