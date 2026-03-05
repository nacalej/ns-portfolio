import React from 'react';
import "../styles/WorkCardStyles.css";

const WorkCard = ({ item }) => {
  return (
    <div className='box'>

      {/* BADGE EN CONSTRUCCIÓN */}
      {item.status === "wip" && (
        <span className="badge">En construcción</span>
      )}

      {/* IMAGEN */}
      <img src={item.image} alt="Project" />

      {/* TÍTULO */}
      <h2 className='project-title'>{item.title}</h2>

      {/* TAGS DE TECNOLOGÍAS */}
      {item.tools && (
        <div className="tags">
          {item.tools.map((tool, index) => (
            <span key={index} className="tag">{tool}</span>
          ))}
        </div>
      )}

      {/* DESCRIPCIÓN + BOTONES */}
      <div className='pro-details'>
        <p>{item.text}</p>

        {item.demo && (
          <a href={item.demo} className='btn' target='_blank' rel="noreferrer">
            Demo
          </a>
        )}

        {item.github && (
          <a href={item.github} className='btn' target='_blank' rel="noreferrer">
            Código fuente
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkCard;