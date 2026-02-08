"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

const LocationSections = () => {
    // Google Maps embed URL for KPM Arcade, Valanchery, Kerala
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d76.0565!3d10.8765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sKPM%20Arcade%2C%20Calicut%20Road%2C%20Valanchery%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

    return (
        <section className="relative w-full bg-[#F5F5F5] py-12 px-4 sm:px-6 md:px-8 lg:px-12 md:py-16 overflow-hidden">
            {/* Badge centered at top */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-8 md:mb-12"
            >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EB1414] rounded-full text-sm font-medium text-white shadow-md">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    Limited Seats Available
                </span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
                {/* Left Content Side */}
                <div className="flex flex-col space-y-6">
                    <h1 className="text-2xl md:text-4xl lg:text-[42px] font-bold text-gray-900 leading-tight">
                        Ready to Start Your Journey to{" "}
                        <span className="text-[#EB1414]">Success?</span>
                    </h1>

                    <p className="text-gray-600 text-base md:text-lg max-w-lg leading-relaxed">
                        Join ATOM Education today and take the first step towards achieving
                        your dreams. Our expert faculty and proven methodology will guide
                        you every step of the way.
                    </p>

                    {/* Action Row - Button, Phone, Location in a row */}
                    <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-4">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-[#EB1414] hover:bg-red-700 transition-all text-white font-bold py-3 px-8 rounded-md text-base shadow-lg cursor-pointer"
                        >
                            Enroll Now
                        </motion.button>

                        <div className="flex items-center gap-3 group">
                            <div className="bg-[#EB1414] p-2.5 rounded-full transition-transform group-hover:scale-110">
                                <Phone className="text-white w-5 h-5" fill="white" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium">Call us now</p>
                                <a href="tel:+917736131333" className="text-sm md:text-base font-bold text-gray-900 hover:text-[#EB1414] transition-colors">
                                    +91 7736 131 333
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-[#EB1414] p-2.5 rounded-full">
                                <MapPin className="text-white w-5 h-5" fill="white" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900 leading-snug">
                                    KPM Arcade, 2nd Floor,<br />
                                    Calicut Road, Valanchery, Kerala
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Map Side - Google Maps Embed */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 30 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative w-full h-[280px] md:h-[350px] lg:h-[380px] rounded-xl overflow-hidden shadow-xl border-4 border-white"
                >
                    <iframe
                        src={mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="ATOM Education Location Map"
                        className="w-full h-full"
                    />

                    {/* Custom Location Marker Overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="relative">
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold text-gray-800 whitespace-nowrap">
                                ATOM Education
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white transform rotate-45"></div>
                            </div>
                            <div className="w-5 h-5 bg-[#EB1414] rounded-full border-3 border-white shadow-lg animate-pulse"></div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default LocationSections;