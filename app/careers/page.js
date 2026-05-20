import { PageTemplate } from "@/components/PageTemplate";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Careers at NetCulture | Build Premium Digital Technology Systems",
  description: "Join NetCulture to build high-performance websites, AI automation, UI/UX systems, SEO platforms, and premium digital products.",
  path: "/careers"
});

export default function CareersPage() {
  return <PageTemplate slug="careers" />;
}
