import React,{useRef} from 'react'
import classes from './About.module.css'
const About = () => {
  const div = useRef(null);
  return (
    <div className={classes.about} id="about">
      <p className={classes.bigText}>About me</p>
      <div className={classes.line}></div>
      <p className={classes.smallText}>Here you will find more personal information abut me, what i do,
        and my skills in terms of programming and tech.
      </p>
      <p className={classes.mediumText}>Get to know me</p>
      <p className={classes.smallText}>
        I'm a <b>Frontend Web Developer,</b> based in <i>Lagos, Nigeria</i>, I enjoy building the Front-end of Websites and Web Applications that leads to the overall success of the product or service.
        Check out some of my works in the <b>Projects</b> section.
        <br /> <br />
        I also like sharing content related to the stuffs that I have learned over the years in <b>Web Development</b> in order to help others in the Dev Community.
        Feel free to Follow me on my <a href="#">Twitter</a> or connect on <a href="#">LinkedIn</a> where I post useful <b>Web Development</b> and Programming contents.
        <br /> <br />
        I'm open to <b>Job Opportunities</b> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, please don't hesitate to <b>Contact Me</b>.
      </p>
    </div>
  )
}

export default About