import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ClipboardList, Ruler, Ship, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Consultation",
    description:
      "We start by understanding your project goals, site conditions, and requirements.",
  },
  {
    icon: Ruler,
    title: "Survey & Planning",
    description:
      "Hydrographic surveys and engineering plans define scope, methods, and timelines.",
  },
  {
    icon: Ship,
    title: "Execution",
    description:
      "Our skilled crews and marine equipment deliver the works safely and on schedule.",
  },
  {
    icon: CheckCircle2,
    title: "Delivery & Maintenance",
    description:
      "We hand over completed works and support ongoing maintenance where needed.",
  },
];

export function Process() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="Our Project Process"
          description="A disciplined, four-step approach that keeps every project on scope, on time, and on standard."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <span className="absolute left-[calc(50%+2.5rem)] top-8 hidden h-px w-[calc(100%-5rem)] bg-copper/30 lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-maroon text-white">
                  <step.icon className="h-7 w-7" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-copper font-heading text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase text-maroon">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
