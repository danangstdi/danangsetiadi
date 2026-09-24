"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const labelRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const hideTimer = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Tampilkan cursor
      setVisible(true);

      // Reset timer
      clearTimeout(hideTimer.current);

      hideTimer.current = setTimeout(() => {
        setVisible(false);
      }, 500);

      // Dot mengikuti mouse secara langsung
      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate3d(${e.clientX}px, ${e.clientY}px, 0)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame;

    const animate = () => {
      current.current.x +=
        (mouse.current.x - current.current.x) * 0.15;

      current.current.y +=
        (mouse.current.y - current.current.y) * 0.15;

      const { x, y } = current.current;

      if (circleRef.current) {
        circleRef.current.style.transform = `
          translate3d(${x}px, ${y}px, 0)
        `;
      }

      if (labelRef.current) {
        labelRef.current.style.transform = `
          translate3d(${x + 18}px, ${y + 18}px, 0)
        `;

        labelRef.current.textContent = `
          ${Math.round(mouse.current.x)} × ${Math.round(mouse.current.y)}
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
      clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <>
      {/* Main dot */}
      <div
        ref={dotRef}
        className={`
          pointer-events-none fixed left-0 top-0 z-[9999]
          h-2 w-2 -translate-x-1/2 -translate-y-1/2
          rounded-full bg-black dark:bg-white
          transition-opacity duration-300
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Smooth circle */}
      <div
        ref={circleRef}
        className={`
          pointer-events-none fixed left-0 top-0 z-[9998]
          h-8 w-8 -translate-x-1/2 -translate-y-1/2
          rounded-full border border-black/40
          dark:border-white/40
          transition-opacity duration-300
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Coordinates */}
      <div
        ref={labelRef}
        className={`
          pointer-events-none fixed left-0 top-0 z-[9999]
          whitespace-nowrap rounded-md
          border border-black/10
          bg-white/80 px-2 py-1
          font-mono text-[10px]
          tracking-wide text-black
          shadow-sm backdrop-blur-md
          dark:border-white/10
          dark:bg-black/70
          dark:text-white
          transition-opacity duration-300
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      >
        0 × 0
      </div>
    </>
  );
}
