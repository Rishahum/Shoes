import React from 'react'
import './Productcard.css'

const Productcard = ({img}) => {
  return (
    <div className='card-div'>
        <img className='product-img' src={img} />
       
        <button className="c-button">BUY NOW</button>
    </div>
    
  )
}

export default Productcard