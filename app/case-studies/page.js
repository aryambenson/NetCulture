import { PageTemplate } from "@/components/PageTemplate";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "NetCulture Case Studies | Digital Transformation and Conversion Results",
  description: "Selected NetCulture transformation stories showing measurable gains in lead conversion, reporting speed, AI commerce, and enterprise digital operations.",
  path: "/case-studies"
});

export default function CaseStudiesPage() {
  return <PageTemplate slug="case-studies" />;
}
