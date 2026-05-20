import { PageTemplate } from "@/components/PageTemplate";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "NetCulture Future Lab | Web3, AI Agents, Spatial UI and Automation",
  description: "NetCulture Future Lab explores Web3 utility, AI agents, WebGL prototypes, spatial interfaces, automation systems, and next-generation digital experiences.",
  path: "/future-lab"
});

export default function FutureLabPage() {
  return <PageTemplate slug="future-lab" />;
}
