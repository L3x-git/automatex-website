"use client";

import { motion } from "motion/react";
import { Eye, Wrench, ShieldCheck, Coffee } from "@phosphor-icons/react";
import { Section, Heading, Eyebrow } from "./ui/section";

const points = [
  {
    icon: Eye,
    title: "We audit first, sell second",
    text: "We don't pitch you a package before we've looked at your business. The free audit tells you what's losing you money. Even if it means less work for us.",
  },
  {
    icon: Wrench,
    title: "Built around your business",
    text: "Every bot, site, and flow is trained on your services, your pricing, your tone. You'll never get a generic 'template' that sounds like a robot in a trench coat.",
  },
  {
    icon: ShieldCheck,
    title: "What we promise, we show",
    text: "You see a rough version of your own setup before you pay a cent. No 'trust us'. We let the work speak.",
  },
  {
    icon: Coffee,
    title: "Human support, always",
    text: "A real person answers your messages. Not a support ticket maze. When something breaks, we fix it.",
  },
];

export function WhyUs() {
  return (
    <Section id="why-us" className="border-t border-line">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <Eyebrow>Why AutomateX</Eyebrow>
          <Heading as="h2">
            A small team that does the work.
            <br />
            <span className="italic text-glow">Not an agency that talks about it.</span>
          </Heading>
          <p className="text-lg text-body mt-6 max-w-xl">
            We&apos;re a small team in Nairobi building automations for businesses
            that can&apos;t afford to lose a lead. We keep it simple: we build the
            thing, you see the thing, we improve the thing.
          </p>
          <p className="text-body mt-4 max-w-xl">
            You won&apos;t find fake logos, invented testimonials, or &quot;9,000+
            automations delivered&quot; here. What you will find is a straight
            answer about what we can build for you and how much it costs.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 gap-5">
          {points.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="flex gap-5 rounded-2xl border border-line bg-surface p-6"
            >
              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-background">
                <p.icon size={22} weight="duotone" className="text-glow" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{p.title}</h3>
                <p className="text-body mt-1.5">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}