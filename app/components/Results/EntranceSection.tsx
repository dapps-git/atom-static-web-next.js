"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { entranceStudents } from "@/app/data/resultsData";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function EntranceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="pt-14 pb-16 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
        >
          <div>
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#EB1414] mb-1.5">
              Top Performers
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Entrance Results
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-medium">
            {entranceStudents.length} students · Ranked by percentile
          </p>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-10" />

        {/* Grid — 4 cols mobile, scales up */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-x-4 gap-y-8 sm:gap-x-5 sm:gap-y-10"
        >
          {entranceStudents.map((student) => (
            <motion.div
              key={student.name}
              variants={itemVariants}
              className="group flex flex-col items-center"
            >
              {/* Photo */}
              <div className="relative w-full aspect-square overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow duration-300 mb-2.5">
                <Image
                  src={student.photo}
                  alt={student.name}
                  fill
                  sizes="(max-width: 640px) 25vw, (max-width: 1024px) 17vw, 12vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
                />
                {/* Subtle shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>

              {/* Fixed height name block */}
              <div className="w-full flex justify-center" style={{ minHeight: "2.4rem" }}>
                <p className="text-center text-[10px] sm:text-[11px] font-semibold text-gray-700 leading-snug uppercase tracking-wider">
                  {student.name}
                </p>
              </div>

              {/* Percentage */}
              <p className="text-[11px] sm:text-[12px] text-[#EB1414] font-semibold mt-0.5 tabular-nums">
                {student.percentage.toFixed(2)}%
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
