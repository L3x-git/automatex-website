"use client";

import { motion } from "motion/react";
import {
  WhatsappLogo,
  PhoneCall,
  Layout,
  CheckCircle,
} from "@phosphor-icons/react";
import { Section, Heading, Eyebrow } from "./ui/section";
import { Button } from "./ui/button";
import { waLink } from "@/lib/contact";

const offers = [
  {
    icon: WhatsappLogo,
    title: "WhatsApp auto-responders",
    text: "Every message answered in seconds. Inquiries, pricing, bookings. Even when your phone is charging on the other side of the room.",
  },
  {
    icon: PhoneCall,
    title: "AI voice agents",
    text: "Answer after-hours calls, qualify callers, and book test drives or viewings with a voice that never gets tired or rude.",
  },
  {
    icon: Layout,
    title: "Done-for-you websites",
    text: "A clean, mobile-first site with WhatsApp click-to-chat on every page. Built for real estate, dealers, and restaurants.",
  },
];

const flow = [
  "Client asks about stock or pricing on WhatsApp",
  "The bot answers instantly, in English or Swahili",
  "Lead is captured with their details and interest",
  "You get it in a clean list, ready to close",
];

export function Kenya() {
  return (
    <Section id="kenya" className="relative border-t border-line">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
        <div>
          <Eyebrow>For Kenyan businesses</Eyebrow>
          <Heading as="h2">
            Leads don&apos;t wait for office hours.
          </Heading>
          <p className="text-lg text-body mt-6 max-w-xl">
            Kenyan customers message on WhatsApp at 9pm, on Sunday, during
            traffic. AutomateX makes sure someone answers. And that the lead
            reaches you in a usable form.
          </p>

          <div className="grid sm:grid-cols-1 gap-6 mt-10">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex gap-5 rounded-2xl border border-line bg-surface p-6"
              >
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-background">
                  <offer.icon size={22} weight="duotone" className="text-glow" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{offer.title}</h3>
                  <p className="text-body mt-1.5">{offer.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Worked example card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:sticky lg:top-28 rounded-3xl border border-line bg-surface p-8"
        >
          <Eyebrow>How it works in practice</Eyebrow>
          <Heading as="h3">A car dealer&apos;s Saturday night</Heading>
          <ol className="mt-8 space-y-0">
            {flow.map((step, i) => (
              <li key={step} className="relative flex gap-4 pb-8 last:pb-0">
                {i < flow.length - 1 && (
                  <span className="absolute left-[11px] top-7 bottom-0 w-px bg-line" />
                )}
                <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line bg-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-glow" />
                </span>
                <p className="text-body pt-1">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-2xl border border-line bg-background p-5">
            <div className="flex items-start gap-3">
              <CheckCircle size={20} weight="fill" className="text-emerald-400 mt-0.5" />
              <p className="text-sm text-body">
                The owner wakes up to a booked test drive and a list of hot
                leads. Not 40 unanswered messages.
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full mt-8"
            href={waLink("Hi AutomateX, I run a business in Kenya and want to stop losing WhatsApp leads. Can we talk?")}
          >
            Talk to us on WhatsApp
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}