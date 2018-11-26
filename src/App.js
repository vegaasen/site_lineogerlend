import React, { Component, Fragment } from 'react';
import NavComponent from './structure/NavComponent';
import FooterComponent from './structure/FooterComponent';
import BackdropComponent from './backdrop/BackdropComponent';
import InformationComponent from './information/InformationComponent';
import WishlistsComponent from './wishlist/WishlistsComponent';
import ContactComponent from './contact/ContactComponent';
import TeaserComponent from './teaser/TeaserComponent';
import Container from './structure/Container';
import RSVPComponent from './information/RSVPComponent';
import DrivingDirections from './information/DrivingDirections';

import './App.scss';
import 'typeface-great-vibes';
import 'typeface-dosis';
import CountdownTimer from './countdown/CountdownTimer';

class App extends Component {
  render () {
    return (
      <Fragment>
        <div className="App">
          <NavComponent/>
          <BackdropComponent/>
          <InformationComponent/>
          <TeaserComponent image='/images/backdrop4.jpg' teaser='' margin={false} position='52% -85%'/>
          <Container green={true}>
            <RSVPComponent/>
          </Container>
          <Container>
            <WishlistsComponent/>
          </Container>
          <TeaserComponent image='/images/teaser2.jpg' teaser='' margin={false} position='52% -153%' gray={false} filter='50%' height='50vh'/>
          <ContactComponent/>
          <CountdownTimer/>
          <Container green={true}>
            <DrivingDirections/>
          </Container>
          <FooterComponent/>
        </div>
      </Fragment>
    );
  }
}

export default App;
