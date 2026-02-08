"use client";

import React from 'react';
import { CourseData } from '@/app/data/courseData';
import CourseHero from './CourseHero';
import CourseRegistrationForm from './CourseRegistrationForm';
import AdmissionProcedure from './AdmissionProcedure';
import CampusConnect from './CampusConnect';

interface CoursePageLayoutProps {
    course: CourseData;
}

export default function CoursePageLayout({ course }: CoursePageLayoutProps) {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <CourseHero course={course} />

            {/* Main Content with Sticky Form */}
            <section className="py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        {/* Left Side - Scrollable Content */}
                        <div className="flex-1 lg:max-w-[60%] order-2 lg:order-1">
                            <AdmissionProcedure course={course} />

                            {/* Campus Connect Section */}
                            <div className="mt-12">
                                <CampusConnect />
                            </div>
                        </div>

                        {/* Right Side - Sticky Registration Form */}
                        <div className="lg:w-[40%] order-1 lg:order-2">
                            <div className="lg:sticky lg:top-24">
                                <CourseRegistrationForm courseName={course.fullTitle} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
