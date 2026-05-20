import "./globals.css";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { ExperienceLayer } from "@/components/ExperienceLayer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "NetCulture | Futuristic Digital Technology Company India",
  description:
    "NetCulture is an Indian digital technology company operating since 2002, building high-performance websites, applications, AI solutions, branding, SEO, marketing, and automation systems."
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsScripts />
        <ExperienceLayer />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
