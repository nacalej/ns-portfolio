import React from 'react';
import "../styles/FooterStyles.css";
import { FaHome, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: '#FFF', marginRight: '2rem'}}/>
                    <div>
                        <p>Génova, Liguria, Italia.</p>
                    </div>
                </div>

                {/* <div className='phone'>
                <FaPhone size={20} style={{color: '#FFF', marginRight: '2rem'}}/>
                </div> */}

                <div className='email'>
                <FaMailBulk size={20} style={{color: '#FFF', marginRight: '2rem'}}/>
                <p>nacariths <code style={{color: '#FFF'}}> @ </code> gmail.com </p>
                </div>
            </div>

            {/* right */}
            <div className='right'>
                {/* <h4>Acerca de mí</h4>
                <p>Soy Nacarith Sequera, una apasionada por mi profesión y dispuesta a aprender constantemente.
                    Disfruto de la creación y diseño de nuevos proyectos, me gusta trabajar en equipo y la resolución de conflictos.</p> */}
                
                <div className='social'>
                <a href="https://www.linkedin.com/in/nacarith-sequera/"
                  target="_blank" 
                  rel="noreferrer" >
                    <FaLinkedin size={20} style={{color: '#FFF', marginRight: '2rem'}}
                    />
                </a>

                <a
                 href="https://github.com/nacalej" 
                 target="_blank"
                  rel="noreferrer"
                >
                    <FaGithub size={20} style={{color: '#FFF', marginRight: '2rem'}}/>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
