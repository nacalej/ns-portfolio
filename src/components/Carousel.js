import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../styles/CarouselStyles.css";
import technologies from "./technologies";

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper container">
      <h1>Mis conocimientos</h1>
      <br />
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        thumbWidth="50px"
        centerMode
        showStatus={false}
      >
        {technologies.map((tech) => (
          <div key={tech.id} className="containerImg">
            <h3 className="">{tech.name}</h3>
            <img className="carousel-image" src={tech.image} alt={tech.name} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
