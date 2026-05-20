import { AdminDashboard } from "@/components/AdminDashboard";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "NetCulture Admin Dashboard | Portfolio, Blog, Leads and Analytics",
  description: "Secure admin dashboard surface for managing NetCulture portfolio, blog content, reviews, media, leads, analytics, and SEO settings.",
  path: "/admin"
});

export default function AdminPage() {
  return <AdminDashboard />;
}
