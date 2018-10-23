import * as React from 'react';
import './teaser.css';

const TeaserComponent = props => {
  const bold = props.bold === undefined ? true : props.bold;
  const margin = props.margin === undefined ? true : props.margin;
  return (
    <div className='teaser' style={{backgroundImage: `url(${props.image})`, margin: (margin ? '20px 0' : '0')}}>
      <div className='container'>
        <h2 style={{fontWeight: (bold ? 'bold' : 'normal')}}>
          {props.teaser && <span>{props.teaser}</span>}
          {props.caption}
        </h2>
      </div>
    </div>
  );
};

export default TeaserComponent