import * as React from 'react';
import TeaserComponent from '../teaser/TeaserComponent';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.css';

export default class FooterComponent extends React.Component {
  render () {
    return (
      <div>
        <div className="back-to-top">
          <a href="#" className="back-to-top-btn"><span><FontAwesomeIcon icon={faArrowCircleUp} size='2x' /></span></a>
        </div>
        <TeaserComponent image='/images/footer1.jpeg' caption='yep' subCaption='- Line &amp; Erlend' bold={false} margin={false}/>
      </div>
    );
  }
}