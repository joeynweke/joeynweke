import React from 'react'
import classes from './ContactBtn.module.css';
import scrollToDivContact from '../utils/scroll';

const ContactBtn = () => {
  return (
    <div className={classes.contact}>
      <button onClick={() => scrollToDivContact('contact')} className={classes.btn}>Contact</button>
    </div>
  )
}

export default ContactBtn