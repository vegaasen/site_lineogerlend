import React from 'react';
import './rsvp.css';

const RSVPComponent = props => (
  <div className='rsvp'>
    <div className='form'>
      <p>Husk å svare innen 24 desember 2019.</p>
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
        <textarea className="form-control" name="notes" placeholder="Kommentar 😊"></textarea>
      </div>
      <div className='controls'>
        <button type="submit" className="submit">Send svar!</button>
        <p>eller</p>
        <p>Line: 472 85 575 &nbsp;&nbsp; | &nbsp;&nbsp; Erlend: 909 98 299</p>
      </div>
    </div>
  </div>
);

export default RSVPComponent