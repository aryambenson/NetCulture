import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand, fullSitemap, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="section-band compact border-t border-white/10">
      <div className="site-container footer-grid">
        <div>
          <Link className="brand-mark" href="/">
            <span className="brand-orb" aria-hidden="true">
              NC
            </span>
            <span>NetCulture</span>
          </Link>
          <p className="muted mt-5 max-w-md text-sm leading-7">{brand.tagline}</p>
          <div className="button-row">
            <a className="premium-button secondary" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
            <a className="premium-button crimson" href={brand.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-white/55">Pages</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            {fullSitemap.slice(0, 5).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-white/55">Company</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            {fullSitemap.slice(5, 10).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-white/55">Systems</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            {services.slice(0, 5).map((service) => (
              <Link key={service.slug} href="/services">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="site-container mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45">
        <span>© 2026 NetCulture.in. All Rights Reserved by AryamBenson.com.</span>
        <span>SEO-ready, analytics-ready, automation-ready.</span>
      </div>
    </footer>
  );
}
