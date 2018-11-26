import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove } from '@fortawesome/free-solid-svg-icons'
import './SectionComponent.scss';

const SectionComponent = props => {
  return (
    <div className='section'>
      <div className={props.white ? 'section-title white' : 'section-title'}>
        <div className="vertical-line">
          <span>
            <FontAwesomeIcon icon={faDove} size='2x' />
          </span>
        </div>
        <h2>{props.title}</h2>
      </div>
    </div>
  )
};

export default SectionComponent;