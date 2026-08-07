"use client";

import dynamic from "next/dynamic";

const Beams = dynamic(() => import("./Beams"), {
  ssr: false,
  loading: () => null,
});

type BeamsBackgroundProps = {
  className?: string;
  beamWidth?: number;
  beamHeight?: number;
  beamNumber?: number;
  lightColor?: string;
  speed?: number;
  noiseIntensity?: number;
  scale?: number;
  rotation?: number;
};

export default function BeamsBackground({
  className = "",
  ...props
}: BeamsBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <Beams {...props} />
    </div>
  );
}