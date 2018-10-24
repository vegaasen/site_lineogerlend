import * as React from 'react';
import WishlistComponent from './WishlistComponent';
import SectionComponent from '../SectionComponent';
import './wishlist.css';

const wishlists = [
  {title: 'Illums', link: {to: '', caption: 'Illums'}, image: '/images/wishlists/illums.png'},
  {title: 'Kitchn', link: {to: '', caption: 'Illums'}, image: '/images/wishlists/kitchn.jpg'},
  {title: 'Christiania Glassmagasin', link: {to: '', caption: 'Christiania Glassmagasin'}, image: '/images/wishlists/christiania_glassmagasin.png'},
];

export default class WishlistsComponent extends React.Component {
  render () {
    return (
      <div>
        <SectionComponent title='Ønskelister'/>
        <section className='wishlists'>
          {wishlists.map(wishlist => <WishlistComponent {...wishlist} />)}
        </section>
      </div>
    );
  }
}