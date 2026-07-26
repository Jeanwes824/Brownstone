"use client";

import { useState } from "react";
import { ButtonAction } from "@/components/ui/Button";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (!message) next.message = "Please tell us about your project.";
    return next;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const validation = validate(data);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    if (site.web3formsAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      // No access key configured yet — fail clearly instead of pretending to send.
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const payload = {
        access_key: site.web3formsAccessKey,
        subject: "New inquiry from Brownstone website",
        from_name: "Brownstone Website",
        ...Object.fromEntries(data.entries()),
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-sm bg-white p-10 text-center shadow-card">
        <CheckCircle2 className="h-14 w-14 text-copper" />
        <h3 className="mt-4 font-heading text-2xl font-bold uppercase text-maroon">
          Thank You!
        </h3>
        <p className="mt-2 max-w-sm text-charcoal/70">
          Your message has been received. Our team will get back to you shortly
          to discuss your project.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-heading text-sm font-semibold uppercase tracking-widest text-copper-dark hover:text-maroon"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-sm border border-black/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-copper focus:ring-2 focus:ring-copper/30";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-sm bg-white p-8 shadow-card"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Full Name *
          </label>
          <input id="name" name="name" type="text" className={fieldClass} />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email Address *
          </label>
          <input id="email" name="email" type="email" className={fieldClass} />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
            Service of Interest
          </label>
          <select id="service" name="service" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other / General Inquiry</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={fieldClass}
          placeholder="Tell us about your project, location, and scope..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <ButtonAction
        type="submit"
        variant="primary"
        className="mt-6 w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </ButtonAction>
    </form>
  );
}
