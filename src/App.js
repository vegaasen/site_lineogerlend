import React, { Component, Fragment } from 'react';
import NavComponent from './structure/NavComponent';
import FooterComponent from './structure/FooterComponent';
import BackdropComponent from './backdrop/BackdropComponent';
import InformationComponent from './information/InformationComponent';
import WishlistsComponent from './wishlist/WishlistsComponent';
import ContactComponent from './contact/ContactComponent';
import TeaserComponent from './teaser/TeaserComponent';
import Container from './structure/Container';
import SectionComponent from './SectionComponent';
import RSVPComponent from './information/RSVPComponent';

import './App.css';
import 'typeface-great-vibes';
import 'typeface-dosis';

class App extends Component {
  render () {
    return (
      <Fragment>
        <div className="App">
          <NavComponent/>
          <BackdropComponent/>
          <InformationComponent/>
          <TeaserComponent image='/images/teaser1.jpeg' teaser='yep' caption='yep' margin={false}/>
          <Container green={true}>
            <div>
              <SectionComponent title="Svar utbedes" white={true}/>
              <RSVPComponent/>
            </div>
          </Container>
          <Container>
            <WishlistsComponent/>
          </Container>
          <ContactComponent/>
          <FooterComponent/>
        </div>
      </Fragment>
    );
  }
}

export default App;
