"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";

const AnnouncementBanner = () => {
  const content = "Admission open for 2025-2026 | Limited Availability";

  // We repeat the content to ensure there is no gap during the infinite loop
  const repeatedItems = Array(10).fill(null);

  return (
    <div className="relative w-full overflow-hidden bg-[#EB1414] py-3 md:py-4 border-b border-black/10">
      <motion.div
        className="flex whitespace-nowrap items-center"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeatedItems.map((_, idx) => (
          <div key={idx} className="flex items-center px-4 md:px-8">
            {/* Alternating Icons for visual variety similar to the image */}
            {idx % 2 === 0 ? (
              <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white mr-3 shrink-0" />
            ) : (
              <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-white mr-3 shrink-0" />
            )}
            
            <span className="text-white text-sm md:text-lg font-medium tracking-wide font-sans">
              {content}
            </span>
            
            {/* Divider for separation between repeated strings */}
            <span className="ml-8 md:ml-16 text-white/30">|</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnnouncementBanner;