"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
import { navItems } from "@/data/site";
import { MagneticButton } from "@/components/MagneticButton";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <div className="site-container nav-inner">
        <Link className="brand-mark" href="/" aria-label="NetCulture home">
          <span className="brand-orb" aria-hidden="true">
            NC
          </span>
          <span>
            NetCulture
            <span className="block text-xs font-bold text-white/50">Digital since 2002</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="desktop-cta">
          <MagneticButton href="/contact" icon={<ArrowUpRight size={17} />}>
            Start Project
          </MagneticButton>
        </div>

        <button
          className="mobile-menu premium-button secondary !h-11 !min-h-0 !w-11 !p-0"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open ? (
        <div className="site-container pb-4 lg:hidden">
          <div className="glass-panel grid gap-2 p-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-bold text-white/80 hover:bg-white/10"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <Sparkles size={15} />
              </Link>
            ))}
            <Link
              className="premium-button crimson mt-1"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Book a Strategy Call <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
