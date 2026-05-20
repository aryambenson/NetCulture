"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, BadgeCheck, Bot, Gauge, ShieldCheck } from "lucide-react";
import { brand, logos } from "@/data/site";
import { MagneticButton } from "@/components/MagneticButton";

const HeroCanvas = dynamic(() => import("@/components/HeroCanvas").then((mod) => mod.HeroCanvas), {
  ssr: false,
  loading: () => <div className="hero-visual" aria-hidden="true" />
});

export function Hero() {
  const scopeRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        ".hero-animate",
        { opacity: 0, y: 34, filter: "blur(12px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.95, stagger: 0.08, ease: "power3.out" }
      );
    }, scopeRef);

    return () => context.revert();
  }, []);

  return (
    <section className="hero-shell" ref={scopeRef}>
      <div className="site-container hero-grid">
        <div>
          <span className="eyebrow hero-animate">Indian digital technology company since {brand.founded}</span>
          <h1 className="hero-title hero-animate">
            <span className="gradient-text">NetCulture</span> engineers digital ecosystems for the future.
          </h1>
          <p className="hero-copy hero-animate">
            Web, applications, AI, branding, SEO, performance marketing, UI/UX, and automation systems unified into one high-performance growth engine.
          </p>
          <div className="hero-actions hero-animate">
            <MagneticButton href="/contact" icon={<ArrowRight size={18} />}>
              Book Instant Consultation
            </MagneticButton>
            <MagneticButton href="/services" variant="secondary" icon={<Bot size={18} />}>
              Explore Capabilities
            </MagneticButton>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3 hero-animate">
            {[
              { icon: <ShieldCheck size={17} />, text: "Enterprise-grade build systems" },
              { icon: <Gauge size={17} />, text: "90+ Lighthouse target" },
              { icon: <BadgeCheck size={17} />, text: "AI-qualified lead funnels" }
            ].map((item) => (
              <div className="glass-panel flex items-center gap-2 px-3 py-3 text-xs font-bold text-white/75" key={item.text}>
                <span className="text-brand-sky">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          <div className="logo-strip hero-animate" aria-label="Representative client logos">
            {logos.map((logo) => (
              <span className="logo-pill" key={logo}>
                {logo}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-animate">
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
}
