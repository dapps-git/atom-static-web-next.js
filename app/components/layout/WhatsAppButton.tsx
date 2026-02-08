"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { contactInfo } from '@/app/data/contactData';

export default function WhatsAppButton() {
    const message = "Hello! I'm interested in learning more about ATOM Education courses. Please provide me with more information.";
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="text-white text-2xl md:text-3xl" />

            {/* Pulse Animation Ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        </motion.a>
    );
}
