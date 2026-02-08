"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Heart, Dumbbell } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const features = [
    {
        icon: Target,
        title: "Result-oriented Integrated Batch",
        description: "A structured academic system designed to maximise NEET and JEE performance."
    },
    {
        icon: Heart,
        title: "Value Education",
        description: "Building character, discipline, and life ethics alongside academic excellence."
    },
    {
        icon: Dumbbell,
        title: "Recreational & Well-being Facilities",
        description: "Comprehensive facilities for NEET/JEE Aspirants to maintain balance."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left: Image Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInLeft}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="space-y-4">
                            <div className="relative h-[180px] sm:h-[220px] rounded-2xl overflow-hidden">
                                <Image src="/web-img-three.jpeg" alt="ATOM Classroom" fill className="object-cover" />
                            </div>
                            <div className="relative h-[180px] sm:h-[220px] rounded-2xl overflow-hidden">
                                <Image src="/web-img-one.jpeg" alt="ATOM Students" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="pt-8">
                            <div className="relative h-[280px] sm:h-[380px] rounded-2xl overflow-hidden">
                                <Image src="/atom-web-img-one.jpeg" alt="ATOM Campus" fill className="object-cover" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EB1414]/10 rounded-full text-sm font-medium text-[#EB1414] mb-4"
                        >
                            <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
                            Why Choose Us
                        </motion.span>

                        <motion.h2
                            variants={fadeInUp}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Why ATOM Education Stands Out
                        </motion.h2>

                        <motion.p
                            variants={fadeInUp}
                            className="text-gray-600 mb-8"
                        >
                            It is the only institution in Kerala that brings together a powerful and unmatched combination:
                        </motion.p>

                        {/* Features */}
                        <div className="space-y-5">
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="flex gap-4 p-4 bg-white rounded-xl shadow-sm"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-[#EB1414]/10 rounded-lg flex items-center justify-center">
                                            <IconComponent className="w-5 h-5 text-[#EB1414]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                                            <p className="text-gray-600 text-sm">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.p
                            variants={fadeInUp}
                            className="text-gray-600 mt-6 text-sm italic"
                        >
                            No other institution in Kerala offers all three pillars together.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
