import { PageTemplate } from "@/components/PageTemplate";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About NetCulture | Indian Digital Technology Company Since 2002",
  description: "Learn how NetCulture combines two decades of digital execution with AI-era engineering, UI/UX, SEO, automation, branding, and marketing systems.",
  path: "/about"
});

export default function AboutPage() {
  return <PageTemplate slug="about" />;
}
