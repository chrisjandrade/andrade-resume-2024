'use client';

import { useMediaQuery } from '@react-hook/media-query';
import classNames from 'classnames';
import Education from 'components/education/Education';
import Links from 'components/links/Links';
import Skills from 'components/skills/Skills';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveInfo } from 'reducers/infoSlice';
import styles from './Sidebar.module.scss';

export default function Sidebar() {

  const dispatch = useDispatch(),
    { name, title, focus } = useSelector(state => state.info.data),
    isMobile = useMediaQuery('only screen and (max-width: 480px)'),
    [mobile, setMobile] = useState(false);

  useEffect(() => {
    dispatch(retrieveInfo()); 
    setMobile(isMobile);
  }, [dispatch, isMobile]);

  const sidebarCls = classNames({
    [styles.Sidebar]: true,
    [styles.SidebarMobile]: mobile
  });

  return (
    <div className={sidebarCls}>
      <div className={styles.Header}>
        <h1>{name}</h1>
        <h2>
          {title}<br />
          <em>{focus}</em>
        </h2>
        <Links />
      </div>
      <Education />
      <Skills />
    </div>
  )
}