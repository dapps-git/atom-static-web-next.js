"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Achievement {
  id: number;
  name: string;
  rank: string;
  institution: string;
  testimonial: string;
  image: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    name: "Anaga",
    rank: "AIR 234",
    institution: "AIIMS Delhi",
    testimonial: "The structured approach and dedicated mentorship helped me achieve my dream of getting into AIIMS. The faculty's support was incredible throughout my preparation journey.",
    image: "/slider-img-one.svg"
  },
  {
    id: 2,
    name: "Rahul Kumar",
    rank: "AIR 156",
    institution: "JIPMER",
    testimonial: "ATOM Academy transformed my preparation strategy completely. The personalized attention and expert guidance made all the difference in my NEET journey.",
    image: "/slider-img-two.svg"
  },
  {
    id: 3,
    name: "Priya Singh",
    rank: "AIR 312",
    institution: "AIIMS Jodhpur",
    testimonial: "The comprehensive study material and regular mock tests helped me identify my weak areas. I'm grateful to the entire ATOM team for their unwavering support.",
    image: "/slider-img-three.svg"
  },
];

export default function SuccessStories() {
  const [index, setIndex] = useState(0);

  // Auto-slide effect
  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev === achievements.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Animation variants for content - smooth slide animation
  const contentVariants = {
    enter: {
      opacity: 0,
      y: 30,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -30,
    },
  };

  // Animation variants for image - simple come from bottom
  const imageVariants = {
    enter: {
      opacity: 0,
      y: 40,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  // Fade in animation for section
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
        <motion.p
          {...fadeIn}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB1414] to-[#ff6b6b] font-semibold mb-3 tracking-wider uppercase text-sm"
        >
          Success Stories
        </motion.p>
        <motion.h2
          {...fadeIn}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Our Star Achievers
        </motion.h2>
        <motion.p
          {...fadeIn}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-base md:text-lg"
        >
          Meet the brilliant minds who transformed their dreams into reality.
          Our passout students now serve as doctors across India&apos;s premier medical institutions.
        </motion.p>
      </div>

      <motion.div
        {...fadeIn}
        transition={{ delay: 0.3 }}
        className="max-w-7xl mx-auto relative"
      >
        {/* Main Card Container */}
        <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100/50 overflow-hidden backdrop-blur-sm">
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#EB1414]/10 to-[#ff6b6b]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-purple-500/10 to-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          {/* Desktop Layout: 30% Image | 70% Content */}
          <div className="hidden md:flex flex-row items-stretch min-h-[450px] relative z-10">
            {/* Image Section - 30% - ANIMATED from bottom */}
            <div className="w-[30%] relative flex justify-center items-end bg-gradient-to-t from-gray-100/50 to-transparent overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-full min-h-[300px] max-h-[400px]"
                >
                  <Image
                    src={achievements[index].image}
                    alt={achievements[index].name}
                    fill
                    className="object-contain object-bottom drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Section - 70% - ANIMATED */}
            <div className="w-[70%] p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-[#EB1414]/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-700 text-xl lg:text-2xl leading-relaxed mb-8 font-light">
                    {achievements[index].testimonial}
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-gradient-to-r from-[#EB1414] to-[#ff6b6b] rounded-full mb-6" />

                  {/* Name & Details */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {achievements[index].name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="px-4 py-1.5 bg-gradient-to-r from-[#EB1414] to-[#ff6b6b] text-white text-sm font-bold rounded-full shadow-lg shadow-red-500/25">
                        {achievements[index].rank}
                      </span>
                      <span className="text-gray-600 font-medium">
                        {achievements[index].institution}
                      </span>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-10 flex items-center gap-2">
                    {achievements.map((_, i) => (
                      <motion.div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-500 ${i === index
                          ? 'w-8 bg-gradient-to-r from-[#EB1414] to-[#ff6b6b]'
                          : 'w-2 bg-gray-200'
                          }`}
                        animate={{
                          scale: i === index ? 1 : 0.8,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Layout: Content on Top | Image at Bottom */}
          <div className="flex md:hidden flex-col min-h-[550px] relative z-10">
            {/* Content Section - Top - ANIMATED */}
            <div className="p-6 pb-4 flex flex-col relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-[#EB1414]/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-700 text-base leading-relaxed mb-5 font-light">
                    {achievements[index].testimonial}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#EB1414] to-[#ff6b6b] rounded-full mb-4" />

                  {/* Name & Details */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {achievements[index].name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-[#EB1414] to-[#ff6b6b] text-white text-xs font-bold rounded-full shadow-lg shadow-red-500/25">
                        {achievements[index].rank}
                      </span>
                      <span className="text-gray-600 text-sm font-medium">
                        {achievements[index].institution}
                      </span>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    {achievements.map((_, i) => (
                      <motion.div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-500 ${i === index
                          ? 'w-6 bg-gradient-to-r from-[#EB1414] to-[#ff6b6b]'
                          : 'w-1.5 bg-gray-200'
                          }`}
                        animate={{
                          scale: i === index ? 1 : 0.8,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image Section - Bottom - ANIMATED from bottom */}
            <div className="relative flex-1 flex justify-center items-end bg-gradient-to-t from-gray-100/80 to-transparent overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-[250px]"
                >
                  <Image
                    src={achievements[index].image}
                    alt={achievements[index].name}
                    fill
                    className="object-contain object-bottom drop-shadow-xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}