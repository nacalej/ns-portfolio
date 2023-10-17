import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImageTwo from '../components/HeroImageTwo';
import  Form  from '../components/Form';

const Project = () => {

  return (
    <div >
      <Navbar />
      <HeroImageTwo heading="Contacto." text="¡Escríbeme!"  />
      <Form />
    <Footer />
    </div>
  )
}

export default Project;