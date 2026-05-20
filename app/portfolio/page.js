import { PageTemplate } from "@/components/PageTemplate";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "NetCulture Portfolio | Premium Digital Platforms and Growth Systems",
  description: "Explore representative NetCulture work across luxury websites, SaaS portals, AI lead systems, brand launches, and performance-focused digital products.",
  path: "/portfolio"
});

export default function PortfolioPage() {
  return <PageTemplate slug="portfolio" />;
}
