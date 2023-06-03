import React, {useRef} from 'react'
import classes from './Contact.module.css';
import Form from '../form/Form';

const Contact = () => {
  const ref = useRef(null);
  return (
    <div className={classes.contact} id="contact">
      <p className={classes.bigText}>Contact</p>
      <div className={classes.line}></div>
      <p className={classes.smallText}>
      Feel free to contact me through the form below and I will get back to you as soon as possible.
      </p>
      <Form />
    </div>
  )
}

export default Contact