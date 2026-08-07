"use client";

import { motion } from "motion/react";
import {
  Robot,
  Layout,
  ChartLineUp,
  Lightning,
  PhoneCall,
} from "@phosphor-icons/react";
import { Section, Heading, Eyebrow } from "./ui/section";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "AI chatbots",
    text: "Customer support and lead capture that work 24/7. On your website, WhatsApp, Instagram, and Facebook.",
    icon: Robot,
  },
  {
    title: "Web design",
    text: "Modern, mobile-first sites built to convert visitors into calls, messages, and bookings.",
    icon: Layout,
  },
  {
    title: "Sales automation",
    text: "Follow-ups, reminders, and outreach that run themselves. No lead goes cold.",
    icon: ChartLineUp,
  },
  {
    title: "Performance optimization",
    text: "Fast load times and clean, SEO-sensible structure so people can find you.",
    icon: Lightning,
  },
  {
    title: "AI voice agents",
    text: "A voice that answers after-hours calls, qualifies callers, and books jobs or viewings. No more ringing out.",
    icon: PhoneCall,
    wide: true,
  },
];

export function Services() {
  return (
    <Section id="services" className="border-t border-line">
      <div className="text-center mb-16">
        <Eyebrow className="justify-center">What we build</Eyebrow>
        <Heading as="h2">The tools we use to keep your pipeline moving</Heading>
        <p className="text-body max-w-2xl mx-auto mt-6">
          Not a laundry list of buzzwords. Just the things we build and
          maintain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={cn(
              "group rounded-3xl border border-line bg-surface p-8 hover:border-white/25 transition-colors",
              service.wide && "md:col-span-2"
            )}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-background mb-6 group-hover:scale-110 transition-transform">
              <service.icon size={26} weight="duotone" className="text-glow" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
            <p className="text-body mt-3 leading-relaxed">{service.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}