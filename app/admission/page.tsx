import React from 'react';
import AdmissionHero from '../components/Admission/AdmissionHero';
import AdmissionGuidelines from '../components/Admission/AdmissionGuidelines';
import AcademicPrograms from '../components/Admission/AcademicPrograms';
import GallerySection from '../components/Admission/GallerySection';
import AlumniSection from '../components/Admission/AlumniSection';
import StatsBar from '../components/Home/CounterBar';

export default function AdmissionPage() {
    return (
        <>
            <AdmissionHero />
            <AdmissionGuidelines />
            <AcademicPrograms />
            <GallerySection />
            <StatsBar />
            <AlumniSection />
        </>
    );
}
