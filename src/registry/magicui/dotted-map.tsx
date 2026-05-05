"use client";

import React, { useEffect, useRef } from "react";

interface DottedMapProps {
  dotRadius?: number;
  gap?: number;
}

export function DottedMap({ dotRadius = 0.1, gap = 25 }: DottedMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const width = svg.clientWidth;
    const height = svg.clientHeight;

    // Clear existing dots
    const oldDots = svg.querySelectorAll("circle[data-dot='true']");
    oldDots.forEach((dot) => dot.remove());

    // Create dots pattern
    const actualGap = gap;
    for (let x = 0; x < width; x += actualGap) {
      for (let y = 0; y < height; y += actualGap) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", String(x));
        circle.setAttribute("cy", String(y));
        circle.setAttribute("r", String(dotRadius * 100));
        circle.setAttribute("fill", "#26a9b3");
        circle.setAttribute("opacity", "0.2");
        circle.setAttribute("data-dot", "true");
        svg.appendChild(circle);
      }
    }
  }, [dotRadius, gap]);

  return (
    <svg
      ref={svgRef}
      className="h-full w-full"
      viewBox="0 0 1280 720"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="dotted-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafb" stopOpacity="1" />
          <stop offset="100%" stopColor="#f0f4f8" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#dotted-gradient)" />
    </svg>
  );
}
