import * as React from 'react';
import './teaser.scss';

const TeaserComponent = props => {
  const bold = props.bold === undefined ? true : props.bold;
  const margin = props.margin === undefined ? true : props.margin;
  return (
    <div className='teaser' style={{backgroundImage: `url(${props.image})`, margin: (margin ? '20px 0' : '0'), minHeight: (props.teaser ? props.height ? props.height : '' : props.height ? props.height : '30vh'), backgroundPosition: props.position ? props.position : '52% -96%', filter: props.filter ? `grayscale(${props.filter})` : 'grayscale(100%)'}}>
      <div className='container'>
        <h2 style={{fontWeight: (bold ? 'bold' : 'normal')}}>
          {props.teaser && <span>{props.teaser}</span>}
          {props.caption}
        </h2>
        <span className='teaser--sub_caption'>{props.subCaption}</span>
      </div>
    </div>
  );
};

export default TeaserComponent