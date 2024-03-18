'use client';

import { useMediaQuery } from '@react-hook/media-query';
import classNames from 'classnames';
import Experience from 'components/experience/Experience';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveInfo } from 'reducers/infoSlice';
import style from './Content.module.scss';

/**
 * The main body of the resume
 * @returns Content Component
 */
export default function Content() {

  const dispatch = useDispatch();

  useEffect(() => void(dispatch(retrieveInfo())), [dispatch]);
  const { objective } = useSelector(state => state.info.data);

  // use a media query to toggle mobile mode
  const contentCls = classNames({
    [style.Content]: true,
    [style.ContentMobile]: useMediaQuery('only screen and (max-width: 480px)')
  });

  return (
    <div className={ contentCls }>
      <h3>CAREER OBJECTIVE</h3>
      <p dangerouslySetInnerHTML={ { __html: objective} }></p>
      <h3>SELECTED WORK EXPERIENCE</h3>
      <Experience />
    </div>
  );

}