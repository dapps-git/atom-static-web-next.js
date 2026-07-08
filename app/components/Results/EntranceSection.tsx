"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { entranceStudents } from "@/app/data/resultsData";

const FEATURED_NAME = "NITHIN RAJ (JEE)";

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

  // Separate featured student and sort the rest as usual
  const featured = entranceStudents.find((s) => s.name === FEATURED_NAME)!;
  const rest = entranceStudents.filter((s) => s.name !== FEATURED_NAME);

  // Build display list: featured first, then the rest
  const allStudents = [featured, ...rest];

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

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-x-2 gap-y-6 sm:gap-x-3 sm:gap-y-8"
        >
          {allStudents.map((student) => {
            const isJEE = student.name === FEATURED_NAME;

            return (
              <motion.div
                key={student.name}
                variants={itemVariants}
                className="group flex flex-col items-center"
              >
                {/* Photo Wrapper (forces same size for all cells, aligning the text below) */}
                <div className="relative w-full aspect-square mb-2.5">
                  {/* Photo Container */}
                  <div className={`overflow-hidden bg-gray-100 shadow-sm transition-all duration-300 ${
                    isJEE 
                      ? "relative w-full h-full shadow-md border border-[#EB1414]/25" 
                      : "absolute bottom-0 left-[8%] w-[84%] h-[84%] group-hover:shadow-md"
                  }`}>
                    <Image
                      src={student.photo}
                      alt={student.name}
                      fill
                      sizes="(max-width: 640px) 25vw, (max-width: 1024px) 17vw, 12vw"
                      className={`object-cover ${isJEE ? "object-center" : "object-top"} transition-transform duration-500 group-hover:scale-[1.06]`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {isJEE && (
                      <>
                        {/* Gradient overlay at bottom */}
                        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                        {/* JEE label on photo */}
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                          <span className="bg-[#EB1414] text-white text-[8px] sm:text-[9px] font-bold px-2 py-0.5 uppercase tracking-widest">
                            JEE
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Fixed-height name block */}
                <div className="w-full flex justify-center" style={{ minHeight: "2.4rem" }}>
                  <p className={`text-center leading-snug uppercase tracking-wider ${
                    isJEE ? "text-[11px] sm:text-[12px] font-bold text-gray-900" : "text-[10px] sm:text-[11px] font-semibold text-gray-700"
                  }`}>
                    {student.name.replace(" (JEE)", "")}
                  </p>
                </div>

                {/* Percentage */}
                <p className={`text-[#EB1414] font-bold mt-0.5 tabular-nums ${
                  isJEE ? "text-[12px] sm:text-[13px]" : "text-[11px] sm:text-[12px] font-semibold"
                }`}>
                  {student.percentage.toFixed(2)}%
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
