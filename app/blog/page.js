import { PageTemplate } from "@/components/PageTemplate";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "NetCulture Blog | AI, UX, Performance, SEO and Digital Growth",
  description: "Field notes from NetCulture on AI adoption, UI/UX engineering, Core Web Vitals, SEO architecture, automation, and performance marketing.",
  path: "/blog"
});

export default function BlogPage() {
  return <PageTemplate slug="blog" />;
}
