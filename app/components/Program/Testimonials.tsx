"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const testimonials = [
    {
        id: 1,
        name: "Parent of NEET Topper",
        role: "Parent",
        content: "Our child's high marks in the NEET exam secured admission to a top Medical College. We are profoundly grateful to ATOM Education for providing the focused guidance and environment needed to achieve this great success.",
        videoThumbnail: "/atom-web-img-two.jpeg"
    },
    {
        id: 2,
        name: "Parent of JEE Qualifier",
        role: "Parent",
        content: "We credit our child's excellent JEE score to the dedicated teachers and strong academics at ATOM. More importantly, we are grateful for the excellent value education and secure environment that ATOM provided.",
        videoThumbnail: "/atom-web-img-four.jpeg"
    },
    {
        id: 3,
        name: "NEET 2024 Topper",
        role: "Student",
        content: "The structured approach and personalized attention at ATOM helped me crack NEET with a top score. The faculty's dedication and the competitive environment pushed me to excel.",
        videoThumbnail: "/about-img.png"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
                >
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EB1414]/10 rounded-full text-sm font-medium text-[#EB1414] mb-4">
                            <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
                            Real Results
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                            What Our Families Say
                        </h2>
                        <p className="text-gray-600 max-w-xl">
                            Stories from our parents and students highlight how we nurture growth, confidence, and lifelong values.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                {/* Testimonials Slider */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence mode="wait">
                        {[0, 1].map((offset) => {
                            const index = (currentIndex + offset) % testimonials.length;
                            const testimonial = testimonials[index];
                            return (
                                <motion.div
                                    key={`${testimonial.id}-${offset}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3, delay: offset * 0.1 }}
                                    className="bg-[#F8F9FA] rounded-2xl p-6 flex flex-col sm:flex-row gap-6"
                                >
                                    {/* Testimonial Image */}
                                    <div className="relative w-full sm:w-[200px] h-[200px] sm:h-auto flex-shrink-0 rounded-xl overflow-hidden bg-gray-200">
                                        <img
                                            src={testimonial.videoThumbnail}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <Quote className="w-8 h-8 text-[#EB1414]/20 mb-3" />
                                            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                                {testimonial.content}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">{testimonial.name}</p>
                                            <p className="text-sm text-[#EB1414]">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
