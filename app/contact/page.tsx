import React from 'react';
import ContactHero from '../components/Contact/ContactHero';
import RegistrationForm from '../components/Contact/RegistrationForm';
import ContactInfo from '../components/Contact/ContactInfo';
import StatsBar from '../components/Home/CounterBar';
import NewsSection from '../components/Home/NewsSection';

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <RegistrationForm />
            <ContactInfo />
            <StatsBar />
             <NewsSection />
        </>
    );
}
