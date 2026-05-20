import { ArrowRight, BarChart3, Bot, CheckCircle2, Cpu, DatabaseZap, Gauge, Layers3, Search, ShieldCheck } from "lucide-react";
import { caseStudies, industries, processSteps, services, stats } from "@/data/site";
import { LeadForm } from "@/components/LeadForm";
import { Marquee } from "@/components/Marquee";
import { MagneticButton } from "@/components/MagneticButton";
import { PricingCalculator } from "@/components/PricingCalculator";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";

const icons = [Cpu, Bot, Layers3, Search, Gauge, DatabaseZap, BarChart3, ShieldCheck];

export function HomeSections() {
  return (
    <>
      <section className="section-band pt-14 lg:pt-20">
        <div className="site-container grid gap-5 md:grid-cols-4">
          {stats.map((stat, index) => (
            <ScrollReveal delay={index * 0.05} key={stat.label}>
              <div className="edge-card p-5">
                <strong className="block font-display text-4xl text-white">{stat.value}</strong>
                <span className="muted mt-2 block text-sm font-semibold">{stat.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Marquee items={services.map((service) => service.title)} />

      <section className="section-band">
        <div className="site-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What NetCulture Builds"
              title="Technology, AI, brand, and growth systems engineered as one."
              copy="The work is designed to move fast, look premium, rank cleanly, track precisely, and convert with less friction."
            />
            <MagneticButton href="/services" variant="secondary" icon={<ArrowRight size={17} />}>
              All Services
            </MagneticButton>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service, index) => {
              const Icon = icons[index % icons.length];
              return (
                <ScrollReveal delay={index * 0.035} key={service.title}>
                  <TiltCard className="h-full min-h-72 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-sky/15 text-brand-sky">
                        <Icon size={22} />
                      </span>
                      <span className="text-xs font-black uppercase text-brand-crimson">{service.signal}</span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-black">{service.title}</h3>
                    <p className="muted mt-4 text-sm leading-7">{service.copy}</p>
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-band premium-ribbon">
        <div className="site-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Why Different"
              title="A next-generation agency model with product-grade engineering discipline."
              copy="NetCulture connects customer psychology, technical performance, search strategy, analytics, AI automation, and conversion architecture."
            />
          </div>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <ScrollReveal delay={index * 0.06} key={step.title}>
                <div className="edge-card process-row p-5">
                  <span className="font-display text-5xl font-black text-white/10">0{index + 1}</span>
                  <div>
                    <h3 className="text-2xl font-black">{step.title}</h3>
                    <p className="muted mt-2 leading-7">{step.copy}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="site-container">
          <SectionHeading
            eyebrow="Case Signals"
            title="Digital systems that turn trust into measurable momentum."
            copy="Representative work directions across AI commerce, enterprise portals, and premium brand launches."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <ScrollReveal delay={index * 0.08} key={study.title}>
                <TiltCard className="h-full p-6">
                  <p className="text-xs font-black uppercase text-brand-sky">{study.sector}</p>
                  <h3 className="mt-4 font-display text-3xl font-black">{study.title}</h3>
                  <p className="muted mt-4 leading-7">{study.copy}</p>
                  <strong className="mt-7 block font-display text-4xl text-brand-sky">{study.result}</strong>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="site-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Industry Coverage"
              title="Built for companies that need digital trust at scale."
              copy="From B2B SaaS to healthcare, real estate, D2C, and manufacturing, the system adapts to each buyer journey."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {industries.map((industry) => (
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-bold text-white/72" key={industry}>
                  {industry}
                </span>
              ))}
            </div>
          </div>
          <div className="edge-card p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Instant consultation booking",
                "WhatsApp integration",
                "Calendly integration",
                "Lead tracking system",
                "Meta Pixel and GTM-ready",
                "SEO and schema architecture"
              ].map((item) => (
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-bold text-white/78" key={item}>
                  <CheckCircle2 className="text-brand-sky" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="site-container">
          <SectionHeading
            eyebrow="Conversion Platform"
            title="Lead generation that feels consultative, fast, and intelligent."
            copy="The website includes smart forms, pricing intelligence, WhatsApp, Calendly, tracking hooks, and CRM-ready API pathways."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
            <LeadForm />
            <PricingCalculator />
          </div>
        </div>
      </section>
    </>
  );
}
