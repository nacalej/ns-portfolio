import React from 'react';
import "../styles/WorkCardStyles.css";


const WorkCard = ({item}) => {
  return (
    <div className='box'>
    <img src={item.image} alt="Project imag" />
    <h2 className='project-title'>{item.title}</h2>
    <div className='pro-details'>
        <p>{item.text}</p> 
        {/* <div className='btn'> */}
          { item.demo !== '' ? 
            <a href={item.demo} className='btn' target='_blank' rel="noreferrer" 
             >Demo </a> : 
              <button className='none'></button>            
          }
          { item.github !== ' ' ? 
            <a href={item.github}  className='btn' target='_blank' rel="noreferrer" >Código fuente </a>
           : <button className='none'></button>}
            
        {/* </div> */}

    </div>
  

</div>
  )
}

export default WorkCard