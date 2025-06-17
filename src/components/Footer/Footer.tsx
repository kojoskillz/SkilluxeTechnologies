"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className="min-h-screen bg-black w-full flex flex-col justify-between">
      {/* Top Section */}
      <div className="w-full text-center px-4 pt-32 pb-10">
        <p className="font-bold text-2xl md:text-4xl text-white">
          GET IN TOUCH WITH SKILL
          <span className="text-blue-600">
            {"UXE".split("").map((letter, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-md md:text-lg text-white max-w-2xl mx-auto mt-4">
          Ready to bring your digital vision to life? Our expert team is here to help you unleash your
          brand&apos;s full potential and make a lasting impact in the digital world.
        </p>
      </div>

      {/* World Map Section */}
      <div className="w-full flex-1">
        <WorldMap
          dots={[
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
            { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
            { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
          ]}
        />
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-6">
        <div className="text-center px-4">
          <p className="text-sm text-white/60 font-light">
            &copy; {new Date().getFullYear()} Skilluxe. All rights reserved.
          </p>
          <p className="text-xs text-white/30 mt-1">
            Crafted with precision by the Skilluxe team.
          </p>
        </div>
      </footer>
    </div>
  );
}
