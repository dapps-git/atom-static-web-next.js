"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const facilities = [
  {
    title: "Reading Area",
    image: "/atom-web-img-two.jpeg",
    alt: "Modern reading lounge with modular seating"
  },
  {
    title: "Science & Computer Labs",
    image: "/about-img.png",
    alt: "Students working on laptops in a lab"
  },
  {
    title: "Library Area",
    image: "/atom-web-img-four.jpeg",
    alt: "Extensive library with wooden shelving"
  }
];

const FacilitiesSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white font-sans overflow-hidden">
      <motion.div
        className="max-w-[1400px] mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EB1414]/10 rounded-full text-sm font-medium text-[#EB1414] mb-4">
          <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
          Facilities
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-tight">
          An Environment That Nurtures Learning
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed mb-16">
          Thoughtfully designed learning spaces with modern infrastructure create an
          environment that inspires focus, confidence, and academic excellence.
        </p>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-xl mb-6 shadow-sm ring-1 ring-gray-200">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Accent border on hover using your specific red #EB1414 */}
                <div className="absolute inset-0 border-0 group-hover:border-4 transition-all duration-300 pointer-events-none rounded-xl" style={{ borderColor: '#EB1414' }}></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#EB1414] transition-colors duration-300">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FacilitiesSection;