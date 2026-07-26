"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const active = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Client Feedback"
          title="What Our Clients Say"
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative rounded-sm bg-sand p-8 text-center md:p-12">
            <Quote className="mx-auto h-10 w-10 text-copper" />
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80 md:text-xl">
              &ldquo;{active.quote}&rdquo;
            </p>
            <div className="mt-8 flex flex-col items-center">
              <Image
                src={active.image}
                alt={active.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-copper"
              />
              <p className="mt-3 font-heading text-base font-bold uppercase text-maroon">
                {active.name}
              </p>
              <p className="text-sm text-charcoal/60">{active.title}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-maroon/20 text-maroon transition-colors hover:bg-maroon hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-copper" : "w-2.5 bg-maroon/20"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-maroon/20 text-maroon transition-colors hover:bg-maroon hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
