import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  return (
    <Section className="bg-sand">
      <Container>
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Our Work"
            title="Featured Projects"
            description="A selection of projects completed by members of our team across Asia and Micronesia."
            className="mx-0"
          />
          <Reveal className="hidden md:block">
            <Button href="/projects" variant="outline">
              View Full Portfolio
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.1} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center md:hidden">
          <Button href="/projects" variant="outline">
            View Full Portfolio
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
