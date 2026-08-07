"use client";

import { motion } from "motion/react";
import { ArrowRight, Robot } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import { Section, Heading, Eyebrow } from "./ui/section";
import { Halftone } from "./ui/texture";
import BeamsBackground from "./ui/beams/BeamsBackground";
import { BOOKING_URL } from "@/lib/contact";

export function Hero() {
  return (
    <Section className="relative pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      <BeamsBackground
        className="opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"
        beamWidth={2}
        beamHeight={22}
        beamNumber={10}
        lightColor="#ffffff"
        speed={1.5}
        noiseIntensity={1.5}
        scale={0.25}
        rotation={65}
      />
      <Halftone className="opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>AI automation for businesses on the ground</Eyebrow>
            <Heading as="h1">
              You built a business.
              <br />
              AutomateX answers the leads{" "}
              <span className="italic text-glow">while you sleep.</span>
            </Heading>
            <p className="text-lg md:text-xl text-body mt-8 max-w-2xl mx-auto lg:mx-0">
              WhatsApp auto-responders, AI voice agents, chatbots for your
              website and social media, and done-for-you websites. We capture
              every lead and follow up automatically. Nobody slips through the
              cracks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10">
              <Button
                size="lg"
                className="group w-full sm:w-auto"
                href={BOOKING_URL}
              >
                Get a Free Audit
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                href="#contact"
              >
                See how it works
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Chat widget mockup */}
        <div className="flex-1 w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative z-10 mx-auto max-w-md rounded-3xl bg-surface border border-line shadow-2xl shadow-black/60 overflow-hidden"
          >
            {/* mock header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-line">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-line">
                <Robot size={18} weight="duotone" className="text-glow" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-tight">
                  AutomateX Assistant
                </p>
                <p className="text-xs text-body">Online · replies instantly</p>
              </div>
              <span className="ml-auto h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* mock conversation */}
            <div className="space-y-4 p-5 text-sm">
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.06] border border-line px-4 py-3 text-body">
                Mlolongo showroom for the Prado? Let me book your test
                drive. What&apos;s your pickup time?
              </div>
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-glow text-background px-4 py-3 font-medium">
                Around 11am works 👍
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.06] border border-line px-4 py-3 text-body">
                Got it. 11am at the showroom. Confirming with the agent now.
                You&apos;ll get the booking on WhatsApp in a minute.
              </div>
              <div className="flex items-center justify-center gap-1 pt-1 text-glow">
                <span className="font-semibold text-xs uppercase tracking-wider">
                  Booking captured while the owner slept
                </span>
              </div>
            </div>
          </motion.div>

          {/* decorative edge glows */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/[0.04] rounded-full blur-[90px]" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/[0.03] rounded-full blur-[90px]" />
        </div>
      </div>
    </Section>
  );
}