import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Full-width vertical section with consistent vertical rhythm.
 */
export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      {children}
    </section>
  );
}
