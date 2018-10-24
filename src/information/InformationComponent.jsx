import * as React from 'react';
import './information.css';
import SectionComponent from '../SectionComponent';
import EventComponent from './EventComponent';
import Container from '../structure/Container';

const events = [
  {
    title: 'Vielse Vang kirke',
    location: {
      caption: 'Vangsvegen 358, 2322 Ridabu',
      link: 'https://goo.gl/maps/Ct33Zi3u3Km',
    },
    when: '17 August 2019, 15:00',
    description: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    image: '/images/placement/vangkirka.jpg',
  },
  {
    title: 'Bryllaupsfest Staur Gård 🎉',
    location: {
      caption: 'Vestbygdvegen 226, 2312 Ottestad',
      link: 'https://goo.gl/maps/maVSb6hyoWH2',
    },
    when: '17 August 2019, 16:30',
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
            <SectionComponent title='Tid & sted'/>
            {events.map(event => <EventComponent {...event}/>)}
          </div>
        </Container>
      </>
    )
  }

}