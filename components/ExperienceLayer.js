"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { CalendarDays, MessageCircle, MousePointer2 } from "lucide-react";
import { brand } from "@/data/site";

export function ExperienceLayer() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9
    });

    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const move = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      document.documentElement.style.setProperty("--pointer-x", `${x}px`);
      document.documentElement.style.setProperty("--pointer-y", `${y}px`);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x - 21}px, ${y - 21}px, 0)`;
      }
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="interactive-cursor" aria-hidden="true" />
      <div className="sticky-cta" aria-label="Quick contact actions">
        <a href={brand.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp NetCulture">
          <MessageCircle size={18} />
        </a>
        <a href={brand.calendly} target="_blank" rel="noreferrer" aria-label="Book consultation">
          <CalendarDays size={18} />
        </a>
        <a href="/contact" aria-label="Open inquiry form">
          <MousePointer2 size={18} />
        </a>
      </div>
    </>
  );
}
