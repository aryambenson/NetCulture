import { PageTemplate } from "@/components/PageTemplate";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "NetCulture AI Solutions | Lead Qualification, Automation and AI Systems",
  description: "AI solutions for lead qualification, RAG assistants, workflow automation, sales copilots, support systems, and analytics intelligence.",
  path: "/ai-solutions"
});

export default function AiSolutionsPage() {
  return <PageTemplate slug="ai-solutions" />;
}
