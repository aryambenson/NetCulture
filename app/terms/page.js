import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms & Conditions | NetCulture",
  description:
    "Read the NetCulture terms and conditions for service scope, project delivery, intellectual property, and usage.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <section className="page-hero">
      <div className="site-container max-w-4xl">
        <span className="eyebrow">Terms & Conditions</span>
        <h1 className="mt-5 font-display text-5xl font-black leading-tight md:text-7xl">
          Terms for using NetCulture services.
        </h1>
        <div className="edge-card mt-8 grid gap-5 p-6 text-sm leading-8 text-white/78 md:text-base">
          <p>
            Project scope, timelines, payment structure, and deliverables are
            defined in project-specific proposals or agreements.
          </p>
          <p>
            All trademarks and third-party assets remain the property of their
            respective owners. Final intellectual property transfer terms are
            governed by the signed agreement.
          </p>
          <p>
            For legal or contractual questions, contact us at
            <a href="mailto:contact@netculture.in"
            className="text-brand-sky"
            >
            contact@netculture.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
