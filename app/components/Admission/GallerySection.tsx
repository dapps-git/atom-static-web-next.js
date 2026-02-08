"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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

const tabs = ["Campus", "Programs"];

const campusImages = [
    { src: "/web-img-one.jpeg", alt: "Campus Life 1" },
    { src: "/web-img-two.jpeg", alt: "Campus Life 2" },
    { src: "/web-img-three.jpeg", alt: "Campus Life 3" },
    { src: "/web-img-four.jpeg", alt: "Campus Life 4" },
    { src: "/web-img-five.jpeg", alt: "Campus Life 5" },
    { src: "/web-img-six.jpeg", alt: "Campus Life 6" }
];

const programImages = [
    { src: "/web-img-one.jpeg", alt: "Program 1" },
    { src: "/web-img-two.jpeg", alt: "Program 2" },
    { src: "/web-img-three.jpeg", alt: "Program 3" },
    { src: "/web-img-four.jpeg", alt: "Program 4" },
    { src: "/web-img-five.jpeg", alt: "Program 5" },
    { src: "/web-img-six.jpeg", alt: "Program 6" }
];

const GallerySection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const images = activeTab === 0 ? campusImages : programImages;

    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-10"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EB1414]/10 rounded-full text-sm font-medium text-[#EB1414] mb-4">
                        <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
                        Gallery
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                        Life at ATOM
                    </h2>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex justify-center gap-2 mb-10"
                >
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${activeTab === index
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
                    >
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className={`relative rounded-xl overflow-hidden shadow-md group cursor-pointer ${index === 0 ? 'col-span-2 row-span-2 h-[250px] sm:h-[350px] md:h-[400px]' : 'h-[150px] sm:h-[180px] md:h-[195px]'
                                    }`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default GallerySection;
