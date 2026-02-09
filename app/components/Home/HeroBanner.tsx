"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, GraduationCap, Trophy, Users, ChevronRight } from 'lucide-react';

const backgroundImages = [
    '/web-img-three.jpeg',
    '/atom-web-img-three.jpeg',
    '/atom-web-img-five.jpeg',
]; 

const HeroBanner = () => {
    const [index, setIndex] = useState(0);

    // Auto-slide every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full min-h-[500px] home-banner pt-[90px] md:pt-[100px]  flex items-end md:items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        >
            {/* Background Image Slider - Simple slide transition */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={index}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{
                            duration: 0.8,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={backgroundImages[index]}
                            alt="Campus background"
                            fill
                            priority
                            className="object-cover"
                        />
                        {/* Gradient Overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/4 -right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-[#EB1414]/20 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1/4 -left-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-blue-500/10 blur-3xl"
                />
            </div>

            {/* Content Container */}
            <div className="w-full relative z-10 px-4 mx-auto sm:px-6 md:px-8 lg:px-12  max-w-[1400px] pb-16 md:pb-0">
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-3xl xl:max-w-4xl">

                    

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] text-white tracking-tight"
                    >
                        Build Your Future
                        <br className="hidden xs:block" />
                        <span className="xs:hidden"> </span>
                        With{' '}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-[#EB1414] to-[#ff4d4d] bg-clip-text text-transparent">
                                Atom Institute
                            </span>
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute -bottom-0.5 sm:-bottom-1 md:-bottom-2 left-0 h-0.5 sm:h-1 md:h-1.5 bg-gradient-to-r from-[#EB1414] to-[#ff4d4d] rounded-full"
                            />
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-200/90 max-w-lg lg:max-w-xl leading-relaxed font-light"
                    >
                        Get the best chance to crack NEET, JEE, CUET, CUSAT, KEAM & IISER
                        with Integrated Science and our expert faculty, comprehensive study materials.
                    </motion.p>


                    {/* CTA Buttons - Always in row */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-row gap-2 sm:gap-3 md:gap-4 mt-1 sm:mt-2"
                    >
                        {/* Enroll Button */}
                        {/* <motion.button
                            whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(235, 20, 20, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative flex-1 sm:flex-none px-4 sm:px-6   py-2.5    text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white rounded-lg sm:rounded-xl bg-gradient-to-r from-[#EB1414] to-[#d11212] shadow-lg shadow-red-500/25 overflow-hidden transition-all"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                                Enroll Now
                                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#d11212] to-[#EB1414] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button> */}

                        {/* Watch Video Button */}
                        {/* <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex-1 sm:flex-none px-4 sm:px-6  py-2.5   text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all flex items-center justify-center gap-1.5 sm:gap-2"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="p-0.5 sm:p-1 rounded-full bg-white/20"
                            >
                                <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 fill-white" />
                            </motion.div>
                            <span className="hidden xs:inline">Watch</span> Video
                        </motion.button> */}
                    </motion.div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 sm:gap-2">
                {backgroundImages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1 sm:h-1.5 md:h-2 rounded-full transition-all duration-300 ${i === index
                            ? 'w-6 sm:w-8 md:w-10 bg-[#EB1414]'
                            : 'w-1 sm:w-1.5 md:w-2 bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </motion.section>
    );
};

export default HeroBanner;