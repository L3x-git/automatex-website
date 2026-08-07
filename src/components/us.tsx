"use client";

import { motion } from "motion/react";
import {
  Check,
  Mouse,
  ChatCircleDots,
  RocketLaunch,
} from "@phosphor-icons/react";
import { Section, Heading, Eyebrow } from "./ui/section";
import { Button } from "./ui/button";
import { waLink } from "@/lib/contact";

const packageItems = [
  "5-page website: home, services, about, reviews, contact",
  "AI chatbot that captures leads after hours",
  "WhatsApp & call-to-action setup that routes to you",
  "Mobile-first, fast, and built to rank locally",
  "Launched in 4 to 7 business days",
];

const steps = [
  {
    icon: Mouse,
    title: "We audit your current setup",
    text: "Tell us about your business. We look at what's losing you calls and clicks.",
  },
  {
    icon: ChatCircleDots,
    title: "We build your site & bot",
    text: "A clean site plus an AI chatbot trained on your services, pricing, and service area.",
  },
  {
    icon: RocketLaunch,
    title: "You start getting leads",
    text: "The bot answers after hours, books jobs, and hands you ready-to-call leads.",
  },
];

export function US() {
  return (
    <Section id="us" className="relative border-t border-line">
      <HalftoneFooter />
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <Eyebrow>For US home-service businesses</Eyebrow>
          <Heading as="h2">
            Every missed call is a job handed to your competitor.
          </Heading>
          <p className="text-lg text-body mt-6 max-w-xl">
            HVAC, plumbing, roofing, electrical, landscaping. Home services
            lose real money when the phone rings after 6pm. AutomateX puts a
            website and an AI front desk in front of your business. It answers,
            books, and hands you the lead.
          </p>

          <div className="mt-10 space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex gap-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface">
                  <step.icon size={22} weight="duotone" className="text-glow" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-body mt-1.5">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Package card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:sticky lg:top-28 rounded-3xl border border-line bg-surface p-8"
        >
          <Eyebrow>What we set up</Eyebrow>
          <p className="font-display text-3xl md:text-4xl font-medium text-foreground leading-tight text-balance">
            A site and an AI front desk, built around your business.
          </p>
          <p className="text-body mt-3">
            We quote per project, not from a price list. You pay for the size
            of your setup, and the site, chatbot, hosting, and updates are all
            handled.
          </p>

          <ul className="mt-8 space-y-4">
            {packageItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={20} weight="bold" className="text-glow mt-0.5 shrink-0" />
                <span className="text-body">{item}</span>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className="w-full mt-8"
            href={waLink("Hi AutomateX, I run a home-service business in the US and I'm losing after-hours calls. I'd like to talk about a site and AI front desk for my business.")}
          >
            Get a straight quote
          </Button>
          <p className="text-xs text-mute text-center mt-4">
            No obligation. We&apos;ll show you a rough version of your site first.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

function HalftoneFooter() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 opacity-[0.04]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, #52525b 1px, transparent 0)",
        backgroundSize: "20px 20px",
        maskImage: "linear-gradient(to top, black, transparent)",
      }}
    />
  );
}