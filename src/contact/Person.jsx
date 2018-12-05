import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './person.scss';

const Person = (props) => {
  const extraStyles = props.imageTop ? {backgroundSize: '72%', backgroundColor: "#6f5349"} : {};
  return (
    <div className={props.huge ? 'person person--huge' : 'person'}>
      <div className='person--image' style={{backgroundImage: `url('${props.image}')`, backgroundRepeat: 'no-repeat', backgroundPositionY: props.imageTop, ...extraStyles, ...props.extraStyles}}></div>
      <div className='person--details'>
        <h3>{props.name}</h3>
        <span>{props.title}</span>
        {props.description && <p dangerouslySetInnerHTML={{ __html: props.description }}></p>}
        <ul className='social-links'>
          <li><a href='#'><FontAwesomeIcon className='social-element' icon={faFacebookF} /></a></li>
          <li><a href='#'><FontAwesomeIcon className='social-element' icon={faTwitter} /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Person