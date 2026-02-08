"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

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

const programs = [
    {
        title: "NEET Coaching Program",
        description: "Our flagship NEET preparation program is designed for students aspiring to become doctors. With experienced faculty, comprehensive study materials, and regular mock tests, we ensure students are fully prepared for the medical entrance exam. Our focused approach helps students master Biology, Physics, and Chemistry with confidence.",
        image: "/web-img-six.jpeg"
    },
    {
        title: "JEE Coaching Program",
        description: "The JEE coaching program at ATOM prepares students for both JEE Main and Advanced. Our curriculum emphasizes conceptual clarity, problem-solving skills, and time management. Students receive personalized attention and learn from the best faculty with proven track records of producing top rankers.",
        image: "/web-img-one.jpeg"
    },
    {
        title: "Foundation Courses",
        description: "Our foundation courses for classes 8-10 build a strong base for future competitive exams. Students develop analytical thinking, scientific reasoning, and mathematical skills early on. This program is ideal for students who want to start their competitive exam journey with a solid foundation.",
        image: "/web-img-eight.jpeg"
    }
];

const AcademicPrograms = () => {
    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EB1414]/10 rounded-full text-sm font-medium text-[#EB1414] mb-4">
                        <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
                        Programs
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Academic Programs
                    </h2>
                    <p className="text-gray-600 max-w-3xl">
                        A complete academic ecosystem built on excellence and strong values. Our programs are designed to help students achieve their academic goals with comprehensive preparation.
                    </p>
                </motion.div>

                {/* Programs List */}
                <div className="space-y-16">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Text Content */}
                            <motion.div
                                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                                transition={{ duration: 0.6 }}
                                className={`order-2 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                            >
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {program.description}
                                </p>
                                <motion.a
                                    href="/contact"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all"
                                >
                                    Apply Now
                                    <ArrowRight className="w-4 h-4" />
                                </motion.a>
                            </motion.div>

                            {/* Image */}
                            <motion.div
                                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                                transition={{ duration: 0.6 }}
                                className={`relative w-full h-[280px] sm:h-[350px] rounded-2xl overflow-hidden shadow-xl order-1 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                                    }`}
                            >
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcademicPrograms;
