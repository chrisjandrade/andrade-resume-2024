'use client';

import classNames from "classnames";
import { useSelector } from "react-redux";
import styles from './Loading.module.scss';

const LOADING_FLAGS = Object.freeze([
  'education',
  'experience',
  'info',
  'links',
  'skills'
]);

export function Loading() {

  // there's probably a better way to do this
  // need to research combineSlices 
  // and remove this logic from the component
  let loading = useSelector(state => {
    return LOADING_FLAGS.map(key => state[key].loading).
      some(l => l);
  });

  const loadingCls = classNames({
    [styles.Loading]: true,
    [styles.visible]: loading
  });

  const iconCls = classNames({
    fa: true,
    'fa-spinner': true,
    [styles.loadingIcon]: true
  });

  return (
    <div className={loadingCls}>
      <i className={iconCls} aria-hidden="true" />&nbsp;Loading...
    </div>
  );

}
