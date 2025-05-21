import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CANVAS_WIDTH = 180;
const CANVAS_HEIGHT = 180;

export function Loader({ isVisible }: { isVisible: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = CANVAS_WIDTH / 2;
    const centerY = CANVAS_HEIGHT / 2;
    let time = 0;
    let lastTime = 0;

    const gridSize = 9;
    const spacing = 18;
    const dots: { x: number; y: number }[] = [];
    const gridOffsetX = centerX - ((gridSize - 1) * spacing) / 2;
    const gridOffsetY = centerY - ((gridSize - 1) * spacing) / 2;

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        dots.push({
          x: gridOffsetX + c * spacing,
          y: gridOffsetY + r * spacing,
        });
      }
    }

    const waveSpeed = 100;
    const waveThickness = 40;
    const maxDist =
      Math.sqrt(centerX * centerX + centerY * centerY) + waveThickness;

    const fill = (opacity: number) =>
      `rgba(255, 255, 255, ${Math.max(0, Math.min(1, opacity))})`;

    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      time += deltaTime * 0.001;

      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      const currentWaveCenterDist = (time * waveSpeed) % maxDist;

      dots.forEach((dot) => {
        const dist = Math.hypot(dot.x - centerX, dot.y - centerY);
        const distToWave = Math.abs(dist - currentWaveCenterDist);
        let pulseFactor = 0;

        if (distToWave < waveThickness / 2) {
          pulseFactor = 1 - distToWave / (waveThickness / 2);
          pulseFactor = Math.sin((pulseFactor * Math.PI) / 2);
        }

        const dotSize = 1.5 + pulseFactor * 2.5;
        const opacity = 0.2 + pulseFactor * 0.8;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = fill(opacity);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 bg-background flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            className="w-[180px] h-[180px]"
            style={{ filter: "drop-shadow(0 0 8px #FFB703)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
