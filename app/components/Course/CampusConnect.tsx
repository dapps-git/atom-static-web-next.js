"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { campuses, whatsappNumber } from '@/app/data/courseData';

export default function CampusConnect() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-xl p-6"
        >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Connect with Our Campuses
            </h3>
            <p className="text-gray-600 mb-6">
                Each of our campuses follows the same values and academic rigor while providing
                personalized support to new applicants.
            </p>

            <div className="space-y-4">
                {campuses.map((campus, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="w-1 h-8 rounded-full"
                                style={{ backgroundColor: campus.color }}
                            />
                            <div>
                                <span
                                    className="font-semibold text-sm"
                                    style={{ color: campus.color }}
                                >
                                    {campus.name}
                                </span>
                                <span className="text-gray-600 text-sm"> – {campus.location}</span>
                            </div>
                        </div>
                        <a
                            href={`tel:${campus.phone.replace(/\s/g, '')}`}
                            className="text-[#EB1414] font-medium text-sm hover:underline flex items-center gap-1"
                        >
                            <Phone size={14} />
                            {campus.phone}
                        </a>
                    </motion.div>
                ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 pt-6 border-t border-gray-200"
            >
                <div className="flex items-start gap-2">
                    <div className="w-1 h-full bg-[#25D366] rounded-full" />
                    <p className="text-gray-700 text-sm">
                        <MessageCircle className="inline w-4 h-4 text-[#25D366] mr-1" />
                        Reach out via WhatsApp or call to speak with our admissions team today.
                    </p>
                </div>
                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1fb855] transition-colors"
                >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                </a>
            </motion.div>
        </motion.div>
    );
}
