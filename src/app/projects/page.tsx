import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Project Portfolio",
  description:
    "Projects completed by members of the Brownstone Dredging & Infrastructure team — marine construction, dredging, port development, reclamation, and coastal protection across Asia and Micronesia.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Project Portfolio"
        subtitle="Projects completed by members of our team across Asia and Micronesia."
        breadcrumb="Project Portfolio"
        image="/images/projects-hero.jpg"
      />
      <ProjectGallery />
      <CTABanner />
    </>
  );
}
