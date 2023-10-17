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
                        <p>Valencia, Venezuela.</p>
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
                <FaLinkedin size={20} style={{color: '#FFF', marginRight: '2rem'}}/>
                <FaGithub size={20} style={{color: '#FFF', marginRight: '2rem'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer