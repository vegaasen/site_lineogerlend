import * as React from 'react';

export default class WishlistComponent extends React.Component {

  render () {
    return (
      <div className={'wishlist ' + (this.props.type)} style={{background: `url(${this.props.image})`, backgroundPosition: 'center', backgroundSize: this.props.size, backgroundRepeat: 'no-repeat'}}>
        <div className='bottom'>
          <h1>{this.props.title}</h1>
          <span><a href={this.props.link.to}>Til ønskelisten</a></span>
        </div>
      </div>
    );
  }

}