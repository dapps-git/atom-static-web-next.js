"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactHero = () => {
    return (
        <section className="relative w-full bg-black overflow-hidden pt-[110px] h-[89vh] min-h-[350px]   flex items-end">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-[#EB1414]/20 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1/4 -left-1/4 w-[350px] h-[350px] rounded-full bg-[#EB1414]/10 blur-3xl"
                />
            </div>

            <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1400px] w-full mx-auto pb-10 md:pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-white/90">
                        <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
                        Get In Touch
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                        Contact <span className="text-[#EB1414]">Us</span>
                    </h1>

                    <p className="text-gray-300 text-base md:text-lg max-w-xl">
                        Have questions about our programs? We're here to help you take the first step towards your academic success.
                    </p>
                </motion.div>

                {/* Quick Contact Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 max-w-4xl"
                >
                    <a href="tel:+917736131333" className="group flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#EB1414]/50 transition-all">
                        <div className="p-2.5 rounded-lg bg-[#EB1414]/20 group-hover:bg-[#EB1414]/30 transition-colors flex-shrink-0">
                            <Phone className="w-5 h-5 text-[#EB1414]" />
                        </div>
                        <div className="text-left min-w-0">
                            <p className="text-xs text-gray-400">Call Us</p>
                            <p className="text-sm font-semibold text-white">+91 77361 31333</p>
                        </div>
                    </a>

                    <a href="mailto:atomeducation25@gmail.com" className="group flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#EB1414]/50 transition-all overflow-hidden">
                        <div className="p-2.5 rounded-lg bg-[#EB1414]/20 group-hover:bg-[#EB1414]/30 transition-colors flex-shrink-0">
                            <Mail className="w-5 h-5 text-[#EB1414]" />
                        </div>
                        <div className="text-left min-w-0 flex-1">
                            <p className="text-xs text-gray-400">Email Us</p>
                            <p className="text-xs sm:text-sm font-semibold text-white truncate">atomeducation25@gmail.com</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                        <div className="p-2.5 rounded-lg bg-[#EB1414]/20 flex-shrink-0">
                            <Clock className="w-5 h-5 text-[#EB1414]" />
                        </div>
                        <div className="text-left min-w-0">
                            <p className="text-xs text-gray-400">Hours</p>
                            <p className="text-sm font-semibold text-white whitespace-nowrap">Mon - Fri, 9AM - 6PM</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHero;
