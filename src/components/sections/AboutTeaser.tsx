import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { Award, ShieldCheck, Waves, ArrowRight } from "lucide-react";

const badges = [
  { icon: Award, label: "Marine Experts Since 1981" },
  { icon: ShieldCheck, label: "Safety & Environmental Compliance" },
  { icon: Waves, label: "Marine & Civil Expertise" },
];

export function AboutTeaser() {
  return (
    <Section id="about" className="bg-white">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image collage */}
          <Reveal className="relative">
            <div className="bracket-accent relative">
              <div className="overflow-hidden rounded-sm">
                <Image
                  src="/images/about-main.jpg"
                  alt="Land reclamation and marine construction site"
                  width={1000}
                  height={720}
                  className="h-[420px] w-full object-cover md:h-[520px]"
                />
              </div>
            </div>
            {/* Floating secondary image */}
            <div className="absolute -bottom-10 -right-4 hidden w-56 overflow-hidden rounded-sm border-4 border-white shadow-card sm:block md:w-64">
              <Image
                src="/images/about-inset.jpg"
                alt="Port and wharf under construction"
                width={400}
                height={300}
                className="h-40 w-full object-cover md:h-48"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -left-4 top-8 bg-copper px-5 py-4 text-white shadow-card">
              <p className="font-heading text-3xl font-bold leading-none">
                {site.yearsExperience}
              </p>
              <p className="text-xs uppercase tracking-widest">
                Years&apos; Experience
              </p>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-copper" aria-hidden />
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-tight text-maroon md:text-4xl">
              A Team of Marine &amp; Civil Infrastructure Experts
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal/75">
              {site.name} is comprised of marine experts who have completed
              dredging and marine construction projects since{" "}
              {site.experienceSince} — bringing over 40 years of combined
              experience. Our team operates in coastal, offshore, and inland
              marine environments, serving both government and private-sector
              clients with recognized expertise.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/75">
              From dredging and breakwaters to port development and reclamation,
              our commitment to quality, safety, and environmental
              sustainability drives every project. Simply put:{" "}
              <span className="font-semibold text-maroon">
                we always get the job done.
              </span>
            </p>

            <ul className="mt-8 space-y-4">
              {badges.map((badge) => (
                <li key={badge.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-sand text-copper-dark">
                    <badge.icon className="h-5 w-5" />
                  </span>
                  <span className="font-heading text-sm font-medium uppercase tracking-wide text-charcoal">
                    {badge.label}
                  </span>
                </li>
              ))}
            </ul>

            <Button href="/about" variant="secondary" className="mt-9">
              More About Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
