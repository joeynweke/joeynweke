import React,{useState, useRef, useImperativeHandle, forwardRef } from 'react';
import classes from './Header.module.css';
import scrollToDivContact from '../utils/scroll';
const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(true) 
  }
  const closeMenu = () => {
    setMenu(false)
  }

  const scrollToDivContact = (id)=>{
    const violation = document.getElementById(id); 
    window.scrollTo({
      top:violation.offsetTop,
      behavior:"smooth"
  });
    setMenu(false)
  };
  
  return (
    <div className={classes.headerCon} id='header'>
      <nav>
        <p id='header' onClick={() => scrollToDivContact('header')}>Joey Nweke</p>
        {
          menu ? 
        <span>
          <img onClick={closeMenu} src="./images/close.png" className={classes.headIcon} alt="menu" />
        </span>
        :
        <span>
          <img onClick={handleMenu} src="./images/menuIcon.png" className={classes.headIcon} alt="menu" />
        </span>
        }

        <div className={classes.linksHidden}>
          <a onClick={() => scrollToDivContact("about")}>About</a>
          <a  onClick={() => scrollToDivContact("projects")}>Projects</a>
          <a  onClick={() => scrollToDivContact("contact")}>Contact</a>
        </div>
      </nav>
      {
        menu ?
          <nav className={classes.links}>
            <a onClick={() => scrollToDivContact("about")}>About</a>
            <a  onClick={() => scrollToDivContact("projects")}>Projects</a>
            <a  onClick={() => scrollToDivContact("contact")}>Contact</a>
          </nav>
         : null
      }
      
    </div>
  )
}

export default Header