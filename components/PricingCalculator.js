"use client";

import { useMemo, useState } from "react";
import { Calculator, Zap } from "lucide-react";

const multipliers = {
  Website: 1,
  "Web App": 2.2,
  "Mobile App": 2.7,
  "AI Automation": 2.4,
  "Growth System": 1.65
};

export function PricingCalculator() {
  const [type, setType] = useState("Website");
  const [screens, setScreens] = useState(8);
  const [complexity, setComplexity] = useState(2);
  const [automation, setAutomation] = useState(true);

  const estimate = useMemo(() => {
    const base = 85000;
    const value = base * multipliers[type] + screens * 9500 + complexity * 52000 + (automation ? 70000 : 0);
    const low = Math.round(value / 10000) * 10000;
    const high = Math.round((value * 1.38) / 10000) * 10000;
    return { low, high };
  }, [automation, complexity, screens, type]);

  return (
    <div className="edge-card p-5 md:p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase text-brand-sky">Pricing Intelligence</p>
          <h3 className="mt-2 font-display text-2xl font-black">Project range estimator</h3>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-sky/15 text-brand-sky">
          <Calculator size={20} />
        </span>
      </div>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-bold text-white/70">
          Project type
          <select className="form-field" value={type} onChange={(event) => setType(event.target.value)}>
            {Object.keys(multipliers).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-bold text-white/70">
          Screens or core pages: {screens}
          <input
            type="range"
            min="3"
            max="32"
            value={screens}
            onChange={(event) => setScreens(Number(event.target.value))}
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-white/70">
          Complexity level: {complexity}
          <input
            type="range"
            min="1"
            max="5"
            value={complexity}
            onChange={(event) => setComplexity(Number(event.target.value))}
          />
        </label>

        <label className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white/78">
          Automation and analytics layer
          <input
            type="checkbox"
            checked={automation}
            onChange={(event) => setAutomation(event.target.checked)}
          />
        </label>
      </div>

      <div className="mt-6 rounded-lg border border-brand-sky/20 bg-brand-sky/10 p-4">
        <p className="text-xs font-black uppercase text-white/55">Indicative investment</p>
        <p className="mt-2 font-display text-3xl font-black">
          ₹{estimate.low.toLocaleString("en-IN")} - ₹{estimate.high.toLocaleString("en-IN")}
        </p>
        <p className="muted mt-2 text-sm">Final scope is calibrated after discovery, integrations, and content depth.</p>
      </div>

      <a className="premium-button crimson mt-5 w-full" href="/contact">
        Convert estimate into a proposal <Zap size={17} />
      </a>
    </div>
  );
}
