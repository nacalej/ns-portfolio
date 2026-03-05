import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutContentStyles.css';
import NS from '../assets/nsProfileShadow.png';
import Pat from '../assets/pattern.jpg';
import CV from '../assets/Nacarith_Sequera_SAP_Junior_ABAP_Fiori';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>¿Quién soy?</h1>
            <p>
                Soy desarrolladora web Full Stack con experiencia en la creación de aplicaciones frontend y backend.
                 Actualmente estoy ampliando mi perfil técnico hacia el ecosistema SAP, integrando mi base en desarrollo 
                 web con experiencia previa en ABAP y aprendizaje de Fiori/UI5. Disfruto diseñar 
                y construir proyectos, resolver problemas y trabajar en equipo, 
                siempre con enfoque en aprender y mejorar continuamente
            </p>
            <Link to="/contact"><button className='btn '>Contacto</button></Link>
               <a download="" href={CV}><button className='btn btn-cv'>Descargar CV</button></a>
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