import React from 'react'
  const scrollToDivContact = (id)=>{
    const violation = document.getElementById(id); 
    window.scrollTo({
      top:violation.offsetTop,
      behavior:"smooth"
  });
  }
export default scrollToDivContact;