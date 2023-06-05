import React,{useRef} from 'react';
import classes from './Project.module.css';
import CaseStudyBtn from '../caseStudyBtn/CaseStudyBtn';
import SeeCodeBtn from '../seeCodeBtn/SeeCodeBtn';

const Project = () => {

  const projectObj = [
    {
      key: 1,
      name: 'Tran-Z Courier',
      img: '/images/front.png',
      description: 'Tran Z courier is a successful open source i created'
    },
    {
      key: 2,
      name: 'Tran-Z Courier',
      img: '/images/html.png',
      description: 'Tran Z courier is a successful open source i created'
    },
    {
      key: 3,
      name: 'Tran-Z Courier',
      img: '/images/night.png',
      description: 'Tran Z courier is a successful open source i created'
    },
    {
      key: 4,
      name: 'Tran-Z Courier',
      img: '/images/smiley.png',
      description: 'Tran Z courier is a successful open source i created'
    },
  ];

  const ProjectArr = () => {
    return(
      projectObj.map((item) => {
        return(
          
            <div className={classes.projectCon} key={item.key}>
            <img className={classes.img} src={item.img} alt="" />
            <div>
            <p className={classes.name}>{item.name}</p>
            <p className={classes.smallText}>{item.description}</p>
            </div>
            <CaseStudyBtn />
            <br />
            <SeeCodeBtn />
            <br /><br />
          </div>
        )
      })
    )
  }
  return (
    <div className={classes.wrapper}  id="projects">
      <div className={classes.project}>
        <p className={classes.bigText}>Projects</p>
        <div className={classes.line}></div>
        <p className={classes.smallText}>Here you will find more personal and clients projects that I created, with each project containing its own <b>source code</b>.
        </p>
        
        <div className={classes.wrap}>
        <ProjectArr/>
        </div>
      </div>
    </div>
  )
}

export default Project