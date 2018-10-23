import * as React from 'react';
import './person.css';

const Person = (props) => {
  const {small} = props;
  return (
    <div className='person'>
      {props.name}
    </div>
  );
};

export default Person