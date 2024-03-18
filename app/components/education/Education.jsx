import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveEducation } from 'reducers/educationSlice';
import style from './Education.module.scss';

export default function Education() {
  const dispatch = useDispatch();

  useEffect(() => void(dispatch(retrieveEducation())), [dispatch]);
  const education = useSelector((state) => state.education.data);

  return (
    <div className={style.Education}>
      <h3>EDUCATION</h3>
      {
        education.map(({ degree, school, location, date }) => (
          <div className={style.Container} key={degree}>
            <div><i className="fa fa-graduation-cap" /><strong>{ degree }</strong></div>
            <div>{ school }</div>
            <div><i className="fa fa-map-marker" />{ location }</div>
            <div><i className="fa fa-calendar-check-o" />{ date }</div>
          </div>
        ))
      }
    </div>
  )
}