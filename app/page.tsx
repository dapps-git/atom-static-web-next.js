import Image from "next/image";
import AboutSection from "./components/Home/AboutSection";
import StatsBar from "./components/Home/CounterBar";
import LocationSections from "./components/Home/LocationSection";
import CourseGrid from "./components/Home/CourseGrid";
import AnnouncementBanner from "./components/Home/AnnouncementBar";
import AtomAdvantage from "./components/Home/AtomAdvantage";
 import StatSection from "./components/Home/SuccessStories";
import HeroBanner from "./components/Home/HeroBanner";
import NewsSection from "./components/Home/NewsSection";
import Testimonials from "./components/Program/Testimonials";
import CampusSection from "./components/About/CampusSection";
import FacilitiesSection from "./components/Home/FacilitiesSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AnnouncementBanner />
      <StatSection />
      <AboutSection />
      <StatsBar />
      <CourseGrid />
      <AtomAdvantage />
      <CampusSection />
      <LocationSections />
        <Testimonials />
        {/* <FacilitiesSection/> */}
      <NewsSection />


    </>
  );
}
