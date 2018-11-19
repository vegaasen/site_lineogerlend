import * as React from 'react';
import Countdown from 'react-countdown-now';
import './countdown.css';

const CountdownTimer = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return "🎉";
    } else {
      return <div className='clock'>
        <div className='box'>
          <div>{days}</div>
          <span>Dager</span>
        </div>
        <div className='box'>
          <div>{hours}</div>
          <span>Timer</span>
        </div>
        <div className='box'>
          <div>{minutes}</div>
          <span>Minutt</span>
        </div>
        <div className='box'>
          <div>{seconds}</div>
          <span>Sekund</span>
        </div>
      </div>;
    }
  };
  return <div className='count-down-clock'>
    <Countdown date={Date.now() + 150000} renderer={renderer} />
  </div>;
};

export default CountdownTimer