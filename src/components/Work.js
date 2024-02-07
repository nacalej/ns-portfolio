import React from 'react';
import "../styles/WorkCardStyles.css";
import WorkCarData from "./WorkCarData.js";
import WorkCard from './WorkCard.js';

console.log("Work data: ", WorkCarData);

const Work = () => {
  return (
    <div className='container'>
        <h1
        className='project-heading'>
            {/* Proyectos */}
        </h1>
        <div className='box-container'>
            {
                WorkCarData?.map((item) => {
                    return (
                      <WorkCard
                          key={item.id}
                          item={item}
                      />
          
                    )
                })
            }
        

        </div>

    </div>
  )
}

export default Work