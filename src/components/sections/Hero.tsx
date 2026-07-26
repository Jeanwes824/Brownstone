import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { ArrowRight, ShieldCheck, Anchor } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-home.jpg"
        alt="Marine dredging and construction operations at a coastal port"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Maroon gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/95 via-maroon-dark/80 to-maroon/40" />

      <Container className="relative z-10 py-32">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-copper" aria-hidden />
            {site.trustLine}
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Building &amp; Restoring Waterways and Infrastructure That Last
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            {site.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/#contact" variant="primary">
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/#services" variant="outlineLight">
              Our Services
            </Button>
          </div>

          {/* Trust row */}
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/15 pt-8">
            <div className="flex items-center gap-3 text-white">
              <Anchor className="h-6 w-6 text-copper" />
              <div>
                <p className="font-heading text-2xl font-bold leading-none">
                  {site.yearsExperience}
                </p>
                <p className="text-sm text-white/70">Years of Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <ShieldCheck className="h-6 w-6 text-copper" />
              <div>
                <p className="font-heading text-2xl font-bold leading-none">
                  Since {site.established}
                </p>
                <p className="text-sm text-white/70">
                  Trusted marine contractor
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
