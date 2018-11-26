import * as React from 'react';
import BridesAndGrooms from './BridesAndGrooms';
import SectionComponent from '../SectionComponent';
import Container from '../structure/Container';
import './contact.scss';

export default class ContactComponent extends React.Component {

  render () {
    return (
      <div>
        <Container gray={true}>
          <div className='grooming' id='toastmaster'>
            <SectionComponent title='Toastmaster & Forlovere'/>
            <BridesAndGrooms/>
          </div>
        </Container>
      </div>
    );
  }

}