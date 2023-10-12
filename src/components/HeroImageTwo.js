import React from 'react';
import "../styles/HeroImageTwoStyles.css";

const HeroImageTwo = ({heading, text}) => {
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