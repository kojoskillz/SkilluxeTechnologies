"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";
import { PhoneCall } from "lucide-react";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#000000FF" : "#1D1083FF",
    shape: "circle",
    backgroundColor: "black",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="relative w-full aspect-[2/1] bg-black font-sans overflow-hidden">
      {/* World Map */}
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        alt="World Map"
        width={1056}
        height={495}
        className="w-full h-auto pointer-events-none select-none [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
        draggable={false}
      />

      {/* Glassy Overlay */}
      <div className="absolute bottom-0 inset-x-0 z-50 px-6 py-10 lg:px-20 bg-white/5 backdrop-blur-md rounded-t-3xl border-t border-white/10 shadow-2xl">
        <div className="grid lg:grid-cols-3 gap-8 text-white items-center text-center lg:text-left">
          {/* Logo and Title */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/Skilluxelogo3.png"
                width={50}
                height={50}
                alt="Logo"
                className="rounded-full shadow-md"
              />
              <h1 className="text-2xl font-extrabold tracking-wide">
                SKILL<span className="text-blue-500">UXE</span>
              </h1>
            </div>
            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              <strong>Bring your idea to life.</strong> We craft websites,
              e-commerce platforms, mobile apps, and digital growth strategies
              for your success.
            </p>
          </div>

          {/* Animated Slogan */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl lg:text-2xl font-bold uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white"
            >
              JOINTHESKILLUXEREVOLUTION
            </motion.h2>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-lg font-bold">Ready to start?</h3>
            <a
              href="tel:+233541833813"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 text-base font-semibold shadow-lg hover:shadow-xl transition"
            >
              <PhoneCall className="w-5 h-5" /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Animated Lines + Dots */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <motion.path
              key={i}
              d={createCurvedPath(start, end)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 * i }}
            />
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={i}>
            {[dot.start, dot.end].map((point, idx) => {
              const { x, y } = projectPoint(point.lat, point.lng);
              return (
                <g key={`${i}-${idx}`}>
                  <circle cx={x} cy={y} r="2" fill={lineColor} />
                  <circle cx={x} cy={y} r="2" fill={lineColor} opacity="0.5">
                    <animate
                      attributeName="r"
                      from="2"
                      to="8"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}
          </g>
        ))}
      </svg>
    </div>
  );
}
