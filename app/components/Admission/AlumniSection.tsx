"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

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

const AlumniSection = () => {
    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInLeft}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            ATOM Alumni Network
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            The ATOM Alumni Network serves as the official community of former students of ATOM Education.
                            Dedicated to uniting former students, the network conducts career-focused programs aimed at
                            fostering professional growth, ethical leadership, and community service. Through these initiatives,
                            the association strengthens the bond among alumni while upholding the institution's mission of
                            meaningful advancement and academic excellence.
                        </p>

                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all"
                        >
                            Become a Member
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </motion.div>

                    {/* Logo/Visual */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInRight}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px]   rounded-2xl flex items-center justify-center">
                            <Image src="/footer-logo.webp" alt="ATOM Logo" width={180} height={180} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AlumniSection;
