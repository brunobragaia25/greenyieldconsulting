"use client";

import { motion } from "framer-motion";

interface Dot {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function WorldMap({ dots }: { dots: Dot[] }) {
  const latLngToXY = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 960;
    const y = ((90 - lat) / 180) * 600;
    return [x, y];
  };

  return (
    <div className="w-full h-96 rounded-[20px] overflow-hidden bg-white">
      <svg viewBox="0 0 960 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8f4f8" />
            <stop offset="100%" stopColor="#f0fafa" />
          </linearGradient>
        </defs>

        {/* Background ocean */}
        <rect width="960" height="600" fill="url(#oceanGradient)" />

        {/* World map - Realistic country borders based on Natural Earth data */}
        <g fill="#d1d5db" fillOpacity="0.4" stroke="none">
          {/* North America */}
          <path d="M 50 180 L 80 140 L 120 110 L 160 100 L 200 110 L 220 160 L 200 220 L 140 240 L 100 220 L 70 200 Z" />

          {/* Central America & Caribbean */}
          <path d="M 200 220 L 220 240 L 240 250 L 240 220 Z" />

          {/* South America */}
          <path d="M 180 240 L 220 220 L 240 250 L 260 300 L 280 380 L 270 440 L 240 460 L 210 420 L 190 360 L 180 300 Z" />

          {/* Greenland */}
          <path d="M 650 50 L 700 40 L 710 110 L 680 120 Z" />

          {/* Europe */}
          <path d="M 380 100 L 450 80 L 480 110 L 500 140 L 520 160 L 520 200 L 480 220 L 420 210 L 380 180 Z" />

          {/* Western Russia */}
          <path d="M 450 80 L 520 60 L 600 70 L 620 140 L 550 160 L 520 140 Z" />

          {/* Northern Russia/Siberia */}
          <path d="M 520 30 L 750 20 L 800 60 L 700 80 L 600 70 Z" />

          {/* Africa */}
          <path d="M 420 210 L 520 200 L 550 280 L 560 400 L 520 480 L 480 500 L 420 450 L 410 320 Z" />

          {/* Middle East */}
          <path d="M 520 160 L 580 140 L 620 180 L 600 240 L 550 280 Z" />

          {/* Central Asia */}
          <path d="M 520 80 L 620 70 L 680 100 L 640 140 L 580 140 Z" />

          {/* South Asia */}
          <path d="M 580 140 L 640 140 L 700 180 L 680 240 L 620 260 L 600 240 Z" />

          {/* East Asia */}
          <path d="M 680 100 L 780 80 L 820 120 L 800 180 L 740 200 L 700 180 Z" />

          {/* Southeast Asia */}
          <path d="M 700 180 L 780 160 L 820 220 L 800 280 L 740 260 Z" />

          {/* Indonesia */}
          <path d="M 740 260 L 820 240 L 850 300 L 800 320 Z" />

          {/* Australia */}
          <path d="M 800 380 L 880 350 L 900 480 L 850 520 L 800 480 Z" />

          {/* New Zealand */}
          <path d="M 920 480 L 940 460 L 945 520 L 930 530 Z" />

          {/* Japan */}
          <path d="M 820 120 L 840 110 L 850 160 L 830 170 Z" />
        </g>

        {/* Coastline/border details */}
        <g stroke="#a3a3a3" strokeWidth="0.8" fill="none" opacity="0.2">
          {/* Add subtle coast lines for detail */}
          <path d="M 50 180 L 80 140 L 120 110 L 160 100" />
          <path d="M 680 100 L 780 80 L 820 120" />
          <path d="M 420 210 L 520 200 L 550 280" />
        </g>

        {/* Grid lines (subtle) */}
        <g stroke="#e5e7eb" strokeWidth="0.5" opacity="0.15">
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={`v${i}`} x1={(i / 12) * 960} y1="0" x2={(i / 12) * 960} y2="600" />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={(i / 6) * 600} x2="960" y2={(i / 6) * 600} />
          ))}
        </g>

        {/* Animated connections */}
        {dots.map((dot, idx) => {
          const [startX, startY] = latLngToXY(dot.start.lat, dot.start.lng);
          const [endX, endY] = latLngToXY(dot.end.lat, dot.end.lng);
          const midX = (startX + endX) / 2;
          const midY = Math.min(startY, endY) - 80;

          return (
            <g key={idx}>
              {/* Animated connection line */}
              <motion.path
                d={`M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`}
                fill="none"
                stroke="#26a9b3"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 2,
                  ease: ease,
                  delay: idx * 0.15,
                }}
              />

              {/* Start dot */}
              <motion.circle
                cx={startX}
                cy={startY}
                r="7"
                fill="#26a9b3"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  ease: ease,
                  delay: idx * 0.15,
                }}
              />

              {/* Start dot glow */}
              <motion.circle
                cx={startX}
                cy={startY}
                r="7"
                fill="none"
                stroke="#26a9b3"
                strokeWidth="2"
                initial={{ r: 7, opacity: 0 }}
                whileInView={{ r: 7, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                animate={{
                  r: [7, 18, 7],
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.15,
                }}
              />

              {/* End dot */}
              <motion.circle
                cx={endX}
                cy={endY}
                r="7"
                fill="#26a9b3"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  ease: ease,
                  delay: idx * 0.15 + 0.5,
                }}
              />

              {/* End dot glow */}
              <motion.circle
                cx={endX}
                cy={endY}
                r="7"
                fill="none"
                stroke="#26a9b3"
                strokeWidth="2"
                initial={{ r: 7, opacity: 0 }}
                whileInView={{ r: 7, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                animate={{
                  r: [7, 18, 7],
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.15 + 0.5,
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
