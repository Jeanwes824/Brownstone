import { Hero } from "@/components/sections/Hero";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <Stats />
      <Services />
      <Process />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTABanner />
    </>
  );
}
