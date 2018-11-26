import * as React from 'react';
import SectionComponent from '../SectionComponent';
import EventComponent from './EventComponent';
import Container from '../structure/Container';
import './information.scss';

const events = [
  {
    title: 'Vielse Vang kirke',
    location: {
      caption: 'Vangsvegen 358, 2322 Ridabu',
      link: 'https://goo.gl/maps/Ct33Zi3u3Km',
    },
    when: '17 August 2019, 15:00',
    description: '(Erlend! trenger tekster! :P)',
    image: '/images/placement/vangkirka.jpg',
  },
  {
    title: 'Bryllaupsfest Staur Gård 🎉',
    location: {
      caption: 'Vestbygdvegen 226, 2312 Ottestad',
      link: 'https://goo.gl/maps/maVSb6hyoWH2',
    },
    when: '17 August 2019, 16:30',
    description: '(Erlend! trenger tekster! :P)',
    image: '/images/placement/staur.jpg',
  },
];

export default class InformationComponent extends React.Component {

  render () {
    return (
      <>
        <Container>
          <div id='timeandplace'>
            <SectionComponent title='Tid & sted'/>
            {events.map((event, i) => <EventComponent key={i} {...event}/>)}
          </div>
        </Container>
      </>
    )
  }

}