// HomePage.js
import React from "react";
import HeroSection from "../Components/HeroSection";
import AboutUs from "../Components/AboutUs";
import ServicesOffered from "../Components/ServicesOffered";
import WhyChooseUs from "../Components/WhyChooseUs";
import CallToAction from "../Components/CallToAction";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ServicesOffered />
      <WhyChooseUs />
      <CallToAction />
    </>
  );
};

export default HomePage;
