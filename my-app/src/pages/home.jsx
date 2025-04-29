import React from "react";
import Hero from "../components/hero";
import Header from "../components/header";
import Footer from "../components/footer";
import ImageSlider from "../components/ImageSlider";
const home = () => {
  return (
    <div>
      <Hero />
      <ImageSlider />
      <Footer />
    </div>
  );
};

export default home;
