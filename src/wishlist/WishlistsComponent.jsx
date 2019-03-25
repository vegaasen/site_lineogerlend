import * as React from 'react';
import WishlistComponent from './WishlistComponent';
import SectionComponent from '../SectionComponent';
import './wishlist.scss';

const wishlists = [
  {title: 'Illums', type: 'reference', link: {to: 'https://www.illumsbolighus.no/giftlist?giftlist=671746d3', caption: 'Illums'}, image: '/images/wishlists/illums.png', size: '70%'},
  {title: 'Christiania Glassmagasin', type: 'reference', link: {to: 'https://www.cg.no/weddinglist/index/shared/weddinglist_id/11529', caption: 'Christiania Glassmagasin'}, image: '/images/wishlists/christiania_glassmagasin.png', size: '70%'},
  {title: '💰 Pengegåve 💰', description: 'Til Bryllupsreise & Gavekort hos Illums/Christiania', type: 'simple'},
];

export default class WishlistsComponent extends React.Component {
  render () {
    return (
      <div className='wishlist__wrapper' id='wishlist'>
        <SectionComponent title='Ønskelister'/>
        <section className='wishlists'>
          {wishlists.map((wishlist, i) => <WishlistComponent key={i} {...wishlist} />)}
        </section>
      </div>
    );
  }
}