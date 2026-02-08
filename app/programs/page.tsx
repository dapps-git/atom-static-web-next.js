import React from 'react';
import ProgramHero from '../components/Program/ProgramHero';
import Testimonials from '../components/Program/Testimonials';
import WhyChooseUs from '../components/Program/WhyChooseUs';
import ProgramSection from '../components/Home/CourseGrid';
import CampusFeatures from '../components/Program/CampusFeatures';
import VideoSection from '../components/Program/VideoSection';
import StatsBar from '../components/Home/CounterBar';

export default function ProgramsPage() {
    return (
        <>
            <ProgramHero />
             <ProgramSection />
              <CampusFeatures />
            <WhyChooseUs />
            <StatsBar />
            {/* <VideoSection /> */}
              <Testimonials />
        </>
    );
}
