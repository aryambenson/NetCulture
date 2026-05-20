import { ContactExperience } from "@/components/PageTemplate";
import { brand } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title:
    "Contact NetCulture | Book a Digital Strategy Consultation",

  description:
    "Contact NetCulture for web development, AI solutions, automation, SEO, branding, performance marketing, UI/UX engineering, and enterprise digital systems.",

  path: "/contact"
});

export default function ContactPage() {

  return (

    <>

      <section className="page-hero">

        <div className="site-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">

          <div>

            <span className="eyebrow">
              Contact NetCulture
            </span>

            <h1 className="mt-5 font-display text-5xl font-black leading-tight md:text-7xl">
              Convert an idea into a high-performance digital system.
            </h1>

            <p className="muted mt-5 max-w-2xl text-lg leading-8">
              Use the smart inquiry flow,
              WhatsApp,
              email,
              or Calendly to start a strategy conversation with NetCulture.
            </p>

          </div>

          <div className="edge-card p-6">

            <p className="text-xs font-black uppercase text-brand-sky">
              Direct channels
            </p>

            <div className="mt-5 grid gap-3">

              <a className="premium-button secondary"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${brand.email}`}
              target="_blank"
              rel="noreferrer"
>
  Email NetCulture
</a>

              <a
                className="premium-button"
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Integration
              </a>

              <a
                className="premium-button crimson"
                href={brand.calendly}
                target="_blank"
                rel="noreferrer"
              >
                Calendly Booking
              </a>

            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5">

              <h2 className="font-display text-2xl font-black">
                Contact Information
              </h2>

              <div className="mt-5 grid gap-4 text-sm text-white/70">

                <div>
                  <p className="font-black text-white">
                    Email
                  </p>

                  <p>
                    {brand.email}
                  </p>
                </div>

                <div>
                  <p className="font-black text-white">
                    WhatsApp
                  </p>

                  <p>
                    Strategy consultations and business inquiries.
                  </p>
                </div>

                <div>
                  <p className="font-black text-white">
                    Calendly
                  </p>

                  <p>
                    Schedule premium digital strategy sessions.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <ContactExperience />

    </>

  );
}