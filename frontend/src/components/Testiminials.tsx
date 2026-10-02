import React from 'react';

const RAYS = Array.from({ length: 24 }, (_, i) => i * 15);

interface SunRaysProps {
  /** Must include positioning (e.g. "absolute") and size. */
  className?: string;
}

export function SunRays({ className = '' }: SunRaysProps) {
  return (
    <div aria-hidden className={`pointer-events-none ${className}`}>
      <svg viewBox="0 0 200 200" className="h-full w-full motion-safe:animate-[spin_80s_linear_infinite]">
        {RAYS.map((deg) =>
        <line
          key={deg}
          x1="100"
          y1="30"
          x2="100"
          y2="6"
          stroke="#FFFFFF"
          strokeOpacity="0.09"
          strokeWidth="2.5"
          strokeLinecap="round"
          transform={`rotate(${deg} 100 100)`} />

        )}
      </svg>
      <span className="absolute inset-[30%] rounded-full border border-white/10 motion-safe:animate-pulse" />
      <span className="absolute inset-[38%] rounded-full bg-gold/15" />
    </div>);

}