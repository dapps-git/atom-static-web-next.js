"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, MessageCircle, MapPin, GraduationCap, BookOpen, Building2, Send } from 'lucide-react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        whatsapp: '',
        district: '',
        syllabus: '',
        course: '',
        campus: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create WhatsApp message with form data
        const message = `Hi ATOM Education!%0A%0A*New Registration Request*%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AWhatsApp: ${formData.whatsapp}%0ADistrict: ${formData.district}%0ASyllabus: ${formData.syllabus}%0ACourse: ${formData.course}%0ACampus: ${formData.campus}`;
        window.open(`https://wa.me/917736131333?text=${message}`, '_blank');
    };

    const districts = [
        'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam',
        'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram', 'Kozhikode',
        'Wayanad', 'Kannur', 'Kasaragod'
    ];

    const syllabusOptions = ['CBSE', 'State Board', 'ICSE'];
    const courseOptions = ['NEET', 'JEE', 'CUET', 'CUSAT', 'KEAM', 'IISER'];
    const campusOptions = ['Valanchery Campus'];

    // Google Maps embed URL for ATOM Education, Valanchery
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d76.0565!3d10.8765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sKPM%20Arcade%2C%20Calicut%20Road%2C%20Valanchery%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

    const inputClasses = "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB1414]/20 focus:border-[#EB1414] transition-all text-sm";
    const selectClasses = "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#EB1414]/20 focus:border-[#EB1414] transition-all text-sm appearance-none cursor-pointer";
    const labelClasses = "block text-sm font-medium text-gray-700 mb-1.5";

    return (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10"
                    >
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                Registration - 2025
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Fill out this form and our team will contact you with the next steps, admission test detail and campus guidance.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Row 1: Name & Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClasses}>Name of Student</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className={inputClasses}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClasses}>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Row 2: WhatsApp & District */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClasses}>WhatsApp Number</label>
                                    <input
                                        type="tel"
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        placeholder="Enter WhatsApp number"
                                        className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>District</label>
                                    <select
                                        name="district"
                                        value={formData.district}
                                        onChange={handleChange}
                                        className={selectClasses}
                                        required
                                    >
                                        <option value="">Select District</option>
                                        {districts.map((d) => (
                                            <option key={d} value={d}>{d}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Row 3: Syllabus */}
                            <div>
                                <label className={labelClasses}>Studying Syllabus</label>
                                <select
                                    name="syllabus"
                                    value={formData.syllabus}
                                    onChange={handleChange}
                                    className={selectClasses}
                                    required
                                >
                                    <option value="">Select Syllabus</option>
                                    {syllabusOptions.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Row 4: Course */}
                            <div>
                                <label className={labelClasses}>Course</label>
                                <select
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    className={selectClasses}
                                    required
                                >
                                    <option value="">Select Course</option>
                                    {courseOptions.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Row 5: Campus */}
                            <div>
                                <label className={labelClasses}>Preferred Campus</label>
                                <select
                                    name="campus"
                                    value={formData.campus}
                                    onChange={handleChange}
                                    className={selectClasses}
                                    required
                                >
                                    <option value="">Select Campus</option>
                                    {campusOptions.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full py-3.5 bg-gradient-to-r from-[#EB1414] to-[#c91212] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                SUBMIT
                            </motion.button>
                        </form>

                        {/* Contact Info Below Form */}
                        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-6">
                            <a href="tel:+917736131333" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#EB1414] transition-colors">
                                <Phone className="w-4 h-4 text-[#EB1414]" />
                                <span><strong>Phone:</strong> +91 77361 31333</span>
                            </a>
                            <a href="mailto:atomeducation25@gmail.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#EB1414] transition-colors">
                                <MessageCircle className="w-4 h-4 text-[#EB1414]" />
                                <span><strong>E-MAIL:</strong> atomeducation25@gmail.com</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full h-[350px] sm:h-[450px] lg:h-full lg:min-h-[600px] rounded-2xl overflow-hidden shadow-lg border-4 border-white"
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

                        {/* Location Card Overlay */}
                        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-[240px]">
                            <h3 className="font-bold text-gray-900 text-sm mb-1">ATOM Education</h3>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                KPM Arcade, 2nd Floor,<br />
                                Calicut Road, Valanchery,<br />
                                Kerala
                            </p>
                            <a
                                href="https://maps.google.com/?q=KPM+Arcade+Valanchery+Kerala"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#EB1414] hover:underline"
                            >
                                <MapPin className="w-3 h-3" />
                                View larger map
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;
