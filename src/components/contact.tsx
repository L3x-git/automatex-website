"use client";

import { useState } from "react";
import { WhatsappLogo, Envelope, MapPin } from "@phosphor-icons/react";
import { Section, Heading, Eyebrow } from "./ui/section";
import { Button } from "./ui/button";
import {
  CONTACT_EMAIL,
  LOCATION,
  WHATSAPP_DISPLAY,
  mailtoLink,
  waLink,
} from "@/lib/contact";

const inputClass =
  "w-full rounded-xl border border-line bg-background px-4 py-3 text-foreground placeholder:text-mute focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-colors";

export function Contact() {
  const [form, setForm] = useState({ name: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi AutomateX, I'm ${form.name || "a business owner"} from ${
      form.business || "my business"
    }.\n\n${form.message || "I'd like a free audit."}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <Section id="contact" className="border-t border-line relative">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <Eyebrow>Get in touch</Eyebrow>
          <Heading as="h2">
            Let&apos;s find out what your business is leaking.
          </Heading>
          <p className="text-lg text-body mt-6 max-w-xl">
            Tell us a little about your business and we&apos;ll come back with a
            straight answer. What we&apos;d build, what it costs, how long it takes.
            No pressure, no jargon.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={waLink("Hi AutomateX, I'd like to talk about automating my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 hover:border-white/25 transition-colors"
            >
              <WhatsappLogo size={24} weight="duotone" className="text-glow" />
              <div>
                <p className="text-sm text-mute">WhatsApp</p>
                <p className="font-semibold text-foreground">{WHATSAPP_DISPLAY}</p>
              </div>
            </a>
            <a
              href={mailtoLink("Website inquiry", "Hi AutomateX,")}
              className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 hover:border-white/25 transition-colors"
            >
              <Envelope size={24} weight="duotone" className="text-glow" />
              <div>
                <p className="text-sm text-mute">Email</p>
                <p className="font-semibold text-foreground">{CONTACT_EMAIL}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5">
              <MapPin size={24} weight="duotone" className="text-glow" />
              <div>
                <p className="text-sm text-mute">Based in</p>
                <p className="font-semibold text-foreground">{LOCATION}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-line bg-surface p-8"
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Jane Mwangi"
                className={inputClass}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                Business name
              </label>
              <input
                id="business"
                type="text"
                placeholder="e.g. Safari Motors"
                className={inputClass}
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                What are you trying to fix?
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="We're missing calls after 6pm and WhatsApp messages go unanswered for hours…"
                className={`${inputClass} resize-none`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
          </div>

          <Button size="lg" type="submit" className="w-full mt-6">
            Send via WhatsApp
          </Button>
          <p className="text-xs text-mute text-center mt-4">
            Your message opens in WhatsApp. Nothing is stored or sent until you
            hit send.
          </p>
        </form>
      </div>
    </Section>
  );
}