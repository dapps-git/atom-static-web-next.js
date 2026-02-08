"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';

const AboutSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // Animation variants
    const fadeInLeft: Variants = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    const fadeInRight: Variants = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    return (
        <section
            ref={sectionRef}
            className="py-12 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Text Content */}
                <motion.div
                    className="w-full lg:w-1/2 order-1 lg:order-1"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInLeft}
                >
                    <motion.div
                        className="space-y-6"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.div className="space-y-2" variants={fadeInUp}>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EB1414]/10 rounded-full text-sm font-medium text-[#EB1414]">
                                <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
                                About Us
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                                Who We Are
                            </h2>
                        </motion.div>

                        <motion.div
                            className="space-y-4 text-gray-700 leading-relaxed text-base md:text-[17px]"
                            variants={fadeInUp}
                        >
                            <p>
                                ATOM – Inspiration of Science is a leading entrance coaching
                                institute committed to shaping the academic success of
                                aspiring students preparing for competitive examinations such
                                as <span className="font-semibold">NEET, JEE, CUET, CUSAT, KEAM, and IISER</span>. We believe that
                                strong fundamentals and clear concepts are the foundation of
                                excellence, and our programs are carefully designed to help
                                students master core subjects with confidence and clarity.
                            </p>

                            <p>
                                With experienced faculty, focused preparation strategies,
                                comprehensive study materials, regular mock tests, and
                                dedicated doubt-clearing sessions, ATOM provides a
                                supportive and motivating learning environment. Our goal is to
                                inspire students to reach their full potential, build self-
                                confidence, and achieve outstanding results in their academic
                                journey.
                            </p>
                        </motion.div>

                        <motion.div className="pt-4" variants={fadeInUp}>
                            <motion.button
                                className="bg-[#EB1414] text-white px-8 py-3 rounded-md font-semibold text-sm transition-all duration-300 hover:bg-[#c91212] hover:shadow-lg active:scale-95 transform"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                About Us
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="w-full lg:w-1/2 order-2 lg:order-2 group"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInRight}
                >
                    <motion.div
                        className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                    >
                        <img
                            src="/web-img-three.jpeg"
                            alt="ATOM Institute Campus"
                            className="object-cover w-full h-full"
                        />
                        {/* Subtle Overlay Animation */}
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutSection;