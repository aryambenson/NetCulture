"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Bot, CheckCircle2 } from "lucide-react";
import { brand, services } from "@/data/site";

const initial = {
  name: "",
  email: "",
  company: "",
  service: "AI Solutions",
  budget: "₹2L - ₹5L",
  urgency: "This quarter",
  message: ""
};

export function LeadForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");

  const score = useMemo(() => {
    let points = 38;
    if (form.email.includes("@")) points += 12;
    if (form.company.trim()) points += 10;
    if (form.service.includes("AI") || form.service.includes("Automation")) points += 12;
    if (form.budget.includes("10L")) points += 18;
    if (form.urgency.includes("30")) points += 10;
    if (form.message.length > 80) points += 8;
    return Math.min(points, 98);
  }, [form]);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, score })
    });
    setStatus("sent");
  };

  return (
    <div className="edge-card p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase text-brand-sky">AI Lead Qualification</p>
          <h3 className="mt-2 font-display text-2xl font-black">Start a smart inquiry</h3>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-sky/15 text-brand-sky">
          <Bot size={22} />
        </div>
      </div>

      {status === "sent" ? (
        <div className="mt-6 rounded-lg border border-brand-sky/20 bg-brand-sky/10 p-5">
          <CheckCircle2 className="text-brand-sky" size={28} />
          <h4 className="mt-4 text-xl font-black">Inquiry captured</h4>
          <p className="muted mt-2 text-sm leading-7">
            Lead score {score}/100. NetCulture can route this into CRM, WhatsApp, Calendly, email automation, and analytics conversion events.
          </p>
          <div className="button-row">
            <a className="premium-button" href={brand.calendly} target="_blank" rel="noreferrer">
              Book Calendly <ArrowRight size={16} />
            </a>
            <a className="premium-button secondary" href={brand.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp Now
            </a>
          </div>
        </div>
      ) : (
        <form className="mt-6 grid gap-4" onSubmit={submit}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-white/70">
              Name
              <input className="form-field" name="name" value={form.name} onChange={update} required />
            </label>
            <label className="grid gap-2 text-sm font-bold text-white/70">
              Work email
              <input className="form-field" type="email" name="email" value={form.email} onChange={update} required />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-bold text-white/70">
            Company
            <input className="form-field" name="company" value={form.company} onChange={update} />
          </label>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-white/70">
              Primary need
              <select className="form-field" name="service" value={form.service} onChange={update}>
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-white/70">
              Budget
              <select className="form-field" name="budget" value={form.budget} onChange={update}>
                <option>₹1L - ₹2L</option>
                <option>₹2L - ₹5L</option>
                <option>₹5L - ₹10L</option>
                <option>₹10L+</option>
              </select>
            </label>
          </div>
          <label className="grid gap-2 text-sm font-bold text-white/70">
            Timeline
            <select className="form-field" name="urgency" value={form.urgency} onChange={update}>
              <option>Next 30 days</option>
              <option>This quarter</option>
              <option>Exploring options</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-white/70">
            Project context
            <textarea className="form-field min-h-32 resize-y" name="message" value={form.message} onChange={update} />
          </label>
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <div>
              <p className="text-xs font-black uppercase text-white/45">Qualification signal</p>
              <p className="font-display text-2xl font-black text-brand-sky">{score}/100</p>
            </div>
            <button className="premium-button crimson" type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Inquiry"} <ArrowRight size={16} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
