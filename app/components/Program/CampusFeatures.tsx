"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, BookOpen, Heart, Globe, Trophy, Users, Lightbulb } from 'lucide-react';

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

const campusFeatures = [
    {
        icon: Target,
        title: "Selecting and nurturing young capable students to be successful in high impact educational streams"
    },
    {
        icon: BookOpen,
        title: "Facilitating quality, personalised and mastery-based intensive Instructional System Design"
    },
    {
        icon: Heart,
        title: "Inculcating value systems derived from strong ethical teachings and the Constitution of India"
    },
    {
        icon: Globe,
        title: "Providing the local, national and global exposure and life skills needed to shape their personal and professional life"
    },
    {
        icon: Trophy,
        title: "Demonstrating consistent achievements at the highest levels through ensuring seats in the Institutes of National Importance (INI) in India & well renowned universities abroad"
    },
    {
        icon: Users,
        title: "Partnering the ATOM Family in the journey ahead in the form of students, teachers, parents, alumni and well-wishers"
    },
    {
        icon: Lightbulb,
        title: "Establishing an ambassadorship-oriented learner-chain base, which is founded on the vision and objectives of the ATOM Foundation"
    }
];

const CampusFeatures = () => {
    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-12"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Our Campus
                    </h2>
                    <p className="text-gray-600 max-w-2xl">
                        Our campuses provide a nurturing environment where students grow, excel, and build strong character.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {campusFeatures.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-5 bg-[#F0F4F8] rounded-xl hover:bg-[#E8ECF0] transition-colors"
                            >
                                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                                    <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {feature.title}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default CampusFeatures;
