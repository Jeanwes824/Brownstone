import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb: string;
};

export function PageHero({ title, subtitle, image, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[52vh] items-center overflow-hidden pt-28">
      <Image
        src={image}
        alt=""
        fill
        priority
        aria-hidden
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/95 via-maroon-dark/80 to-maroon/50" />

      <Container className="relative z-10 py-20 text-center">
        <h1 className="font-heading text-4xl font-bold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {subtitle}
          </p>
        )}
        <nav
          aria-label="Breadcrumb"
          className="mt-6 flex items-center justify-center gap-2 font-heading text-sm uppercase tracking-widest text-white/70"
        >
          <Link href="/" className="hover:text-copper-light">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-copper" />
          <span className="text-copper-light">{breadcrumb}</span>
        </nav>
      </Container>
    </section>
  );
}
