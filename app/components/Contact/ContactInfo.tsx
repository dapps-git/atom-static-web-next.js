"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactInfo = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="bg-black py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
            <motion.div
                className="max-w-[1400px] mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white italic leading-snug max-w-md">
                        We are always happy to assist you
                    </h2>
                </motion.div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                    {/* Email Address */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-white font-semibold text-sm tracking-wide uppercase">
                            Email Address
                        </h3>
                        <div className="space-y-3">
                            <a
                                href="mailto:atomeducation25@gmail.com"
                                className="block text-[#EB1414] hover:text-white transition-colors font-medium"
                            >
                                atomeducation25@gmail.com
                            </a>
                            <div className="text-gray-400 text-sm">
                                <p className="font-medium text-white/80">Assistance hours:</p>
                                <p>Monday - Friday 9 am to 6 pm</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Number */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-white font-semibold text-sm tracking-wide uppercase">
                            Contact Number
                        </h3>
                        <div className="space-y-3">
                            <a
                                href="tel:+917736131333"
                                className="block text-[#EB1414] hover:text-white transition-colors font-medium"
                            >
                                +91 7736 131 333
                            </a>
                            <a
                                href="https://wa.me/917736131333"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#EB1414] hover:text-white transition-colors font-medium"
                            >
                                <FaWhatsapp className="w-4 h-4" />
                                WhatsApp Us
                            </a>
                            <div className="text-gray-400 text-sm">
                                <p className="font-medium text-white/80">Assistance hours:</p>
                                <p>Monday - Friday 9 am to 6 pm</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visit Us */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-white font-semibold text-sm tracking-wide uppercase">
                            Visit Us
                        </h3>
                        <div className="space-y-3">
                            <p className="text-[#EB1414] font-medium leading-relaxed">
                                KPM Arcade, 2nd Floor,<br />
                                Calicut Road, Valanchery,<br />
                                Kerala, India
                            </p>
                            <div className="pt-2">
                                <p className="text-white/80 font-semibold text-sm">ATOM Education</p>
                                <p className="text-gray-400 text-sm">Inspiration of Science</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <p className="text-gray-400 text-sm text-center sm:text-left">
                        Ready to start your journey? Contact us today!
                    </p>
                    <div className="flex gap-3">
                        <a
                            href="tel:+917736131333"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#EB1414] text-white font-semibold rounded-lg hover:bg-[#c91212] transition-colors text-sm"
                        >
                            <Phone className="w-4 h-4" />
                            Call Now
                        </a>
                        <a
                            href="https://wa.me/917736131333"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-sm"
                        >
                            <FaWhatsapp className="w-4 h-4" />
                            WhatsApp
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactInfo;
