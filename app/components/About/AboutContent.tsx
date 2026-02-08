"use client";

import React from 'react';
import { motion } from 'framer-motion';
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

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const AboutContent = () => {
    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
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
                        About Us
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
                >
                    About ATOM
                </motion.h2>

                {/* About Text */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg max-w-4xl mb-16"
                >
                    <motion.p variants={fadeInUp}>
                        Founded with a clear vision to provide quality education that nurtures both the mind and academic excellence, <span className="font-semibold text-[#EB1414]">ATOM – Inspiration of Science</span> has grown into one of Kerala's most respected entrance coaching institutes, known for academic excellence and proven results.
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                        At ATOM, learning goes beyond textbooks. We prepare students for <span className="font-semibold">NEET, JEE, CUET, CUSAT, KEAM, and IISER</span> while building strong fundamentals and clear concepts. Over the years, our commitment to holistic education has helped countless students secure seats in India's top institutions and renowned universities.
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                        Every milestone in our journey reflects a single promise: to raise a generation of students who are intellectually strong, confident, and ready to make a positive difference in the world.
                    </motion.p>
                </motion.div>

                {/* Vision & Mission Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInLeft}
                        transition={{ duration: 0.6 }}
                        className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
                    >
                        <Image
                            src="/web-img-five.jpeg"
                            alt="ATOM Students"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Vision & Mission Text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="space-y-6 order-1 lg:order-2"
                    >
                        <motion.h3
                            variants={fadeInUp}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900"
                        >
                            Vision & Mission
                        </motion.h3>

                        <motion.div variants={fadeInUp} className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                At ATOM Education, our mission is to provide quality coaching that nurtures both academic excellence and personal growth. We prepare students for NEET, JEE, and other competitive exams with a focus on building strong fundamentals and clear concepts.
                            </p>
                            <p>
                                Our commitment to holistic education has helped countless students secure seats in India's top institutions and renowned universities, shaping confident individuals who lead with integrity and knowledge.
                            </p>
                            <p>
                                We aim to develop disciplined, confident individuals who succeed in high-impact educational streams while staying rooted in strong values. By offering comprehensive preparation and personalized attention, we prepare students to thrive in an ever-changing world.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutContent;
