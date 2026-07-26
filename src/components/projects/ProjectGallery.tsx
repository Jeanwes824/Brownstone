"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "./ProjectCard";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/cn";

const filters = ["All", ...projectCategories] as const;
type Filter = (typeof filters)[number];

export function ProjectGallery() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-sm border px-5 py-2.5 font-heading text-xs font-semibold uppercase tracking-widest transition-colors",
                active === filter
                  ? "border-maroon bg-maroon text-white"
                  : "border-black/15 text-charcoal/70 hover:border-copper hover:text-copper-dark",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="mt-6 text-center text-sm text-charcoal/60">
          Showing {visible.length}{" "}
          {visible.length === 1 ? "project" : "projects"}
          {active !== "All" && ` in ${active}`}
        </p>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
