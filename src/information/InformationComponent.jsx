import * as React from 'react';
import './information.css';
import SectionComponent from '../SectionComponent';
import EventComponent from './EventComponent';
import Container from '../structure/Container';

const events = [
  {
    title: 'Vielsen',
    location: {
      caption: 'blabla',
      link: 'blabla',
    },
    when: 'Aug 21 2019, 13:00 - 15:00',
    description: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    image: '/images/placement/staur.jpg',
  },
  {
    title: 'Brullaupsfest 🎉',
    location: {
      caption: 'blabla',
      link: 'blabla',
    },
    when: 'Aug 21 2019, 13:00 - 15:00',
    description: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    image: '/images/placement/staur.jpg',
  },
];

export default class InformationComponent extends React.Component {

  render () {
    return (
      <>
        <Container>
          <div>
            <SectionComponent title='Viktige steder'/>
            {events.map(event => <EventComponent {...event}/>)}
          </div>
        </Container>
      </>
    )
  }

}