import React from 'react'
import './Intro.css'

import crown from '../images/crown.png'
import thumpsup from '../images/thumbup.png'
import bigshoe from '../images/bigshoes.png'
import FloartDiv from '../FloartDiv/floart.jsx'
const intro = () => {
    return (
        <>
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span className="greet">SHOE ONE NEW</span>
                    <span className="span-name">STATUS SYMBOL</span>
                    <p className="i-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam error harum facere quidem cum cupiditate molestias voluptatibus atque delectus suscipit ab temporibus nemo, recusandae inventore omnis est autem sequi reprehenderit?</p>
                    
                </div>
                <button className='i-button'>BUY NOW</button>
               
            </div>
            <div className="i-right">
                
                <img className='bigshoeimg' src={bigshoe}/>
                <div style={{left:'78%', top:'38%'}}>
                    <FloartDiv img={crown} txt1="BEST QUALITY" />
                </div>
                <div style={{top:'98%', left:'47%'}}>
                    <FloartDiv  img={thumpsup} txt1="BEAUTIFUL DESIGN" />
                </div>
                {/* purple */}
                <div className="blur" style={{ background: "rgb(238 210 255)", left:"65%" }}></div> 

                {/* bllue */}
                <div
                className="blur"
                style={{
                    background: "#C1F5FF",
                    top: "87%",
                    width: "21rem",
                    height: "11rem",
                    left: "47%",
                }}
                ></div>
            

            </div>
        </div>
        </>
    )
}

export default intro
