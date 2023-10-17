import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutContentStyles.css';
import NS from '../assets/nsProfileShadow.png';
import Pat from '../assets/pattern.jpg';
const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>¿Quién soy?</h1>
            <p>Soy una programadora web Full Stack, apasionada por mi profesión y dispuesta a aprender constantemente.
                    Disfruto de la creación y diseño de nuevos proyectos, me gusta trabajar en equipo y la resolución de conflictos.
            </p>
            <Link to="/contact"><button className='btn '>Contacto</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={NS} alt="Nacarith Sequera" className='img' />
                </div>
                <div className='img-stack bottom'>
                    <img src={Pat} alt="Nacarith Sequera" className='img' />
                </div>
            </div>

        </div>

    </div>
  )
}

export default AboutContent