import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './nav.css'

export default class NavComponent extends React.Component {

  render () {
    return (
      <nav>
        <div className='menu'>
          <div className='item tc'>
            <ul className='nav--inline'>
              <li><a href='#timeandplace'>Tid &amp; sted</a></li>
              <li><a href='#rsvp'>Svar utbedes</a></li>
              <li><a href='#wishlist'>Ønskeliste</a></li>
            </ul>
          </div>
          <div className='item tc'>
            <h1>
              <span className='first'>L</span>
              <span><FontAwesomeIcon icon={faHeart}/>️</span>
              <span className='second'>E</span>
            </h1>
          </div>
          <div className='item tr'>
            <ul className='nav--inline la'>
              <li><a href='#toastmaster'>Toastmaster &amp; forlovere</a></li>
              <li><a href='#spendTheNight'>Overnatting</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}