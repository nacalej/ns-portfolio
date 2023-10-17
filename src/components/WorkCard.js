import React from 'react';
import "../styles/WorkCardStyles.css";


const WorkCard = ({item}) => {
  return (
    <div className='project-card'>
    <img src={item.image} alt="Project imag" />
    <h2 className='project-title'>{item.title}</h2>
    <div className='pro-details'>
        <p>{item.text}</p> 
        <div className='pro-btns'>
          { item.demo !== '' ? 
            <a href={item.demo}  target='_blank' rel="noreferrer" className="btn btn2"
             >Demo </a> : 
              <button className='none'></button>            
          }
          { item.github !== ' ' ? 
            <a href={item.github}  target='_blank' rel="noreferrer" className="btn btn2">Código fuente </a>
           : <button className='none'></button>}
            
        </div>

    </div>
  

</div>
  )
}

export default WorkCard