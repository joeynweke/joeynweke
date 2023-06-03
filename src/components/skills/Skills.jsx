import React from 'react'
import classes from './Skills.module.css';

const skills = [
  {
    key: 1,
    name:'html'
  },
  {
    key: 2,
    name: 'css',
  },
  {
    key: 3,
    name: 'javascript'
  },
  {
    key: 4,
    name:'react'
  },
  {
    key: 5,
    name: 'seo',
  },
  {
    key: 6,
    name: 'sass'
  },
  {
    key: 7,
    name:'git'
  },
  {
    key: 8,
    name: 'github',
  },
  {
    key: 9,
    name: 'responsive design'
  },
  {
    key: 10,
    name:'express'
  },
  {
    key: 11,
    name: 'node js',
  },
  
]
    
const SkillsList = ({skills}) => {
  return(
    <div className={classes.flex}>
      {skills.map((item) => {
        return <p key={item.key}>{item.name}</p>
      })}
    </div>
  )
}
const Skills = () => {
  return (
    <div className={classes.skillsCon}>
      <p className={classes.mediumText}> My Skills</p>

      <SkillsList skills = {skills}/>
    </div>
  )
}

export default Skills