import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <Section id="services" className="bg-sand">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Our Marine & Infrastructure Services"
          description="A full spectrum of marine construction, dredging, and engineering capabilities — delivered for government and private clients across Asia and Micronesia."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-black/5 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover">
                {/* Top copper accent bar */}
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-copper transition-transform duration-300 group-hover:scale-x-100" />

                <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-maroon/5 text-maroon transition-colors duration-300 group-hover:bg-maroon group-hover:text-white">
                  <service.icon className="h-7 w-7" />
                </span>

                <h3 className="mt-6 font-heading text-xl font-bold uppercase text-maroon">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">
                  {service.description}
                </p>

                <a
                  href="/#contact"
                  className="mt-6 inline-flex items-center gap-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-copper-dark transition-colors hover:text-maroon"
                >
                  Explore More
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button href="/#contact" variant="primary">
            Request a Free Consultation
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
