import * as React from 'react';
import TeaserComponent from '../teaser/TeaserComponent';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.scss';

const FooterComponent = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className="back-to-top">
        <a href="#top" className="back-to-top-btn"><span><FontAwesomeIcon icon={faArrowCircleUp} size='2x'/></span></a>
      </div>
      <TeaserComponent image='/images/footer1.jpeg' caption='gleder oss' subCaption='- Line &amp; Erlend ❤️' bold={false} margin={false} position='52% -60%' filter='50%'/>
      <div className='studio tc'>
        <a href='http://www.vegaasen.com' target='_blank' title='Vegard Aasen' rel="noopener noreferrer">vegaasen@webstep</a> {year}
      </div>
    </div>
  );
};

export default FooterComponent