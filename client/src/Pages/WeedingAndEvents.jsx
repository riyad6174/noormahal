import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import EventsSection from "../Components/WeedingPageComponents/EventsSection";
import MemorableSection from "../Components/WeedingPageComponents/MemorableSection";
import MemoriesSection from "../Components/WeedingPageComponents/MemoriesSection";
import PreWedding from "../Components/WeedingPageComponents/PreWedding";
import SpecialEvent from "../Components/WeedingPageComponents/SpecialEvent";
import SpecialService from "../Components/WeedingPageComponents/SpecialService";

const WeddingAndEvents = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <MemorableSection />
      <SpecialEvent />
      <SpecialService />
      <EventsSection />
      <PreWedding />
      <MemoriesSection />
      <Footer />
    </div>
  );
};

export default WeddingAndEvents;
