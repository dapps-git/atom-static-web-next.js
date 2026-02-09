import React from 'react';
import AboutHero from '../components/About/AboutHero';
import AboutContent from '../components/About/AboutContent';
import CampusSection from '../components/About/CampusSection';
import TeamSection from '../components/About/TeamSection';
import StatsBar from '../components/Home/CounterBar';

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutContent />
            <CampusSection />
            {/* <TeamSection /> */}
            <StatsBar />
        </>
    );
}
