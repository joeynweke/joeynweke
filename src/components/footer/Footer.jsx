import React from 'react';
import classes from './Footer.module.css';

const socials = [

  {
    key: 1,
    name: 'twitter',
    img: './images/twitter.svg',
    link: 'https://twitter.com/jojothe_great'
  },
  {
    key: 2,
    name: 'Github',
    img: './images/github-sign.png',
    link: 'https://github.com/joeynweke'
  },
  
]

const openLink = (item) => {
  location.href = item.link
}

const SocialArr = () => {
  return(
    <div className={classes.socialCon}>
      {socials.map((item) => {
        return(
          <img onClick={() => openLink(item)} src={item.img} alt="" key={item.key}/>
        )
      })}
    </div>
  )
}
const Footer = () => {
  return (
    <div className={classes.footer}>
      <p className={classes.mediumText}>Socials</p>
     
      <SocialArr />
      <p className={classes.mediumText}>Joey Nweke</p>
      <p className={classes.smallText}>A Frontend Web Developer, focused on building the Frontend of Websites and Web Applications using thats leads to growth of overall product.
      </p>
      <br /> <br />
      <div className={classes.line}></div>
      <p className={classes.smallText}>
        &copy;Copyright 2023. Made by <b><a href='#header'>Joey Nweke </a></b>
      </p>
    </div>
  )
}

export default Footer