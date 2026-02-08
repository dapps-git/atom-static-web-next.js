"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutHero = () => {
    return (
        <section className="relative w-full h-[75vh] min-h-[350px] max-h-[660px] overflow-hidden pt-[90px] md:pt-[110px]">
            {/* Background Image */}
            <Image
                src="/web-img-eight.jpeg"
                alt="ATOM Education"
                fill
                priority
                className="object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-[1400px] mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block px-4 py-1.5 bg-[#EB1414]/20 backdrop-blur-sm rounded-full border border-[#EB1414]/30 text-sm font-medium text-white mb-4"
                        >
                            About Us
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-xl"
                        >
                            Where Science Shapes the{' '}
                            <span className="text-[#EB1414]">Future</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="mt-4 text-gray-200 text-base md:text-lg max-w-lg"
                        >
                            Inspiring excellence in NEET, JEE, and competitive exam preparation
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
