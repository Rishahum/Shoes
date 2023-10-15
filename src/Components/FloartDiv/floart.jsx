import React from 'react'
import './floartDiv.css'
const floart = ({img, txt1}) => {
  return (
    <div className='floartingDiv'>
        <img className="f-img" src={img}/>
        <span>{txt1}</span>
        {/* <span>{txt2}</span> */}
    </div>
  )
}

export default floart