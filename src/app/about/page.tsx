import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Stats } from "@/components/sections/Stats";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTABanner } from "@/components/sections/CTABanner";
import { site } from "@/data/site";
import { team } from "@/data/team";
import { services } from "@/data/services";
import { Target, Eye, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} is comprised of marine experts who have completed projects since ${site.experienceSince} — over 40 years of combined experience, including work delivered as ${site.formerName}, across Asia and Micronesia.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle={`A team of marine experts with over 40 years of combined experience — including work delivered as ${site.formerName}.`}
        breadcrumb="About Us"
        image="/images/about-hero.jpg"
      />

      {/* Company story */}
      <Section className="bg-white">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal className="relative">
              <div className="bracket-accent relative overflow-hidden rounded-sm">
                <Image
                  src="/images/about-story.jpg"
                  alt="Marine construction and port development works"
                  width={1000}
                  height={720}
                  className="h-[460px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-maroon px-6 py-5 text-white shadow-card">
                <p className="font-heading text-3xl font-bold leading-none text-copper-light">
                  {site.yearsExperience}
                </p>
                <p className="text-xs uppercase tracking-widest">
                  Years of Experience
                </p>
              </div>
            </Reveal>

            <div>
              <span className="eyebrow">
                <span className="h-px w-6 bg-copper" aria-hidden />
                Our Story
              </span>
              <h2 className="mt-4 text-3xl font-bold uppercase leading-tight text-maroon md:text-4xl">
                Built on Over 40 Years of Marine Expertise
              </h2>
              <p className="mt-5 leading-relaxed text-charcoal/75">
                {site.name} is comprised of marine experts whose track record —
                including work delivered as {site.formerName} — spans marine and
                civil infrastructure projects since {site.experienceSince}. With
                more than 40 years of combined experience, our team operates in
                coastal, offshore, and inland marine environments, serving both
                government and private-sector clients with recognized expertise.
              </p>
              <p className="mt-4 leading-relaxed text-charcoal/75">
                Over four decades, our team has delivered breakwaters, ports,
                wharves, dredging, reclamation, and coastal protection across
                Asia and Micronesia — always guided by quality, safety, and
                environmental responsibility.
              </p>
              <div className="mt-8 border-l-4 border-copper bg-sand p-6">
                <Quote className="h-7 w-7 text-copper" />
                <p className="mt-3 font-heading text-xl font-semibold italic text-maroon">
                  &ldquo;{site.motto}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Vision & Mission */}
      <Section className="bg-sand">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal className="rounded-sm bg-white p-10 shadow-card">
              <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-maroon text-white">
                <Eye className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-bold uppercase text-maroon">
                Our Vision
              </h3>
              <p className="mt-4 leading-relaxed text-charcoal/75">
                {site.vision}
              </p>
            </Reveal>
            <Reveal
              delay={0.1}
              className="rounded-sm bg-white p-10 shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-copper text-white">
                <Target className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-bold uppercase text-maroon">
                Our Mission
              </h3>
              <p className="mt-4 leading-relaxed text-charcoal/75">
                {site.mission}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Stats />

      {/* Services overview */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Our Expertise"
            title="What We Deliver"
            description="Six core service areas spanning marine construction, dredging, and engineering."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal
                key={service.slug}
                delay={(i % 3) * 0.1}
                className="flex gap-4 rounded-sm border border-black/5 bg-sand p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-maroon/10 text-maroon">
                  <service.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold uppercase text-maroon">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal/70">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Leadership */}
      <Section className="bg-sand">
        <Container>
          <SectionHeading
            eyebrow="Our Leadership"
            title="The Team Behind Brownstone"
            description="Experienced leadership driving our marine and infrastructure operations."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.image} delay={i * 0.1} className="group text-center">
                <div className="relative mx-auto overflow-hidden rounded-sm">
                  <Image
                    src={member.image}
                    alt={member.name || member.role}
                    width={400}
                    height={480}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-copper" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase text-maroon">
                  {member.name || " "}
                </h3>
                <p className="text-sm text-copper-dark">{member.role}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
