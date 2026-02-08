"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CampusHero() {
    return (
        <section className="relative h-[75vh] min-h-[350px] max-h-[660px] pt-[90px] md:pt-[110px] flex items-end overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/atom-web-img-five.jpeg"
                    alt="ATOM Campus"
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
                        Our Campuses
                    </span>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                    >
                        World-Class Learning Spaces
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl md:text-2xl text-white/90 font-light max-w-2xl"
                    >
                        Experience education in state-of-the-art facilities designed for academic excellence
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
