import React from 'react'
import './Work.css'
import Amazon from '../images/amazon.png'

import facebook from '../images/Facebook.png'

const Work = () => {
  return (
    <div className='work'>
        <div className="w-left">
            <div className="awesome-text">
                <span className='a1-span'>Available On</span>
                <span className='a2-span'>these platform</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, commodi ratione nemo cupi optio sit, vero dolore temporibus<br/> minus impedit velit veniam numquam obcaecati nihil earum <br/>inventore.</p>
            </div>
        </div>
        <div className="w-right">
        <div className="white-circle" style={{left:'20%'}}></div>
        <div className='white-circle img' style={{height: "7rem", width: "7rem", top:'-16rem', left:'3rem'}}>
            <img src={Amazon}/>
          </div>
          
          <div className='white-circle img' style={{height: "7rem", width: "7rem", top:'-13rem', left:'7rem'}}>
            <img src={facebook}/>
          </div>

         
          
          
          
          
        </div>
    </div>
  )
}

export default Work