import * as React from 'react';
import WishlistComponent from './WishlistComponent';
import SectionComponent from '../SectionComponent';
import './wishlist.scss';
import Message from '../Message';

const wishlists = [
  {title: 'Illums', link: {to: '', caption: 'Illums'}, image: '/images/wishlists/illums.png', size: '70%'},
  {title: 'Kitchn', link: {to: '', caption: 'Illums'}, image: '/images/wishlists/kitchn.jpg', size: '40%'},
  {title: 'Christiania Glassmagasin', link: {to: '', caption: 'Christiania Glassmagasin'}, image: '/images/wishlists/christiania_glassmagasin.png', size: '70%'},
];

export default class WishlistsComponent extends React.Component {
  render () {
    return (
      <div className='wishlist__wrapper' id='wishlist'>
        <SectionComponent title='Ønskelister'/>
        <Message message='Listene kommer, så STAY TUNED' icon='😎'/>
        <section className='wishlists'>
          {wishlists.map((wishlist, i) => <WishlistComponent key={i} {...wishlist} />)}
        </section>
      </div>
    );
  }
}