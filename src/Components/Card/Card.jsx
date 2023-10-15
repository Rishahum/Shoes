import React from 'react'
import './Card.css'

const Card = ({img,heading,Des}) => {
  return (
    <div className='card-div'>
        <img src={img} />
        <span style={{fontWeight:"bold"}}>{heading}</span>
        <span style={{fontSize: "15px"}}>{Des}</span>
        
        <button className="c-button">LEARN MORE</button>
    </div>
    
  )
}

export default Card