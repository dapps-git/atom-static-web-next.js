"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MessageCircle, FileText, CheckCircle, ClipboardList, Award } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const admissionSteps = [
    { step: 1, title: "Visit the campus and collect the admission form." },
    { step: 2, title: "Submit the completed application form." },
    { step: 3, title: "Carefully read and understand the fee details and guidelines before signing." },
    { step: 4, title: "Contact the admission coordinator to confirm the availability of seats." },
    { step: 5, title: "Confirm your admission by paying the amount to the given account. This amount will be adjusted as your first-term fee." }
];

const procedureSteps = [
    {
        step: 1,
        title: "Initial Inquiry & Counseling",
        description: "Begin by connecting with our admissions team via WhatsApp. We'll provide detailed information about the program, fee structure, facilities, and address all your preliminary queries.",
        icon: MessageCircle
    },
    {
        step: 2,
        title: "Online Registration",
        description: "Proceed by filling out the official Online Application Form. This step helps us understand your academic background and aspirations.",
        icon: FileText
    },
    {
        step: 3,
        title: "ATOM Admission Test (AAT)",
        description: "Eligible applicants will be invited to take the ATOM Admission Test (AAT). This assessment evaluates core competencies in Science and Mathematics to ensure students are prepared for our rigorous academic environment.",
        icon: ClipboardList
    },
    {
        step: 4,
        title: "Admission Offer & Enrollment",
        description: "Successful candidates will receive a formal Admission Offer. Upon completion of the final documentation and fee payment, your seat will be confirmed, and you will be welcomed into the ATOM Education community.",
        icon: Award
    }
];

const districts = [
    'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam',
    'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram', 'Kozhikode',
    'Wayanad', 'Kannur', 'Kasaragod'
];

const syllabusOptions = ['CBSE', 'State Board', 'ICSE'];
const courseOptions = ['NEET', 'JEE', 'CUET', 'CUSAT', 'KEAM', 'IISER'];
const campusOptions = ['Valanchery Campus'];

