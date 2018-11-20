import * as React from 'react';
import BridesAndGrooms from './BridesAndGrooms';
import SectionComponent from '../SectionComponent';
import Container from '../structure/Container';
import './contact.css';

export default class ContactComponent extends React.Component {

  render () {
    return (
      <div>
        <Container gray={true}>
          <div className='grooming'>
            <SectionComponent title='Toastmaster & Forlovere'/>
            <BridesAndGrooms/>
          </div>
        </Container>
      </div>
    );
  }

}