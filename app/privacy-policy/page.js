import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy | NetCulture",
  description:
    "Read the NetCulture privacy policy about data collection, communications, analytics tracking, and user rights.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <section className="page-hero">
      <div className="site-container max-w-4xl">
        <span className="eyebrow">Privacy Policy</span>
        <h1 className="mt-5 font-display text-5xl font-black leading-tight md:text-7xl">
          How NetCulture handles your data.
        </h1>
        <div className="edge-card mt-8 grid gap-5 p-6 text-sm leading-8 text-white/78 md:text-base">
          <p>
            NetCulture may collect basic contact details shared through forms,
            email, WhatsApp, and consultation booking tools to respond to
            inquiries and provide services.
          </p>
          <p>
            We may use analytics and marketing tools to understand website
            performance and improve user experience. We do not sell personal
            information.
          </p>
          <p>
            If you want your submitted data removed or updated, contact us at
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