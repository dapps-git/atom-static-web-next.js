import React from 'react';
import CampusHero from '../components/Campus/CampusHero';
import CampusLocations from '../components/Campus/CampusLocations';
import CampusFacilities from '../components/Campus/CampusFacilities';
import StatsBar from '../components/Home/CounterBar';

export default function CampusPage() {
    return (
        <>
            <CampusHero />
            <CampusLocations />
            <CampusFacilities />
            <StatsBar />
        </>
    );
}
