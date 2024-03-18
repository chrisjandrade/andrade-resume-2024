
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveSkills } from 'reducers/skillsSlice';
import style from './Skills.module.scss';

function Stars({ score }) {

  // why doesn't reactjs like Array(variable).fill().map 
  // i have to do it this more verbose way
  const full = Math.floor(score),
    half = Math.floor(score) !== score ? 1 : 0,
    empty = Math.floor(5 - score);

  const fullStars = [];
  for (let i = 0; i < full; i++) {
    fullStars.push(true);
  }

  const halfStars = [];
  for (let i = 0; i < half; i++) {
    halfStars.push(true);
  }

  const emptyStars = [];
  for (let i = 0; i < empty; i++) {
    emptyStars.push(true);
  }

  return (
    <div>
      { fullStars.map((_, idx) => <i className="fa fa-star" key={idx} />) }
      { halfStars.map((_, idx) => <i className="fa fa-star-half-o" key={idx} />) }
      { emptyStars.map((_, idx) => <i className="fa fa-star-o" key={idx} />)}
    </div>
  )
}

export default function Skills() {

  const dispatch = useDispatch();

  useEffect(() => void(dispatch(retrieveSkills())), [dispatch]);
  const skills = useSelector(state => state.skills.data);

  return (
    <div className={style.Skills}>
      <h3>SELECTED SKILLS</h3>
      { 
        skills.map(({ title, score }) => 
          <div className={ style.Skill} key={ title }>{ title } <Stars score={score}/></div>) 
      }
    </div>
  );
}