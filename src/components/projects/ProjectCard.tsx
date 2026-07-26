import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-sm bg-charcoal shadow-card">
      <Image
        src={project.image}
        alt={`${project.title} — ${project.location}`}
        width={800}
        height={600}
        className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark via-maroon-dark/40 to-transparent opacity-90" />

      {/* Category tag */}
      <span className="absolute left-4 top-4 bg-copper px-3 py-1 font-heading text-[0.65rem] font-semibold uppercase tracking-widest text-white">
        {project.category}
      </span>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="flex items-center gap-1.5 text-xs text-copper-light">
          <MapPin className="h-3.5 w-3.5" />
          {project.location}
        </div>
        <h3 className="mt-2 font-heading text-lg font-bold uppercase leading-snug">
          {project.title}
        </h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
          {project.description}
        </p>
      </div>
    </article>
  );
}
