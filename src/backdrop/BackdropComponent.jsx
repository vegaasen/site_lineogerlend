import * as React from 'react';
import { Fragment } from 'react';
import './backdrop.scss';

const BackdropComponent = () => {
    return (
      <Fragment>
        <div className='backdrop'>
          <div className='hero'></div>
          <div className='announcement'>
            <div className='identifier'>
              <h2 className='who'>Line &amp; Erlend</h2>
              <div className='alternative'>
                <h4>17.08.2019</h4>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
};

export default BackdropComponent