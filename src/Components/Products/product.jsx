import React from 'react'
import Productcard from '../Productcard/Productcard.jsx'
import './product.css'
import sniker from '../images/snikers.jpg'

import whiteflat from '../images/whiteflat.jpg'
import juti from '../images/juti.jpg'
const product = () => {
  return (
    <div className='product-div'>
        <h1>PRODUCTS</h1>
        <div className='product-cards-div'>
        <Productcard img={sniker}/>
        
        <Productcard img={whiteflat}/>
        <Productcard img={juti}/>
        </div>
        
    </div>
  )
}

export default product