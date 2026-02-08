"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CourseData } from '@/app/data/courseData';

interface CourseHeroProps {
    course: CourseData;
}

export default function CourseHero({ course }: CourseHeroProps) {
    return (
        <section className="relative h-[75vh] min-h-[350px] max-h-[660px] pt-[90px] md:pt-[110px] flex items-end overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={course.heroImage}
                    alt={course.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 pb-12 pt-28 text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
                        <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
                        {course.title} Coaching
                    </span>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                    >
                        {course.fullTitle}
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl md:text-2xl text-white/90 font-light"
                    >
                        {course.tagline}
                    </motion.p>

                    {/* Quick Info Cards - Column on mobile, row on desktop */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col md:flex-row gap-3 md:gap-4 mt-8"
                    >
                        {/* Duration Card */}
                        <div className="bg-white/15 backdrop-blur-md px-5 md:px-6 py-3 md:py-4 rounded-xl border border-white/20">
                            <span className="text-white/70 text-xs md:text-sm uppercase tracking-wider block mb-1">Duration</span>
                            <p className="text-white font-bold text-sm md:text-base">{course.duration}</p>
                        </div>
                        {/* Eligibility Card */}
                        <div className="bg-white/15 backdrop-blur-md px-5 md:px-6 py-3 md:py-4 rounded-xl border border-white/20">
                            <span className="text-white/70 text-xs md:text-sm uppercase tracking-wider block mb-1">Eligibility</span>
                            <p className="text-white font-bold text-sm md:text-base">{course.eligibility}</p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

        </section>
    );
}
