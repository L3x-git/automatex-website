"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-24 md:py-32 overflow-hidden", className)}
      {...props}
    >
      <div
        className={cn(
          "container mx-auto px-6 max-w-7xl",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

/** Eyebrow label above a section heading. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-[0.2em] text-mute mb-4",
        className
      )}
    >
      {children}
    </p>
  );
}

/** Display serif heading. */
export function Heading({
  children,
  as = "h2",
  className,
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "font-display text-foreground leading-tight text-balance",
        as === "h1" && "text-4xl sm:text-5xl lg:text-6xl font-medium",
        as === "h2" && "text-3xl md:text-4xl lg:text-5xl font-medium",
        as === "h3" && "text-2xl font-medium",
        className
      )}
    >
      {children}
    </Comp>
  );
}