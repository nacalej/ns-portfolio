import React from 'react';
import "../styles/FooterStyles.css";
import { FaHome, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>

        {/* LEFT */}
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{color: '#FFF', marginRight: '1rem'}}/>
            <p>Génova, Liguria, Italia.</p>
          </div>

          <div className='email'>
            <FaMailBulk size={20} style={{color: '#FFF', marginRight: '1rem'}}/>
            <p>nacariths <code style={{color: '#FFF'}}> @ </code> gmail.com</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className='right'>
          <div className='social'>
            <a 
              href="https://www.linkedin.com/in/nacarith-sequera/"
              target="_blank" 
              rel="noreferrer"
            >
              <FaLinkedin size={22} style={{color: '#FFF', marginRight: '1rem'}}/>
            </a>

            <a 
              href="https://github.com/nacalej"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={22} style={{color: '#FFF', marginRight: '1rem'}}/>
            </a>
          </div>
        </div>

      </div>

      <p className="footer-phrase">Aprendiendo, creando y creciendo cada día.</p>

      <p className="footer-rights">
        © {new Date().getFullYear()} Nacarith Sequera. Todos los derechos reservados.
      </p>
    </div>
  );
}

export default Footer;