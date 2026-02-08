"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp
} from 'react-icons/fa';
import { contactInfo, quickLinks, programLinks } from '@/app/data/contactData';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaFacebookF, href: contactInfo.social.facebook, label: "Facebook" },
        { icon: FaInstagram, href: contactInfo.social.instagram, label: "Instagram" },
        { icon: FaYoutube, href: contactInfo.social.youtube, label: "YouTube" },
        { icon: FaLinkedinIn, href: contactInfo.social.linkedin, label: "LinkedIn" }
    ];

    return (
        <footer className="bg-black text-white py-16 px-4 sm:px-6 md:px-8 lg:px-12 font-sans">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-white p-3 inline-block rounded-lg overflow-hidden"
                        >
                            <img
                                src="/footer-logo.webp"
                                alt="ATOM Inspiration of Science"
                                className="h-14 w-auto object-contain"
                            />
                        </motion.div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Empowering students to achieve their dreams through quality education and expert guidance for NEET, JEE, CUET, and more.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#EB1414] hover:bg-[#EB1414] hover:text-white transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#EB1414] rounded-full" />
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-[#EB1414] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Programs */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 relative inline-block">
                            Our Programs
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#EB1414] rounded-full" />
                        </h3>
                        <ul className="space-y-3">
                            {programLinks.slice(0, 6).map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-[#EB1414] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#EB1414] rounded-full" />
                        </h3>
                        <ul className="space-y-5">
                            {/* Location */}
                            <li>
                                <a
                                    href={contactInfo.maps.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start space-x-4 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#EB1414]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#EB1414] transition-colors">
                                        <FaMapMarkerAlt className="text-[#EB1414] group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                                        {contactInfo.address.full}
                                    </span>
                                </a>
                            </li>

                            {/* Phone */}
                            <li>
                                <a
                                    href={`tel:${contactInfo.phoneRaw}`}
                                    className="flex items-center space-x-4 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#EB1414]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#EB1414] transition-colors">
                                        <FaPhoneAlt className="text-[#EB1414] group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-gray-400 group-hover:text-white transition-colors">
                                        {contactInfo.phone}
                                    </span>
                                </a>
                            </li>

                            {/* Email */}
                            <li>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="flex items-center space-x-4 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#EB1414]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#EB1414] transition-colors">
                                        <FaEnvelope className="text-[#EB1414] group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm break-all">
                                        {contactInfo.email}
                                    </span>
                                </a>
                            </li>
                        </ul>

                        {/* WhatsApp Button */}
                        <motion.a
                            href={contactInfo.whatsapp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-6 flex items-center justify-center gap-2 bg-[#EB1414] text-white py-3 px-6 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-green-500/20 transition-all"
                        >
                            <FaWhatsapp size={18} />
                            Chat on WhatsApp
                        </motion.a>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
                    <p>© {currentYear} ATOM Education. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;