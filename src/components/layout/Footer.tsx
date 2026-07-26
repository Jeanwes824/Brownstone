import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-maroon-dark text-white/80">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo light />
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              {site.name} — formerly known as {site.formerName}. Delivering
              marine construction, dredging, and civil infrastructure excellence
              since {site.established}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.facebook}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center border border-white/20 transition-colors hover:border-copper hover:bg-copper hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={site.social.linkedin}
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center border border-white/20 transition-colors hover:border-copper hover:bg-copper hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center border border-white/20 transition-colors hover:border-copper hover:bg-copper hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-copper-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Our Services
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/#services"
                    className="transition-colors hover:text-copper-light"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Get In Touch
            </h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                <span>{site.serviceArea}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                <a
                  href={site.contact.phoneHref}
                  className="transition-colors hover:text-copper-light"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="break-all transition-colors hover:text-copper-light"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar with bracket motif */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            <span className="text-copper">[</span> © {year} {site.name}. All
            rights reserved. <span className="text-copper">]</span>
          </p>
          <p>
            Formerly {site.formerName} · Established {site.established}
          </p>
        </div>
      </div>
    </footer>
  );
}
