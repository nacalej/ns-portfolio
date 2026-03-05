import React from 'react';
import "../styles/HeroImageStyles.css";
import introImg from "../assets/heroImg.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={introImg} alt="Programador"/>
        </div>
        <div className="content">
            <p>¡Hola!, mi nombre es Nacarith Alejandra Sequera Ochoa.</p>
            <h1>Desarrolladora Web Full Stack</h1>
            <div>
                <Link to={"/project"} className='btn'>Proyectos</Link>
                <Link to={"/contact"} className='btn btn-light'>Contacto</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage