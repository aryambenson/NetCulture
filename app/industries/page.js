import { PageTemplate } from "@/components/PageTemplate";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "NetCulture Industries | SaaS, Healthcare, Manufacturing, Retail and More",
  description: "NetCulture builds future-ready digital systems for B2B SaaS, healthcare, manufacturing, fintech, real estate, retail, education, and professional services.",
  path: "/industries"
});

export default function IndustriesPage() {
  return <PageTemplate slug="industries" />;
}
