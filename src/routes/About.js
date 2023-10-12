import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImageTwo from '../components/HeroImageTwo';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo heading="Acerca de mí." text="Soy una apasionada programadora web Full Stack."/>
      <Footer />
    </div>
  )
}

export default Project;