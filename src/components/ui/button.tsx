"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  // White glow CTA on black
  primary:
    "bg-glow text-background font-semibold hover:bg-white/90 shadow-[0_0_28px_rgba(255,255,255,0.18)] hover:shadow-[0_0_40px_rgba(255,255,255,0.28)]",
  // Dark surface button
  secondary: "bg-surface text-foreground border border-line hover:bg-surface/80",
  ghost: "bg-transparent text-foreground hover:bg-white/5",
  outline:
    "bg-transparent border border-line text-foreground hover:border-white/40 hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-3.5 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

/** Renders either a <button> or an <a> depending on whether `href` is provided. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: BaseProps &
  (
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  )) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if (href !== undefined) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}