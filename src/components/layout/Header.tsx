"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Solid header when scrolled, off the home hero, or drawer open
  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-white shadow-[0_2px_20px_-8px_rgba(28,26,25,0.25)]"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-24 items-center justify-between md:h-28">
        <Logo light={!solid} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-heading text-sm font-medium uppercase tracking-wider transition-colors",
                solid
                  ? "text-charcoal hover:text-copper"
                  : "text-white/90 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.contact.phoneHref}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              solid ? "text-maroon hover:text-copper" : "text-white",
            )}
          >
            <Phone className="h-4 w-4" />
            {site.contact.phone}
          </a>
          <Button href="/#contact" variant="primary">
            Request a Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={cn(
            "lg:hidden -mr-2 p-2",
            solid ? "text-maroon" : "text-white",
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-black/5 bg-white transition-[max-height] duration-300",
          open ? "max-h-[28rem]" : "max-h-0",
        )}
      >
        <nav className="container flex flex-col py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-black/5 py-3 font-heading text-sm font-medium uppercase tracking-wider text-charcoal hover:text-copper"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/#contact" variant="primary" className="mt-5 w-full">
            Request a Quote
          </Button>
        </nav>
      </div>
    </header>
  );
}
