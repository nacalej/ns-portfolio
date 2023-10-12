import "../styles/navbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
  <div className={color ? "header header-bg" : "header" }>
    <Link to={"/"}>
        <h1>Portafolio</h1>
    </Link>
    {/* si hacen click en el icono, agrego la class active, sino dejo el estilo nav-menu */}
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li>
        <Link to={"/"}>Inicio</Link>
      </li>
      <li>
        <Link to={"/project"}>Proyectos</Link>
      </li>
      <li>
        <Link to={"/about"}>Acerca de</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contacto</Link>
      </li>
    </ul>
    {/* Hamburger menu */}
    <div className="hamburger" onClick={handleClick}>
      {/* si hicieron click en el menu, mostrar el x icon */}
      {click ? (<FaTimes size={20} style={{color: '#FFF'}}/>) :
      (<FaBars size={20} style={{color: '#FFF'}}/>)
      }
      
      
    </div>
    

  </div>);
};

export default Navbar;