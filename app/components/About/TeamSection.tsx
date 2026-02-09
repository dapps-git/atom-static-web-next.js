"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const teamMembers = [
    {
        name: "Deepa T",
        role: "MTech, Director &  Academic Coordinator",
        image: "/atom-web-profile-four.jpeg"
    },
    {
        name: "Jemseera Kallingal",
        role: "MTech, CEO",
        image: "/jamsheera.jpeg"
    },
    {
        name: "Nasar Alukkal",
        role: "Director",
        image: "/atom-web-profile-one.jpeg"
    },
    {
        name: "Thahir Zain",
        role: "Director",
        image: "/atom-web-profile-two.jpeg"
    }
];

const TeamSection = () => {
    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="max-w-2xl mb-12"
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Guiding Minds Behind ATOM
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-600 text-lg"
                    >
                        Our team of educators and leaders combines experience with vision, guiding students toward excellence in a rapidly changing world.
                    </motion.p>
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="group"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-[#EB1414] to-[#c91212]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                />
                            </div>

                            {/* Info */}
                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                                {member.name}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    transition={{ delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 mb-4">
                        Join our team of dedicated educators
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;
