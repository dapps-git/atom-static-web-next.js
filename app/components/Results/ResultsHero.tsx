"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function ResultsHero() {
  return (
    <section className="page-content relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-[#1a0000] text-white">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Red glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#EB1414]/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-[#EB1414]/10 blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-24 flex flex-col items-center text-center gap-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-2xl bg-[#EB1414]/20 border border-[#EB1414]/30 flex items-center justify-center mb-2"
        >
          <Award size={32} className="text-[#EB1414]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          Our <span className="text-[#EB1414]">Results</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          Every score tells a story of dedication. Here's what ATOM students
          achieve when passion meets the right guidance.
        </motion.p>
      </div>
    </section>
  );
}
