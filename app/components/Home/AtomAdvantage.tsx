"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Target,
    BookOpen,
    Clock,
    ClipboardCheck,
    Headphones,
    UsersRound,
    Award
} from 'lucide-react';

const AtomAdvantage = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const features = [
        {
            title: "Expert Faculty",
            desc: "Learn from experienced educators who have helped thousands of students succeed.",
            icon: <Users size={20} className="text-white" />,
        },
        {
            title: "Focused Preparation",
            desc: "Strategic approach targeting key topics and exam patterns for maximum results.",
            icon: <Target size={20} className="text-white" />,
        },
        {
            title: "Comprehensive Materials",
            desc: "Detailed study materials, notes, and resources covering the entire syllabus.",
            icon: <BookOpen size={20} className="text-white" />,
        },
        {
            title: "Flexible Timing",
            desc: "Choose from multiple batches that fit your schedule and learning pace.",
            icon: <Clock size={20} className="text-white" />,
        },
        {
            title: "Regular Mock Tests",
            desc: "Frequent practice tests simulating real exam conditions to track your progress.",
            icon: <ClipboardCheck size={20} className="text-white" />,
        },
        {
            title: "Personal Guidance",
            desc: "Dedicated doubt-clearing sessions and one-on-one mentoring for every student.",
            icon: <Headphones size={20} className="text-white" />,
        },
       
    ];

    return (
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 md:py-24 bg-white">
            <motion.div
                className="max-w-[1400px] mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Header Section */}
                <div className="mb-12">
                    <p className="text-gray-700 text-lg font-medium mb-4">Why Choose Us</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 tracking-tight">
                        The <span className="uppercase">ATOM</span> Advantage
                    </h2>

                    <div className="space-y-6 max-w-5xl">
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            At ATOM Education, we believe in providing more than just coaching. Our holistic approach combines
                            expert teaching, comprehensive learning resources, and personalized attention to ensure every
                            student receives the guidance they need to succeed. We focus on building strong conceptual
                            foundations while nurturing critical thinking, problem-solving skills, and exam confidence.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                            Our experienced faculty adopt structured teaching methodologies, regular assessments, and focused
                            revision strategies to track progress and address individual learning needs. With well-designed study
                            materials, frequent mock tests, and dedicated doubt-clearing sessions, ATOM Education creates a
                            supportive and motivating environment where students are inspired to perform at their best and
                            achieve their academic goals.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-4 group"
                        >
                            {/* Icon Circle */}
                            <div className="flex-shrink-0 mt-1">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-md"
                                    style={{ backgroundColor: '#EB1414' }}
                                >
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="text-lg font-bold text-black mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default AtomAdvantage;