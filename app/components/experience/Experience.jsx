
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveExperience } from 'reducers/experienceSlice';
import style from './Experience.module.scss';

function Project({ project }) {
  return (
    <div className={style.Project}>
      <div className={style.projectName}>
        {project.title}
        <div className={style.projectInfo}>
          <i className="fa fa-map-marker" /> { project.where }
          <i className="fa fa-calendar-check-o" /> { project.from } - { project.to }
        </div>
        <ul>
          { project.details.map(detail => <li key={ detail }>{ detail }</li> )}
        </ul>
      </div>
    </div>
  )
}

function ExperienceRecord({ record }) {
  return (
    <div className={style.ExperienceRecord}>
      <div className={style.header}>
        <div className={style.title}>{record.title}</div>
        <div className={style.company}>
          {record.company}
          <div className={style.companyInfo}>
            <i className="fa fa-map-marker" /> { record.where }
            <i className="fa fa-calendar-check-o" /> { record.from } - { record.to }
          </div>
        </div>
      </div>
      {record.projects.map(project => <Project project={project} key={project.title}/>)}
    </div>
  )
}

export default function Experience() {

  const dispatch = useDispatch();

  useEffect(() => void(dispatch(retrieveExperience())), [dispatch]);
  const experiences = useSelector((state) => state.experience.data);

  return (
    <div className={style.Experience}>
      {experiences.map((record) => <ExperienceRecord record={record} key={record.company}/>)}
    </div>
  );
}