import { PageTemplate } from "@/components/PageTemplate";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "NetCulture Services | Web, AI, SEO, Apps, Branding, Marketing",
  description: "Explore NetCulture services across web development, web applications, mobile apps, AI solutions, SEO, digital branding, performance marketing, UI/UX, and automation.",
  path: "/services"
});

export default function ServicesPage() {
  return <PageTemplate slug="services" />;
}
