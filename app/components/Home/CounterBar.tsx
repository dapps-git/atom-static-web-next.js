"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { GraduationCap, Users, UserCheck } from 'lucide-react';

// Counter Component - Smooth counting animation triggered on view
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-50px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const duration = 1200; // 1.2 second animation

        const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Ease out cubic for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(easeOut * value);

            setDisplayValue(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            }
        };

        requestAnimationFrame(animateCount);
    }, [value, isInView]);

    return (
        <div ref={containerRef}>
            <span ref={ref}>{displayValue}+{suffix}</span>
        </div>
    );
};

const StatsBar = () => {
    const [mobileIndex, setMobileIndex] = useState(0);

    const stats = [
        {
            label: "Students Empowered",
            value: 500,
            icon: <GraduationCap size={28} strokeWidth={1.5} />
        },
        {
            label: "Expert Faculty",
            value: 50,
            icon: <UserCheck size={28} strokeWidth={1.5} />
        },
        {
            label: "Success Rate",
            value: 95,
            suffix: "%",
            icon: <Users size={28} strokeWidth={1.5} />
        },
    ];

    // Mobile: Auto-cycle through stats every 1.5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setMobileIndex((prev) => (prev + 1) % stats.length);
        }, 1500);
        return () => clearInterval(timer);
    }, [stats.length]);

    return (
        <section className="bg-[#EB1414] py-4 md:py-6 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* Desktop View - All stats visible */}
                <div className="hidden md:flex items-center justify-around gap-4">
                    {stats.map((stat, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className="flex items-center gap-5 text-white group"
                            >
                                {/* Icon with circular glass effect */}
                                <div className="bg-white/20 p-3.5 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/30">
                                    {stat.icon}
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-2xl lg:text-3xl font-bold tracking-tight">
                                        <Counter value={stat.value} suffix={stat.suffix || ""} />
                                    </span>
                                    <span className="text-sm lg:text-base font-medium opacity-90">
                                        {stat.label}
                                    </span>
                                </div>
                            </motion.div>

                            {/* Vertical Divider */}
                            {index < stats.length - 1 && (
                                <div className="h-14 w-[1px] bg-white/30" />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Mobile View - Single stat with vertical slide animation */}
                <div className="md:hidden relative h-14 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={mobileIndex}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute flex items-center gap-4 text-white"
                        >
                            {/* Icon */}
                            <div className="bg-white/20 p-2.5 rounded-full">
                                {stats[mobileIndex].icon}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight">
                                    {stats[mobileIndex].value}+
                                    {stats[mobileIndex].suffix && stats[mobileIndex].suffix}
                                </span>
                                <span className="text-xs font-medium opacity-90">
                                    {stats[mobileIndex].label}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default StatsBar;