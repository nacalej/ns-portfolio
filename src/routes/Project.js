import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImageTwo from '../components/HeroImageTwo';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo heading="Proyectos." text="Mis trabajos más recientes." />
      <Work />
      <Footer />
    </div>
  )
}

export default Project;