"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
    image: string;
    title: string;
    description: string;
    slug: string;
    index: number;
}

const courses: CourseCardProps[] = [
    {
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
        title: "NEET",
        description: "Comprehensive medical entrance preparation with expert faculty and rigorous practice.",
        slug: "neet",
        index: 0
    },
    {
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
        title: "JEE",
        description: "Master physics, chemistry & mathematics for IIT-JEE Main & Advanced.",
        slug: "jee",
        index: 1
    },
    {
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop",
        title: "CUET",
        description: "Central University Entrance Test preparation for diverse undergraduate programs.",
        slug: "cuet",
        index: 2
    },
    {
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
        title: "CUSAT",
        description: "Cochin University of Science and Technology entrance exam coaching.",
        slug: "cusat",
        index: 3
    },
    {
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop",
        title: "KEAM",
        description: "Kerala Engineering Architecture Medical entrance test preparation.",
        slug: "keam",
        index: 4
    },
    {
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
        title: "IISER",
        description: "Indian Institutes of Science Education and Research aptitude test coaching.",
        slug: "iiser",
        index: 5
    }
];

const CourseCard = ({ image, title, description, slug, index }: CourseCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-[#F8F9FA] rounded-md overflow-hidden flex flex-col items-center p-6 text-center shadow-sm border border-gray-100"
        >
            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-sm">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                {title}
            </h3>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-8 flex-grow">
                {description}
            </p>

            <Link href={`/programs/${slug}`}>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#EB1414] text-white px-6 py-2.5 rounded-md flex items-center justify-center gap-2 font-medium transition-colors hover:bg-[#c91212] w-fit"
                >
                    Learn More <ArrowRight size={18} />
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default function ProgramSection() {
    return (
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EB1414]/10 rounded-full text-sm font-medium text-[#EB1414] mb-4">
                        <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
                        Our Program
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Preparing You For Success
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto leading-snug">
                        Choose from our comprehensive range of entrance exam preparation
                        courses designed to help you achieve your academic goals.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {courses.map((course) => (
                        <CourseCard key={course.title} {...course} />
                    ))}
                </div>
            </div>
        </section>
    );
}