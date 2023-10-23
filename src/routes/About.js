import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImageTwo from "../components/HeroImageTwo";
import AboutContent from "../components/AboutContent";
import CarouselComponent from "../components/Carousel";
import images from "../components/technologies";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo
        heading="Acerca de mí."
        text="Soy una apasionada programadora web Full Stack."
      />
      <AboutContent />
      <CarouselComponent images={images} />
      <Footer />
    </div>
  );
};

export default Project;
