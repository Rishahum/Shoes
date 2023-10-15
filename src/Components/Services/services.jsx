import React from 'react'
import './services.css'
import Heartemoji from '../images/heartemoji.png'
import Card from '../Card/Card.jsx'
import humble from '../images/humble.png'
import glassesemoji from '../images/glassesimoji.png'
import garantee from '../images/garantee.jpg'
import glasses from '../images/glasses.png'
import {motion} from 'framer-motion'
const services = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <>
    <h1>OUR SERVICES</h1>
    <div className='awesome'>
     
      <div className="awesome-right">
        
        <motion.div initial={{ left: "25rem" }}
          whileInView={{ left: "16rem" }}
          transition={transition}
          style={{position:"absolute", top:"10rem"}} >
          <Card img={humble} heading="Best Quality" Des='Loremeligendi explicabo ratione
           odit molestias corporis.' />
        </motion.div>
        
        <motion.div  initial={{  top: "12rem" }}
          whileInView={{ top: "1rem" }}
          transition={transition} style={{position: "relative", top:"1rem"}}>
          <Card img={Heartemoji} heading="Suitable for all" Des='Loremeligendi explicabo ratione
           odit molestias corporis.' />
           </motion.div>.

          <motion.div  initial={{  top: "12rem" }}
          whileInView={{ top: "5rem" }}
          transition={transition}style={{position:"relative", top:"5rem"}}>
            <Card img={glasses} heading="Fast Delivery" Des="Loremeligendi explicabo ratione
           odit molestias corporis." />
          </motion.div>
          <motion.div initial={{ left: "-25rem" }}
          whileInView={{ left: "-15rem" }}
          transition={transition}  style={{position:'relative', top: '-27rem', left:'-15rem'}}>
          <Card img={garantee} heading='100% garauntee' Des='Loremeligendi explicabo ratione
           odit molestias corporis.'/>
        </motion.div>
        

      </div>
    </div>
    </>
  )
}

export default services