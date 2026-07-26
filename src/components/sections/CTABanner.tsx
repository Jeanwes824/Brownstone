import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { Phone } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-copper">
      <Container>
        <Reveal className="flex flex-col items-center justify-between gap-6 py-12 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase text-white md:text-3xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-2 text-white/85">
              Talk to our marine construction experts today — {site.motto}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/#contact" variant="secondary">
              Request a Quote
            </Button>
            <Button
              href={site.contact.phoneHref}
              variant="outlineLight"
              className="!border-white"
            >
              <Phone className="h-4 w-4" />
              {site.contact.phone}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
