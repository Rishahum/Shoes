import React from 'react'
import smallshoe from '../images/shoe1.jpg'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="nav-left">
            <img className='smallshoe' src={smallshoe}/>
            <div className="n-name">SHOSAS</div>
            {/* <div className="toggle"></div> */}
        </div>
        <div className="nav-right">
            <div className="nav-list" >
                <ul style={{ listStyleType: "none" }}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Review</li>
                    
                </ul>
            </div>
            <div className="nav-button">
                <button>Contact</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar