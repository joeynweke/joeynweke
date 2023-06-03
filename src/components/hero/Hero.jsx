import React from 'react';
import classes from './Hero.module.css';
const Hero = () => {
  return (
    <div className={classes.hero}>
      <p className={classes.bigText}>Hello there, I' m <br></br> Joey Nweke</p>
      <p className={classes.smallText}>A Frontend Web Developer, focused on building the Frontend of Websites and Web Applications using thats leads to growth of overall product.</p>
    </div>
  )
}

export default Hero