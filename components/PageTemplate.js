import { ArrowRight, CheckCircle2, Cpu, Layers3, Rocket, Sparkles } from "lucide-react";
import { blogPosts, caseStudies, industries, pageData, processSteps, services } from "@/data/site";
import { LeadForm } from "@/components/LeadForm";
import { MagneticButton } from "@/components/MagneticButton";
import { PricingCalculator } from "@/components/PricingCalculator";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";

const iconMap = [Cpu, Layers3, Sparkles, Rocket];

export function PageTemplate({ slug }) {
  const data = pageData[slug];

  return (
    <>
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <span className="eyebrow">{data.eyebrow}</span>
            <h1 className="mt-5 font-display text-5xl font-black leading-tight md:text-7xl">{data.title}</h1>
            <p className="muted mt-5 max-w-2xl text-lg leading-8">{data.intro}</p>
            <div className="button-row">
              <MagneticButton href="/contact" icon={<ArrowRight size={18} />}>
                Start a Conversation
              </MagneticButton>
              <MagneticButton href="/case-studies" variant="secondary">
                View Results
              </MagneticButton>
            </div>
          </div>
          <div className="edge-card page-orb p-6">
            <div className="orb-core" />
            <div className="relative z-10 grid gap-3">
              {data.bullets.slice(0, 5).map((item) => (
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-white/78" key={item}>
                  <CheckCircle2 className="text-brand-sky" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {slug === "services" ? <ServicesDeepDive /> : null}
      {slug === "portfolio" ? <PortfolioShowcase /> : null}
      {slug === "case-studies" ? <CaseStudyGrid /> : null}
      {slug === "industries" ? <IndustriesGrid /> : null}
      {slug === "ai-solutions" ? <AiSystems /> : null}
      {slug === "blog" ? <BlogGrid /> : null}
      {slug === "careers" ? <CareersPanel /> : null}
      {slug === "future-lab" ? <FutureLab /> : null}
      {slug === "about" ? <AboutSystem /> : null}
    </>
  );
}

function ServicesDeepDive() {
  return (
    <section className="section-band">
      <div className="site-container">
        <SectionHeading
          eyebrow="Full-stack Execution"
          title="A connected service matrix, not isolated deliverables."
          copy="Every NetCulture build connects interface quality, technical architecture, search visibility, analytics, and lead generation."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <ScrollReveal delay={index * 0.03} key={service.title}>
                <TiltCard className="h-full p-5">
                  <Icon className="text-brand-sky" size={24} />
                  <h3 className="mt-5 text-2xl font-black">{service.title}</h3>
                  <p className="muted mt-3 text-sm leading-7">{service.copy}</p>
                  <p className="mt-5 text-xs font-black uppercase text-brand-crimson">{service.signal}</p>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PortfolioShowcase() {
  return (
    <section className="section-band">
      <div className="site-container">
        <div className="portfolio-grid">
          {caseStudies.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <div className={`portfolio-tile bg-gradient-to-br ${item.gradient}`}>
                <div className="portfolio-browser">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="mt-auto">
                  <p className="text-xs font-black uppercase text-white/62">{item.sector}</p>
                  <h2 className="mt-2 font-display text-4xl font-black">{item.title}</h2>
                  <p className="mt-4 max-w-xl text-white/74">{item.copy}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyGrid() {
  return (
    <section className="section-band">
      <div className="site-container grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <TiltCard className="p-6" key={study.title}>
            <p className="text-xs font-black uppercase text-brand-sky">{study.sector}</p>
            <h2 className="mt-4 font-display text-3xl font-black">{study.title}</h2>
            <p className="muted mt-4 leading-7">{study.copy}</p>
            <strong className="mt-6 block font-display text-4xl text-brand-sky">{study.result}</strong>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-brand-sky to-brand-crimson" style={{ width: `${76 + index * 7}%` }} />
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

function IndustriesGrid() {
  return (
    <section className="section-band">
      <div className="site-container grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {industries.map((industry) => (
          <div className="edge-card min-h-36 p-5" key={industry}>
            <p className="text-xs font-black uppercase text-brand-crimson">Industry</p>
            <h2 className="mt-4 text-xl font-black">{industry}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

function AiSystems() {
  return (
    <section className="section-band">
      <div className="site-container grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="AI Capability Layer"
            title="Intelligence that plugs into marketing, sales, support, and operations."
            copy="NetCulture AI systems prioritize real workflow value: lead scoring, content intelligence, knowledge retrieval, reporting, support, and automation."
          />
        </div>
        <div className="grid gap-4">
          {["RAG knowledge assistants", "AI lead scoring", "Sales and support copilots", "Workflow agents", "Analytics summarization"].map((item) => (
            <div className="edge-card flex items-center justify-between gap-4 p-5" key={item}>
              <span className="font-black">{item}</span>
              <Sparkles className="text-brand-sky" size={20} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogGrid() {
  return (
    <section className="section-band">
      <div className="site-container grid gap-5 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article className="edge-card p-6" key={post.title}>
            <p className="text-xs font-black uppercase text-brand-sky">{post.tag} | {post.read}</p>
            <h2 className="mt-4 font-display text-3xl font-black">{post.title}</h2>
            <p className="muted mt-4 leading-7">{post.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CareersPanel() {
  return (
    <section className="section-band">
      <div className="site-container grid gap-5 lg:grid-cols-2">
        {["Frontend Motion Engineer", "AI Automation Strategist", "SEO Systems Lead", "Performance Creative Designer"].map((role) => (
          <div className="edge-card p-6" key={role}>
            <p className="text-xs font-black uppercase text-brand-crimson">Open Track</p>
            <h2 className="mt-4 font-display text-3xl font-black">{role}</h2>
            <p className="muted mt-4 leading-7">For people who like fast systems, clean communication, measured outcomes, and premium digital craft.</p>
            <a className="premium-button secondary mt-6" href="mailto:careers@netculture.in">
              Apply by Email
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function FutureLab() {
  return (
    <section className="section-band">
      <div className="site-container">
        <SectionHeading
          eyebrow="Experimental Programs"
          title="Future Lab turns emerging technology into useful pilots."
          copy="A space for AI agents, 3D commerce, automation, analytics intelligence, spatial UI, and pragmatic Web3 utilities."
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {processSteps.slice(0, 3).map((step, index) => (
            <div className="edge-card min-h-72 p-6" key={step.title}>
              <p className="font-display text-6xl font-black text-white/10">0{index + 1}</p>
              <h2 className="mt-8 font-display text-3xl font-black">{step.title}</h2>
              <p className="muted mt-4 leading-7">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSystem() {
  return (
    <section className="section-band">
      <div className="site-container grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Why NetCulture"
          title="Two decades of execution, rebuilt around AI-era experience design."
          copy="The company is positioned for brands that need a partner across technology, UX, search, content, media, and business automation."
        />
        <div className="grid gap-4">
          {processSteps.map((step, index) => (
            <div className="edge-card p-5" key={step.title}>
              <p className="text-xs font-black uppercase text-brand-sky">Stage 0{index + 1}</p>
              <h3 className="mt-3 text-2xl font-black">{step.title}</h3>
              <p className="muted mt-2 text-sm leading-7">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactExperience() {
  return (
    <section className="section-band">
      <div className="site-container grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <LeadForm />
        <PricingCalculator />
      </div>
    </section>
  );
}
