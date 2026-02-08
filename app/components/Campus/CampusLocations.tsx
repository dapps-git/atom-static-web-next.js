"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Users, Home } from 'lucide-react';

interface CampusInfo {
    id: string;
    name: string;
    location: string;
    fullAddress: string;
    phone: string;
    whatsapp: string;
    type: "Girls" | "Boys" | "Co-Ed";
    features: string[];
    mapUrl: string;
    image: string;
}

const campusList: CampusInfo[] = [
    {
        id: "valanchery",
        name: "Main Campus",
        location: "Valanchery, Malappuram",
        fullAddress: "KPM Arcade, 2nd Floor, Calicut Road, Valanchery, Kerala",
        phone: "+91 77361 31333",
        whatsapp: "917736131333",
        type: "Co-Ed",
        features: ["Smart Classrooms", "Science Labs", "Library", "Counseling Center"],
        mapUrl: "https://maps.google.com/?q=KPM+Arcade+Calicut+Road+Valanchery+Kerala",
        image: "/web-img-one.jpeg"
    }
];

export default function CampusLocations() {
    const [selectedCampus, setSelectedCampus] = useState<string>(campusList[0].id);

    const activeCampus = campusList.find(c => c.id === selectedCampus) || campusList[0];

    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EB1414]/10 rounded-full text-sm font-medium text-[#EB1414] mb-4">
                        <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
                        Locations
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Campus
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Located in Valanchery, our campus is equipped with modern facilities for academic excellence
                    </p>
                </motion.div>

                {/* Campus Selector Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {campusList.map((campus) => (
                        <motion.button
                            key={campus.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedCampus(campus.id)}
                            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${selectedCampus === campus.id
                                ? "bg-[#EB1414] text-white shadow-lg"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {campus.name} - {campus.location.split(",")[0]}
                        </motion.button>
                    ))}
                </div>

                {/* Selected Campus Details */}
                <motion.div
                    key={activeCampus.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {/* Campus Image */}
                    <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
                        <img
                            src={activeCampus.image}
                            alt={activeCampus.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-[#EB1414] text-white text-sm font-medium">
                            <span className="flex items-center gap-2">
                                {activeCampus.type === "Girls" && <Users size={14} />}
                                {activeCampus.type === "Boys" && <Users size={14} />}
                                {activeCampus.type === "Co-Ed" && <Home size={14} />}
                                {activeCampus.type} Campus
                            </span>
                        </div>
                    </div>

                    {/* Campus Info */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            {activeCampus.name}
                        </h3>
                        <p className="text-gray-600 mb-6">{activeCampus.location}</p>

                        {/* Address */}
                        <a
                            href={activeCampus.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 mb-4 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#EB1414]/10 flex items-center justify-center flex-shrink-0">
                                <MapPin size={18} className="text-[#EB1414]" />
                            </div>
                            <div>
                                <span className="text-sm text-gray-500">Address</span>
                                <p className="text-gray-800 group-hover:text-[#EB1414] transition-colors">
                                    {activeCampus.fullAddress}
                                </p>
                            </div>
                        </a>

                        {/* Phone */}
                        <a
                            href={`tel:${activeCampus.phone.replace(/\s/g, '')}`}
                            className="flex items-start gap-3 mb-4 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#EB1414]/10 flex items-center justify-center flex-shrink-0">
                                <Phone size={18} className="text-[#EB1414]" />
                            </div>
                            <div>
                                <span className="text-sm text-gray-500">Phone</span>
                                <p className="text-gray-800 group-hover:text-[#EB1414] transition-colors">
                                    {activeCampus.phone}
                                </p>
                            </div>
                        </a>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {activeCampus.features.map((feature, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <motion.a
                                href={`https://wa.me/${activeCampus.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-2 bg-[#EB1414] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#c91212] transition-colors"
                            >
                                <MessageCircle size={18} />
                                Chat on WhatsApp
                            </motion.a>
                            <motion.a
                                href={activeCampus.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                            >
                                <MapPin size={18} />
                                View on Map
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

               
            </div>
        </section>
    );
}
