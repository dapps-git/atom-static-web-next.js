"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface NewsItem {
    id: number;
    date: string;
    category: string;
    title: string;
    imageUrl: string;
}

const newsData: NewsItem[] = [
    {
        id: 1,
        date: "12-05-2025",
        category: "News & Events",
        title: "Cochin University of Science and Technology entrance exam coaching.",
        imageUrl: "/web-img-four.jpeg",
    },
    {
        id: 2,
        date: "12-05-2025",
        category: "News & Events",
        title: "Cochin University of Science and Technology entrance exam coaching.",
        imageUrl: "/web-img-five.jpeg",
    },
];

const NewsSection = () => {
    return (
        <section className="bg-white py-12 px-4 sm:px-6 md:px-8 lg:px-12 font-sans">
            <div className="mx-auto max-w-[1400px]">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-10"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EB1414]/10 rounded-full text-sm font-medium text-[#EB1414] mb-3">
                        <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
                        Events
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-black mt-2">
                        Events & Latest News
                    </h2>
                </motion.div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {newsData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col md:flex-row bg-[#F7F7F7] rounded-sm overflow-hidden border border-transparent hover:border-[#EB1414]/20 transition-all duration-300 group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative w-full md:w-[45%] h-48 md:h-auto overflow-hidden">
                                <img
                                    src={item.imageUrl}
                                    alt="Event"
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content Container */}
                            <div className="flex flex-col justify-center p-6 md:p-8 w-full md:w-[55%]">
                                <span className="text-black font-semibold text-sm mb-2">
                                    {item.date}
                                </span>
                                <h4 className="text-[#EB1414] font-bold text-base mb-3">
                                    {item.category}
                                </h4>
                                <p className="text-gray-800 text-sm leading-relaxed font-medium line-clamp-3">
                                    {item.title}
                                </p>

                                {/* Optional Interactive Element */}
                                <motion.div
                                    className="mt-4 h-1 w-0 bg-[#EB1414] transition-all duration-300 group-hover:w-12"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;