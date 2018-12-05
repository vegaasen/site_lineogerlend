import React from 'react';
import './rsvp.scss';
import './drivingDirections.scss';
import SectionComponent from '../SectionComponent';
import Message from '../Message';

const persons = [
  {name: 'Erlend', contact: {mail: 'e_rostad@hotmail.com', phone: '+47 909 98 299'}},
  {name: 'Line', contact: {mail: 'lundbyline@gmail.com', phone: '+47 472 85 575'}},
];

const RSVPComponent = () => {
  return (
    <div id='rsvp'>
      <SectionComponent title="Svar utbedes" white={true}/>
      <div className='rsvp'>
        <div className='location-details'>
          {persons.map(person => (
            <div key={person.name} className='details--element'>
              <h1>{person.name}</h1>
              <p className="contact-points">
                <span><a href={'tel:' + person.contact.phone}>{person.contact.phone}</a></span>
                <span><a href={'mailto:' + person.contact.mail}>{person.contact.mail}</a></span>
              </p>
            </div>
          ))}
        </div>
        <Message message='Husk å svar innen 01.04.2019' icon='🎉' white={true}/>
      </div>
    </div>
  );
};

export default RSVPComponent