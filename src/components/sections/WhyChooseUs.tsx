import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  Compass,
  DraftingCompass,
  Settings2,
  Route,
  Users,
  Leaf,
} from "lucide-react";

const competencies = [
  { icon: Compass, title: "Marine Surveying", text: "Precise hydrographic and site surveys." },
  {
    icon: DraftingCompass,
    title: "Coastal & Structural Engineering",
    text: "Sound engineering for demanding environments.",
  },
  {
    icon: Settings2,
    title: "Equipment Installation & Operation",
    text: "Full marine plant and equipment capability.",
  },
  { icon: Route, title: "Logistics Planning", text: "Coordinated mobilization and supply." },
  { icon: Users, title: "SME Technicians", text: "Skilled specialists on every project." },
  {
    icon: Leaf,
    title: "Environmental & Safety Compliance",
    text: "Responsible, compliant marine practice.",
  },
];

export function WhyChooseUs() {
  return (
    <Section className="relative overflow-hidden bg-maroon-dark text-white">
      {/* Background texture image */}
      <Image
        src="/images/why-choose-us-bg.jpg"
        alt=""
        fill
        aria-hidden
        className="object-cover opacity-10"
      />
      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-copper" aria-hidden />
              Why Choose Brownstone
            </span>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-tight md:text-4xl">
              Core Competencies That Get the Job Done
            </h2>
            <p className="mt-5 leading-relaxed text-white/75">
              With over {`${new Date().getFullYear() - 1981}`} years of
              hands-on experience, our multidisciplinary team brings the
              expertise, equipment, and discipline required to deliver complex
              marine and civil works — safely and to specification.
            </p>
            <div className="mt-8 border-l-4 border-copper pl-5">
              <p className="font-heading text-xl font-semibold italic">
                &ldquo;We always get the job done.&rdquo;
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {competencies.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 0.1}
                className="flex gap-4 rounded-sm border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-copper/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-copper/20 text-copper-light">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
