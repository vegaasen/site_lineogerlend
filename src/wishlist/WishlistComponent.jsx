import * as React from 'react';

export default class WishlistComponent extends React.Component {

  render () {
    return (
      <div className={'wishlist ' + (this.props.type)}>
        <h1>{this.props.title}</h1>
        <a href={this.props.link.to}>{this.props.link.caption}</a>
      </div>
    );
  }

}