import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        
        <div className="paddings innerWidth hero-container flexCenter">
          {/* Left */}
          <div className="flexColStart hero-left" >
            <div className="hero-title">
              <div className="orange-circle" />
              <motion.h1 
              initial={{ y: '2rem', opacity: 0 }}
              animate={{y:0, opacity: 1}}
              transition = {{
                duration: 2,
                type: 'spring'
              }}>
              Discover <br /> Most Suitable <br /> Property
              </motion.h1>
            </div>
            <div className="hero-des flexColStart secondaryText">
              <span>Find a variety of properties that suits you easily</span>
              <span>Forget all difficulties in finding a residence for you</span>
            </div>
            <div className="flexCenter search-bar">
              <HiLocationMarker style={{color: 'blue'}} size={25} />
              <input type="text" />
              <button className="button">Search</button>
            </div>
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={2} /> 
                  <span>+</span>
                </span>
                <span className='secondaryText'>Premium Products</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1950} end={2000} duration={2} />
                  <span>+</span>
                </span>
                <span className='secondaryText mni'  >Happy Customers</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp end={28}/>
                  <span>+</span>
                </span>
                <span className='secondaryText' >Award winnigs</span>
              </div>
            </div>
          </div> 
          {/* Right */}
          <div className="hero-right flexCenter">
              <motion.div 
              inherit={{x: '7rem', opacity:0}}
              animate={{x: 0, opacity:1}}
              transition = {{
                duration: 2,
                type: 'spring'
              }}
              >
              <div className="image-container">
                <img src="./hero-image.png" alt="" />
              </div>
              </motion.div>
          </div>
        </div>
    </section>
  )
}

export default Hero
