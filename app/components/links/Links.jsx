'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveLinks } from 'reducers/linksSlice';
import style from './Links.module.scss';

export default function Links() {

  const dispatch = useDispatch();
  
  useEffect(() => void(dispatch(retrieveLinks())), [dispatch]);
  const links = useSelector((state) => state.links.data);

  let clicking = false;

  /**
   * On the fly click handler that makes the link behave like a link.
   * I do this to prevent web-scrapers from ripping my e-mail address
   * from the source code.  
   */
  function onClick(evt) {
    if (!clicking) {
      clicking = true;
      const aEl = evt.target,
        href = atob(aEl.getAttribute('data-link'));

      aEl.setAttribute('href', href);
      aEl.click();
      aEl.removeAttribute('href');
      clicking = false;
    }
  }

  return (
    <div className={style.Links}>
      <ul>
        { // prevent scraping by hiding href content, and adding it on the fly
          links.map(({ href, icon, text }) =>
            <li key={href}><a onClick={ onClick } href={ `#${text}` } target="_blank" rel="noopener noreferrer" data-link={ btoa(href) }><i className={icon} />{text}</a></li>)
        }
      </ul>
    </div>
  )
}
