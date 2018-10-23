import React from 'react';
import './rsvp.css';

const RSVPComponent = props => (
  <div className='rsvp'>
    <div className='form'>
      <p>Please reserve before December 16th, 2019.</p>
      <div className='inputs'>
        <div><input type="text" name="name" className="form-control" placeholder="Ditt navn"/></div>
        <div><input type="email" name="name" className="form-control" placeholder="Din epost"/></div>
        <div><input type="text" name="name" className="form-control" placeholder="Gjester"/></div>
        <div>
          <select className="form-control" name="events">
            <option disabled selected>Jeg kommer</option>
            <option>Ja</option>
            <option>Nei</option>
          </select>
        </div>
      </div>
      <div className='textArea'>
        <textarea className="form-control" name="notes" placeholder="Din melding til oss"></textarea>
      </div>
      <div className='controls'>
        <button type="submit" className="submit">Send svar!</button>
      </div>
    </div>
  </div>
);

export default RSVPComponent