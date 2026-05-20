"use client";

import { useRef } from "react";

export function TiltCard({ children, className = "" }) {
  const ref = useRef(null);

  const onPointerMove = (event) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 8;
    const rotateY = (x - 0.5) * 8;
    element.style.setProperty("--card-x", `${x * 100}%`);
    element.style.setProperty("--card-y", `${y * 100}%`);
    element.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const onPointerLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    }
  };

  return (
    <div
      ref={ref}
      className={`edge-card ${className}`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </div>
  );
}
