import React from 'react'
import classes from './ProjectBtn.module.css';
import scrollToDivContact from '../utils/scroll';
const ProjectBtn = () => {
  return (
    <div className={classes.project}>
      <button onClick={() => scrollToDivContact('projects')} className={classes.btn}>My Projects</button>
    </div>
  )
}

export default ProjectBtn