"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, ClipboardCheck, GraduationCap } from 'lucide-react';
import { CourseData } from '@/app/data/courseData';

interface AdmissionProcedureProps {
    course: CourseData;
}

const steps = [
    {
        number: 1,
        title: "Initial Inquiry & Counseling",
        description: "Begin by connecting with our admissions team via WhatsApp. We'll provide detailed information about the program, fee structure, facilities, and address all your preliminary queries.",
        icon: MessageCircle
    },
    {
        number: 2,
        title: "Online Registration",
        description: "Proceed by filling out the official Online Application Form (link provided by the admissions counselor). This step helps us understand your academic background and aspirations.",
        icon: FileText
    },
    {
        number: 3,
        title: "ATOM Admission Test (AAT)",
        description: "Eligible applicants will be invited to take the ATOM Admission Test (AAT). This assessment evaluates core competencies in Science and Mathematics to ensure students are prepared for our rigorous academic environment.",
        icon: ClipboardCheck
    },
    {
        number: 4,
        title: "Admission Offer & Enrollment",
        description: "Successful candidates will receive a formal Admission Offer. Upon completion of the final documentation and fee payment, your seat will be confirmed, and you will be welcomed into the ATOM Campus community.",
        icon: GraduationCap
    }
];

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

export default function AdmissionProcedure({ course }: AdmissionProcedureProps) {
    return (
        <div className="space-y-8">
            {/* Header */}
            <motion.div {...fadeInUp}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Admission Procedure
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    Securing a place at ATOM Campus for {course.fullTitle} is a simple and streamlined process
                    designed to identify dedicated students who are ready to embrace our unique educational model.
                </p>
            </motion.div>

            {/* Course Highlights */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Highlights</h3>
                <ul className="space-y-3">
                    {course.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-[#EB1414] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Steps Section */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Follow these steps to begin your journey:
                </h3>

                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex gap-4"
                        >
                            {/* Step Number & Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-[#EB1414]/10 flex items-center justify-center">
                                    <step.icon className="w-5 h-5 text-[#EB1414]" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    Step {step.number}: {step.title}
                                </h4>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Subjects Covered */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Subjects Covered</h3>
                <div className="flex flex-wrap gap-3">
                    {course.subjects.map((subject, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium text-sm"
                        >
                            {subject}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Features */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
