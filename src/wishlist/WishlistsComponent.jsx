import * as React from 'react';
import WishlistComponent from './WishlistComponent';
import SectionComponent from '../SectionComponent';
import './wishlist.css';

export default class WishlistsComponent extends React.Component {
  render () {
    return (
      <div>
        <SectionComponent title='Ønskelister'/>
        <section className='wishlists'>
          <WishlistComponent title='yepyep' link={{to: '', caption: ''}}/>
          <WishlistComponent title='yepyep' link={{to: '', caption: ''}}/>
          <WishlistComponent title='yepyep' link={{to: '', caption: ''}}/>
        </section>
      </div>
    );
  }
}