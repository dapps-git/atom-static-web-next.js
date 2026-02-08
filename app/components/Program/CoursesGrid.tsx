"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const courses = [
    {
        id: "neet",
        title: "NEET Coaching",
        description: "A comprehensive preparation program for medical entrance with expert faculty and proven results.",
        image: "/about-img.png",
        slug: "neet"
    },
    {
        id: "jee",
        title: "JEE Coaching",
        description: "Intensive coaching for JEE Main & Advanced with focus on conceptual clarity and problem-solving.",
        image: "/about-img.png",
        slug: "jee"
    },
    {
        id: "cuet",
        title: "CUET Preparation",
        description: "Structured training for Central University Entrance Test with comprehensive coverage.",
        image: "/about-img.png",
        slug: "cuet"
    },
    {
        id: "foundation",
        title: "Foundation Course",
        description: "Building strong fundamentals for classes 8-10 preparing students for competitive exams.",
        image: "/about-img.png",
        slug: "foundation"
    },
    {
        id: "keam",
        title: "KEAM Coaching",
        description: "Specialized coaching for Kerala Engineering and Medical entrance examinations.",
        image: "/about-img.png",
        slug: "keam"
    },
    {
        id: "repeaters",
        title: "Repeaters Batch",
        description: "A specialized support program helping students improve scores with personalized guidance.",
        image: "/about-img.png",
        slug: "repeaters"
    }
];

const CoursesGrid = () => {
    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F0F4F8]">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EB1414]/10 rounded-full text-sm font-medium text-[#EB1414] mb-4">
                        <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
                        Courses
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Admission Open For
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose your path: every stream designed to balance academic excellence with strong moral and personal growth.
                    </p>
                </motion.div>

                {/* Courses Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {courses.map((course) => (
                        <motion.div
                            key={course.id}
                            variants={fadeInUp}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                        >
                            {/* Image */}
                            <div className="relative h-[200px] overflow-hidden">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {course.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {course.description}
                                </p>
                                <Link
                                    href={`/programs/${course.slug}`}
                                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-900 text-gray-900 text-sm font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all"
                                >
                                    Apply Now
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CoursesGrid;
