import React from 'react';
import './Message.scss'

const Message = props => {
  return (
    <div className={'message ' + (props.white ? 'message--white' : '')}>
      <div className='message--internal'>
        <span role='img'>{props.icon}</span> {props.message}
      </div>
    </div>
  );
};

export default Message