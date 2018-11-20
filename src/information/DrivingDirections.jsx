import * as React from 'react';
import './drivingDirections.scss';

const DrivingDirections = () => {
  return (
    <div className='details' id='spendTheNight'>
      <div className='details--element details__left'>
        <h3>Staur gård</h3>
        <p>
          Vi håper flest mulig velger å overnatte på Staur gård hvor vi også overnatter.
          <br/>
          Da er brunsj dagen derpå inkludert i prisen.
          <br/>
          Overnatting her må bestilles <strong className='underline'>så fort som mulig</strong> og kan gjøres på:<br/>
          <a href="mailto:vertskap@staur.no">vertskap@staur.no</a>
          <br/>
          <a href="tel:415 71 222">415 71 222</a>
        </p>
        <p>
          For mer info se <a href="http://www.staur.no" target="_blank">staur.no</a>
        </p>
      </div>
      <div className='details--element details__right'>
        <h3>Låve i nærleiken</h3>
        <div>
          Noen andre alternativer:
          <br/>
          <ul>
            <li>Ein låve i nærleiken</li>
            <li>Scandic Hamar</li>
            <li>Clarion Astoria</li>
            <li>First Hotel Victoria</li>
          </ul>
          ...eller andre
        </div>
      </div>
    </div>
  );
};

export default DrivingDirections