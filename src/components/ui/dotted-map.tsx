"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export interface Marker {
  lat: number;
  lng: number;
  size?: number;
  pulse?: boolean;
}

interface DottedMapProps {
  markers: Marker[];
  pulse?: boolean;
}

export function DottedMap({ markers, pulse = true }: DottedMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const latLngToXY = (lat: number, lng: number, width: number, height: number) => {
    const x = ((lng + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return [x, y];
  };

  const generateDots = (width: number, height: number) => {
    const dots = [];
    const spacing = 25;
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        dots.push({ x, y });
      }
    }
    return dots;
  };

  const dots = generateDots(1000, 600);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden bg-white">
      <svg
        ref={svgRef}
        viewBox="0 0 1000 600"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#26a9b3" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#26a9b3" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafb" />
            <stop offset="100%" stopColor="#f0f4f8" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="1000" height="600" fill="url(#mapGradient)" />

        {/* Dots grid */}
        <g opacity="0.5">
          {dots.map((dot, i) => (
            <circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              r="1.5"
              fill="#26a9b3"
              opacity="0.2"
            />
          ))}
        </g>

        {/* Markers with animation */}
        {markers.map((marker, idx) => {
          const [x, y] = latLngToXY(marker.lat, marker.lng, 1000, 600);
          const markerSize = (marker.size ?? 0.3) * 8;

          return (
            <g key={idx}>
              {/* Outer pulse ring */}
              {pulse && (
                <motion.circle
                  cx={x}
                  cy={y}
                  r={markerSize}
                  fill="none"
                  stroke="#26a9b3"
                  strokeWidth="1.5"
                  initial={{ r: markerSize, opacity: 1 }}
                  animate={{
                    r: [markerSize, markerSize * 3, markerSize * 4],
                    opacity: [1, 0.5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}

              {/* Middle ring */}
              <motion.circle
                cx={x}
                cy={y}
                r={markerSize * 1.8}
                fill="none"
                stroke="#26a9b3"
                strokeWidth="1"
                opacity="0.3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              />

              {/* Center dot */}
              <motion.circle
                cx={x}
                cy={y}
                r={markerSize}
                fill="#26a9b3"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.1,
                }}
              />

              {/* Glow effect */}
              <circle
                cx={x}
                cy={y}
                r={markerSize * 2.5}
                fill="url(#dotGradient)"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
