import * as React from 'react';
import * as ReactGA from 'react-ga';

const WishlistComponent = props => {
  const {type, title} = props;
  const wishlist = `wishlist-${title}`;
  return (
    <>
      {type.includes('simple') ? <SimpleWishlistComponent {...props}/> :
        <div className={'wishlist ' + (type)} style={{background: `url(${props.image})`, backgroundPosition: 'center', backgroundSize: props.size, backgroundRepeat: 'no-repeat'}}>
          <div className='bottom'>
            <h1>{props.title}</h1>
            {props.link.to && <span>
              <ReactGA.OutboundLink eventLabel={wishlist} to={props.link.to} target='_blank'>
                Til ønskelisten
              </ReactGA.OutboundLink>
            </span>}
          </div>
        </div>
      }
    </>
  );
};

const SimpleWishlistComponent = props => {
  return (
    <div className={'wishlist simple'}>
      <h1>
        {props.title}<br/>
        <small>{props.description}</small>
      </h1>
    </div>
  );
};

export default WishlistComponent