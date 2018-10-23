import { Fragment } from 'react';
import * as React from 'react';
import './backdrop.css';

export default class BackdropComponent extends React.Component {

  render () {
    return (
      <Fragment>
        <div className='backdrop'>
          <div className='hero'></div>
          <div className='announcement'>
            <div className='identifier'>
              <h2 className='who'>Line &amp; Erlend</h2>
              <div className='alternative'>
                <h4>Vi gifter oss</h4>
              </div>
            </div>
          </div>
          <div className='date'>
            <h4>Datoen ❤</h4>
            <span className="actual">11 AUG 2019</span>
          </div>
        </div>
      </Fragment>
    );
  }

}