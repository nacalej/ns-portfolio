import React from 'react';
import "../styles/HeroImageTwoStyles.css";
import { useLocation } from "react-router-dom";

const HeroImageTwo = ({heading, text}) => {
    const { pathname } = useLocation();
    console.log(pathname);
    return (
    <div className="hero-img">
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
)
};

export default HeroImageTwo;