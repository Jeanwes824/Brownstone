import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";
import { site } from "@/data/site";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="bg-sand">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something That Lasts"
          description="Ready to start your marine or infrastructure project? Reach out and our team will respond with next steps."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact details */}
          <Reveal className="flex flex-col gap-6">
            <div className="rounded-sm bg-maroon p-8 text-white">
              <h3 className="font-heading text-xl font-bold uppercase">
                Contact Information
              </h3>
              <p className="mt-2 text-sm text-white/75">{site.serviceArea}</p>

              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-white/10 text-copper-light">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      Phone
                    </p>
                    <a
                      href={site.contact.phoneHref}
                      className="text-sm font-medium hover:text-copper-light"
                    >
                      {site.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-white/10 text-copper-light">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      Email
                    </p>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="break-all text-sm font-medium hover:text-copper-light"
                    >
                      {site.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-white/10 text-copper-light">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      Service Area
                    </p>
                    <p className="text-sm font-medium">Asia &amp; Micronesia</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="flex h-48 items-center justify-center rounded-sm border border-dashed border-maroon/30 bg-white text-center text-sm text-charcoal/50">
              <div>
                <MapPin className="mx-auto h-6 w-6 text-copper" />
                <p className="mt-2">
                  Map placeholder
                  <br />
                  <span className="text-xs">
                    Embed a Google Map here when a physical address is available.
                  </span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
