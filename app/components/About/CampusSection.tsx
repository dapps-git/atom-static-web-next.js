"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';

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

const campuses = [
    {
        name: "ATOM Valanchery Campus",
        location: "KPM Arcade, 2nd Floor, Calicut Road, Valanchery, Kerala",
        image: "/web-img-one.jpeg",
        isMain: true
    }
];

const CampusSection = () => {
    const [activeCampus, setActiveCampus] = useState(0);

    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]">
            <div className="max-w-[1400px] mx-auto">
                {/* Badge */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EB1414]/10 rounded-full text-sm font-medium text-[#EB1414]">
                        <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
                        Our Campus
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                >
                    Our Campus
                </motion.h2>

                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-gray-600 text-lg max-w-2xl mb-12"
                >
                    Our campus provides a nurturing environment where students grow, excel, and build a strong academic foundation.
                </motion.p>

                {/* Campus Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInLeft}
                        transition={{ duration: 0.6 }}
                        className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl group"
                    >
                        <Image
                            src={campuses[activeCampus].image}
                            alt={campuses[activeCampus].name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Location pin */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 p-3 bg-white rounded-full shadow-lg">
                            <MapPin className="w-5 h-5 text-[#EB1414]" />
                        </div>
                    </motion.div>

                    {/* Campus Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInRight}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Campus List */}
                        <div className="space-y-3">
                            {campuses.map((campus, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveCampus(index)}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left ${activeCampus === index
                                            ? 'bg-white border-[#EB1414] shadow-md'
                                            : 'bg-white/50 border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <span className={`font-semibold ${activeCampus === index ? 'text-gray-900' : 'text-gray-600'}`}>
                                        {campus.name}
                                    </span>
                                    {activeCampus === index && (
                                        <div className="p-2 bg-[#EB1414] rounded-full">
                                            <ArrowRight className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Info Box */}
                        <div className="pt-6 border-t border-gray-200">
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                Quality Education, Wherever You Are
                            </h4>
                            <p className="text-gray-600 mb-6">
                                ATOM Education brings world-class coaching closer to you. Our campus is designed to nurture minds, build confidence, and inspire excellence.
                            </p>
                            <motion.a
                                href="/campus"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB1414] text-white font-semibold rounded-lg hover:bg-[#c91212] transition-colors"
                            >
                                Explore Our Campus
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CampusSection;
