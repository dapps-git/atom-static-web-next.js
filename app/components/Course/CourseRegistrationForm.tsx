"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { syllabusOptions, districtOptions, campuses, whatsappNumber } from '@/app/data/courseData';

interface CourseRegistrationFormProps {
    courseName: string;
}

export default function CourseRegistrationForm({ courseName }: CourseRegistrationFormProps) {
    const [formData, setFormData] = useState({
        studentName: '',
        phoneNumber: '',
        whatsappNumber: '',
        district: '',
        syllabus: '',
        schoolName: '',
        preferredCampus: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const message = `*New Registration - ${courseName}*

*Student Details:*
━━━━━━━━━━━━━━━━
📝 Name: ${formData.studentName}
📞 Phone: ${formData.phoneNumber}
💬 WhatsApp: ${formData.whatsappNumber}
📍 District: ${formData.district}
📚 Syllabus: ${formData.syllabus}
🏫 School: ${formData.schoolName}
🏠 Preferred Campus: ${formData.preferredCampus}
━━━━━━━━━━━━━━━━

_Submitted via ATOM Academy Website_`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
    };

    const inputClasses = "w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#EB1414]/20 focus:border-[#EB1414] outline-none transition-all text-gray-800 bg-white";
    const selectClasses = "w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#EB1414]/20 focus:border-[#EB1414] outline-none transition-all text-gray-800 bg-white appearance-none cursor-pointer";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#EB1414] to-[#c91212] px-6 py-6">
                <h3 className="text-2xl font-bold text-white">Registration - 2026</h3>
                <p className="text-white/90 text-sm mt-1">
                    Fill out this form and our team will contact you with the next steps.
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Two Column Layout for Name and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Name of Student
                        </label>
                        <input
                            type="text"
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleChange}
                            placeholder="Enter student name"
                            required
                            className={inputClasses}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            required
                            className={inputClasses}
                        />
                    </div>
                </div>

                {/* WhatsApp and District */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            WhatsApp Number
                        </label>
                        <input
                            type="tel"
                            name="whatsappNumber"
                            value={formData.whatsappNumber}
                            onChange={handleChange}
                            placeholder="Enter WhatsApp number"
                            required
                            className={inputClasses}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            District
                        </label>
                        <select
                            name="district"
                            value={formData.district}
                            onChange={handleChange}
                            required
                            className={selectClasses}
                        >
                            <option value="">Select District</option>
                            {districtOptions.map((district) => (
                                <option key={district} value={district}>{district}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Syllabus */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Studying Syllabus
                    </label>
                    <select
                        name="syllabus"
                        value={formData.syllabus}
                        onChange={handleChange}
                        required
                        className={selectClasses}
                    >
                        <option value="">Select Syllabus</option>
                        {syllabusOptions.map((syllabus) => (
                            <option key={syllabus} value={syllabus}>{syllabus}</option>
                        ))}
                    </select>
                </div>

                {/* School Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        School/Institution Name
                    </label>
                    <input
                        type="text"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        placeholder="Enter school or institution name"
                        required
                        className={inputClasses}
                    />
                </div>

                {/* Preferred Campus */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Preferred Campus
                    </label>
                    <select
                        name="preferredCampus"
                        value={formData.preferredCampus}
                        onChange={handleChange}
                        required
                        className={selectClasses}
                    >
                        <option value="">Select Campus</option>
                        {campuses.map((campus, index) => (
                            <option key={index} value={`${campus.name} - ${campus.location}`}>
                                {campus.name} - {campus.location}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-[#16213e] hover:to-[#1a1a2e] transition-all"
                >
                    <Send size={18} />
                    SUBMIT
                </motion.button>
            </form>
        </motion.div>
    );
}
