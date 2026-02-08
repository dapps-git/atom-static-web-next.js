"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, BookOpen, Users, Shield, Coffee, Home, FlaskConical, Laptop } from 'lucide-react';

const facilities = [
    {
        icon: Laptop,
        title: "Smart Classrooms",
        description: "Technology-enabled learning with projectors and digital boards"
    },
    {
        icon: FlaskConical,
        title: "Science Labs",
        description: "Well-equipped Physics, Chemistry, and Biology laboratories"
    },
    {
        icon: BookOpen,
        title: "Library",
        description: "Extensive collection of books, journals, and study materials"
    },
    {
        icon: Users,
        title: "Expert Faculty",
        description: "Experienced teachers with proven track records"
    },
    {
        icon: Home,
        title: "Hostel Facility",
        description: "Safe and comfortable residential options for students"
    },
    {
        icon: Wifi,
        title: "Wi-Fi Campus",
        description: "High-speed internet connectivity throughout the campus"
    },
    {
        icon: Coffee,
        title: "Cafeteria",
        description: "Healthy and hygienic food options for students"
    },
    {
        icon: Shield,
        title: "24/7 Security",
        description: "Round-the-clock security with CCTV surveillance"
    }
];

export default function CampusFacilities() {
    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EB1414]/10 rounded-full text-sm font-medium text-[#EB1414] mb-4">
                        <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
                        Facilities
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Campus Facilities
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        State-of-the-art infrastructure designed to provide the best learning environment
                    </p>
                </motion.div>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={facility.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#EB1414]/10 flex items-center justify-center mb-4">
                                <facility.icon className="w-6 h-6 text-[#EB1414]" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {facility.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {facility.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
