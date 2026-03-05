import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImageTwo from '../components/HeroImageTwo';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo 
        heading="Proyectos destacados" 
        text="Una selección de mi trabajo más reciente." 
      />
      <Work />
      <Footer />
    </div>
  )
}

export default Project;