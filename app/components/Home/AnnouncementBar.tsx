"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";

const announcements = [
  {
    text: "Admission Open for 2025–2026 · Limited Seats Available",
    icon: GraduationCap,
  },
  {
    text: "Coaching for NEET · JEE · KEAM · CUET",
    icon: BookOpen,
  },
  {
    text: "Expert Faculty with Integrated Science Program",
    icon: GraduationCap,
  },
  {
    text: "Scholarship Support & Personalized Mentorship",
    icon: BookOpen,
  },
];

// Repeat the full announcement list to ensure smooth looping
const repeatCount = 4;

const AnnouncementBanner = () => {
  const repeatedAnnouncements = Array(repeatCount)
    .fill(announcements)
    .flat();

  return (
    <div className="relative w-full overflow-hidden bg-[#EB1414] py-3 md:py-4 border-b border-black/10">
      <motion.div
        className="flex whitespace-nowrap items-center"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeatedAnnouncements.map((item, idx) => {
          const Icon = item.icon;

          return (
            <div key={idx} className="flex items-center px-4 md:px-8">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-white mr-3 shrink-0" />

              <span className="text-white text-sm md:text-lg font-medium tracking-wide">
                {item.text}
              </span>

              <span className="ml-8 md:ml-16 text-white/30">|</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AnnouncementBanner;