const AdmissionGuidelines = () => {
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
        const message = `Hi ATOM Education!%0A%0A*New Admission Inquiry*%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AWhatsApp: ${formData.whatsapp}%0ADistrict: ${formData.district}%0ASyllabus: ${formData.syllabus}%0ACourse: ${formData.course}%0ACampus: ${formData.campus}`;
        window.open(`https://wa.me/917736131333?text=${message}`, '_blank');
    };

    const inputClasses = "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB1414]/20 focus:border-[#EB1414] transition-all text-sm";
    const selectClasses = "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#EB1414]/20 focus:border-[#EB1414] transition-all text-sm appearance-none cursor-pointer";
    const labelClasses = "block text-sm font-medium text-gray-700 mb-1.5";

    return (
        <section className="py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
            <div className="max-w-[1400px] mx-auto">

                {/* Mobile: Form First */}
                <div className="lg:hidden mb-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-gradient-to-br from-[#EB1414] to-[#c91212] rounded-2xl p-6 sm:p-8 text-white"
                    >
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                            Registration - 2025
                        </h3>
                        <p className="text-white/80 text-sm mb-6">
                            Fill out this form and our team will contact you with the next steps.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-1.5">Name of Student</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-1.5">Phone Number</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/90 mb-1.5">WhatsApp Number</label>
                                <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="Enter WhatsApp" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/90 mb-1.5">District</label>
                                <select name="district" value={formData.district} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 text-sm" required>
                                    <option value="" className="text-gray-800">Select District</option>
                                    {districts.map((d) => (<option key={d} value={d} className="text-gray-800">{d}</option>))}
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-1.5">Syllabus</label>
                                    <select name="syllabus" value={formData.syllabus} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 text-sm" required>
                                        <option value="" className="text-gray-800">Select</option>
                                        {syllabusOptions.map((s) => (<option key={s} value={s} className="text-gray-800">{s}</option>))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-1.5">Course</label>
                                    <select name="course" value={formData.course} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 text-sm" required>
                                        <option value="" className="text-gray-800">Select</option>
                                        {courseOptions.map((c) => (<option key={c} value={c} className="text-gray-800">{c}</option>))}
                                    </select>
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full py-3.5 bg-white text-[#EB1414] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                SUBMIT
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Desktop: Two Column with Sticky Form */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* Left: Scrollable Content */}
                    <div className="w-full lg:w-[55%]">
                        {/* Guidelines Section */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                            transition={{ duration: 0.6 }}
                            className="mb-16"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EB1414]/10 rounded-full text-sm font-medium text-[#EB1414] mb-4">
                                <span className="w-2 h-2 bg-[#EB1414] rounded-full" />
                                Guidelines
                            </span>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                ATOM Admission Guidelines
                            </h2>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                It is mandatory to bring the child's <span className="text-[#EB1414] font-medium">birth certificate</span>, <span className="text-[#EB1414] font-medium">Aadhaar card</span>, and <span className="text-[#EB1414] font-medium">two passport-size photographs</span> at the time of admission.
                            </p>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                {admissionSteps.map((item) => (
                                    <motion.div
                                        key={item.step}
                                        variants={fadeInUp}
                                        className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 bg-[#EB1414] rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {item.step}
                                        </div>
                                        <p className="text-gray-700 text-sm leading-relaxed pt-1">{item.title}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Admission Procedure */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="mb-16"
                        >
                            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Admission Procedure
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-gray-600 max-w-3xl mb-8">
                                Securing a place at ATOM Education is a simple and streamlined process designed to identify dedicated students who are ready to embrace our unique educational model.
                            </motion.p>

                            <motion.h3 variants={fadeInUp} className="text-lg font-semibold text-gray-900 mb-6">
                                Follow these steps to begin your journey:
                            </motion.h3>

                            <div className="space-y-6">
                                {procedureSteps.map((item) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <motion.div key={item.step} variants={fadeInUp} className="flex gap-4 p-5 bg-gray-50 rounded-xl border-l-4 border-[#EB1414]">
                                            <div className="flex-shrink-0 w-10 h-10 bg-[#EB1414]/10 rounded-lg flex items-center justify-center">
                                                <IconComponent className="w-5 h-5 text-[#EB1414]" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2">
                                                    Step {item.step}: {item.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Connect Section */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="p-6 bg-gray-900 rounded-2xl text-white"
                        >
                            <h3 className="text-xl md:text-2xl font-bold mb-3">Connect with Our Campus</h3>
                            <p className="text-gray-300 mb-6 text-sm">
                                Each of our campuses follows the same values and academic rigor while providing personalized support to new applicants.
                            </p>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                                    <Phone className="w-5 h-5 text-[#EB1414]" />
                                    <div>
                                        <p className="font-semibold text-sm">Valanchery Campus</p>
                                        <a href="tel:+917736131333" className="text-[#EB1414] font-medium text-sm hover:underline">+91 7736 131 333</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-[#EB1414]">
                                <div className="w-1 h-8 bg-[#EB1414] rounded-full" />
                                <p className="text-sm text-gray-300">
                                    Reach out via <a href="https://wa.me/917736131333" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#EB1414] hover:underline">WhatsApp</a> or call to speak with our admissions team today.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Sticky Form (Desktop Only) */}
                    <div className="hidden lg:block w-[45%]">
                        <div className="sticky top-24">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInRight}
                                transition={{ duration: 0.6 }}
                                className="bg-[#F8F9FA] rounded-2xl p-8 shadow-lg border border-gray-100"
                            >
                                <div className="mb-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                        Registration - 2025
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Fill out this form and our team will contact you with the next steps, admission test detail and campus guidance.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className={labelClasses}>Name of Student</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" className={inputClasses} required />
                                        </div>
                                        <div>
                                            <label className={labelClasses}>Phone Number</label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone" className={inputClasses} required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className={labelClasses}>WhatsApp Number</label>
                                            <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="Enter WhatsApp" className={inputClasses} />
                                        </div>
                                        <div>
                                            <label className={labelClasses}>District</label>
                                            <select name="district" value={formData.district} onChange={handleChange} className={selectClasses} required>
                                                <option value="">Select District</option>
                                                {districts.map((d) => (<option key={d} value={d}>{d}</option>))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelClasses}>Studying Syllabus</label>
                                        <select name="syllabus" value={formData.syllabus} onChange={handleChange} className={selectClasses} required>
                                            <option value="">Select Syllabus</option>
                                            {syllabusOptions.map((s) => (<option key={s} value={s}>{s}</option>))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className={labelClasses}>Course</label>
                                        <select name="course" value={formData.course} onChange={handleChange} className={selectClasses} required>
                                            <option value="">Select Course</option>
                                            {courseOptions.map((c) => (<option key={c} value={c}>{c}</option>))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className={labelClasses}>Preferred Campus</label>
                                        <select name="campus" value={formData.campus} onChange={handleChange} className={selectClasses} required>
                                            <option value="">Select Campus</option>
                                            {campusOptions.map((c) => (<option key={c} value={c}>{c}</option>))}
                                        </select>
                                    </div>

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

                                {/* Quick Contact */}
                                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-center gap-4">
                                    <a href="tel:+917736131333" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#EB1414] transition-colors">
                                        <Phone className="w-4 h-4" />
                                        Call Us
                                    </a>
                                    <span className="text-gray-300">|</span>
                                    <a href="https://wa.me/917736131333" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#EB1414] transition-colors">
                                        <MessageCircle className="w-4 h-4" />
                                        WhatsApp
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionGuidelines;
