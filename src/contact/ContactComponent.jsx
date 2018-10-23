import * as React from 'react';
import './contact.css';
import Person from './Person';
import BridesAndGrooms from './BridesAndGrooms';
import SectionComponent from '../SectionComponent';
import Container from '../structure/Container';

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
        <div className='contact'>
          <Person name='berlend'/>
          <Person name='lindus'/>
        </div>
      </div>
    );
  }

}