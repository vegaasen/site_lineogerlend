import React, { Component } from 'react';
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
import * as ReactGA from 'react-ga';
import CountdownTimer from './countdown/CountdownTimer';
import 'typeface-great-vibes';
import 'typeface-dosis';

import './App.scss';

const initializeReactGA = () => {
  ReactGA.initialize('UA-129862709-1');
  ReactGA.pageview('/index.html');
  console.info('Initializing GA')
};

initializeReactGA();

class App extends Component {
  render () {
    return (
      <>
        <div className="App" id='home'>
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
      </>
    );
  }
}

export default App;
