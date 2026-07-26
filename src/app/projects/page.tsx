import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { CTABanner } from "@/components/sections/CTABanner";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Project Portfolio",
  description:
    "Explore Brownstone Dredging & Infrastructure's portfolio of marine construction, dredging, port development, reclamation, and coastal protection projects across Asia and Micronesia.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Project Portfolio"
        subtitle={`${projects.length}+ landmark marine and infrastructure projects delivered across Asia and Micronesia.`}
        breadcrumb="Project Portfolio"
        image="/images/projects-hero.jpg"
      />
      <ProjectGallery />
      <CTABanner />
    </>
  );
}
