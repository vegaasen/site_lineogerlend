import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './nav.scss'
import './nav-burger.css'

export default class NavComponent extends React.Component {

  render () {
    return (
      <nav>
        <div className='menu-slapped'>
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id='burgerized'>
              <li><a href='#home'>Hjem</a></li>
              <li><a href='#timeandplace'>Tid &amp; sted</a></li>
              <li><a href='#rsvp'>Svar utbedes</a></li>
              <li><a href='#wishlist'>Ønskeliste</a></li>
              <li><a href='#toastmaster'>Toastmaster &amp; forlovere</a></li>
              <li><a href='#spendTheNight'>Overnatting</a></li>
            </ul>
          </div>
        </div>
        <div className='menu'>
          <div className='item tc'>
            <ul className='nav--inline'>
              <li><a href='#timeandplace'>Tid &amp; sted</a></li>
              <li><a href='#rsvp'>Svar utbedes</a></li>
              <li><a href='#wishlist'>Ønskeliste</a></li>
            </ul>
          </div>
          <div className='item item--mid tc'>
            <h1>L<FontAwesomeIcon icon={faHeart}/>️E</h1>
          </div>
          <div className='item tc'>
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