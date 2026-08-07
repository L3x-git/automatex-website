"use client";

import { motion } from "motion/react";
import {
  MagnifyingGlass,
  Hammer,
  RocketLaunch,
  Lifebuoy,
} from "@phosphor-icons/react";
import { Section, Heading, Eyebrow } from "./ui/section";

const steps = [
  {
    icon: MagnifyingGlass,
    step: "01",
    title: "Audit",
    text: "We look at exactly where you're losing money today. Unanswered messages, missed calls, a site that doesn't convert. No assumptions, no fluff.",
  },
  {
    icon: Hammer,
    step: "02",
    title: "Build",
    text: "We build the automation: the bot, the responses, the site, the messaging. You see it working on your own business details before anything launches.",
  },
  {
    icon: RocketLaunch,
    step: "03",
    title: "Launch",
    text: "We put it live and start capturing leads immediately. This is where you start seeing the point of the whole thing.",
  },
  {
    icon: Lifebuoy,
    step: "04",
    title: "Support",
    text: "We tune responses, fix anything that breaks, and keep improving the flows. You're not left with a finished file and a wave goodbye.",
  },
];

export function Process() {
  return (
    <Section id="process" className="relative border-t border-line">
      <div className="text-center mb-16">
        <Eyebrow className="justify-center">How we work</Eyebrow>
        <Heading as="h2">No mystery, no 6-month timelines</Heading>
        <p className="text-body max-w-2xl mx-auto mt-6">
          A simple, honest process. You always know what&apos;s happening and what
          comes next.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, index) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative rounded-3xl border border-line bg-surface p-8"
          >
            <span className="absolute top-6 right-6 font-display text-3xl text-mute">
              {s.step}
            </span>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-background">
              <s.icon size={22} weight="duotone" className="text-glow" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-foreground">{s.title}</h3>
            <p className="text-body mt-3 text-sm leading-relaxed">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}