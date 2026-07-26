import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-6 bg-copper" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight uppercase",
          light ? "text-white" : "text-maroon",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed",
            light ? "text-white/80" : "text-charcoal/70",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
