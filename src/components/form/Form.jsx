import React, { useState } from 'react';
import axios from 'axios';
import classes from './Form.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send email using the email sending service
      const response = await axios.post('http://localhost:3000/send-email', {
        name,
        email,
        message
      });
      console.log(response.data); // Assuming the API returns a success message

      // Reset the form after submitting
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error
    }
  };

  return (
    <div className={classes.form}>
      <form onSubmit={handleFormSubmit} className={classes.formCon}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="John Doe"
          required
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Yourself@email.com"
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Enter your message"
          required
        ></textarea>
        <button className={classes.btn} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
