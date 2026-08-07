import { cn } from "@/lib/utils";

/**
 * Signature halftone motif: a #52525B dot grid at low opacity.
 * Used in the hero and as section dividers. Purely decorative.
 */
export function Halftone({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, #52525b 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
    />
  );
}

/**
 * A fine 1px grid made from the border color, alternative texture.
 */
export function GridLines({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "linear-gradient(to right, #1f2023 1px, transparent 1px), linear-gradient(to bottom, #1f2023 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  );
}