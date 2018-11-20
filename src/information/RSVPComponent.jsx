import React from 'react';
import './rsvp.css';

export default class RSVPComponent extends React.Component {

  constructor () {
    super();
    this.state = {
      name: '',
      mail: '',
      coming: 'yes',
      comment: '',
    }
  }

  changeValue = (what, where) => {
    this.setState({[what]: where.target.value});
  };

  sendMail = () => window.location = `mailto:e_rostad@hotmail.com?subject=BRYLLUP⛷&body=Navn: ${this.state.name}%0D%0AMail: ${this.state.mail}%0D%0AKommer: ${this.state.coming}%0D%0A%0D%0AKommentarer: ${this.state.comment}`;

  render () {
    return (
      <div className='rsvp' id='rsvp'>
        <div className='form'>
          <p>Husk å svare innen 24 desember 2019.</p>
          <div className='inputs'>
            <div><input type="text" name="name" className="form-control" onChange={e => this.changeValue('name', e)} placeholder="Ditt navn"/></div>
            <div><input type="email" name="name" className="form-control" onChange={e => this.changeValue('mail', e)} placeholder="Din epost"/></div>
            <div><input type="text" name="name" className="form-control" placeholder="Gjester"/></div>
            <div>
              <select className="form-control" name="events" onChange={e => this.changeValue('coming', e)}>
                <option disabled defaultChecked={true}>Jeg kommer</option>
                <option value='yes'>Ja</option>
                <option value='no'>Nei</option>
              </select>
            </div>
          </div>
          <div className='textArea'>
            <textarea className="form-control" name="notes" placeholder="Kommentar/Allergier el.l 😊" onChange={e => this.changeValue('comment', e)}></textarea>
          </div>
          <div className='controls'>
            <button type="submit" disabled={this.state.name === ''} className={"submit" + (this.state.name === '' ? ' disabled' : '')} onClick={this.sendMail}>Send svar!</button>
            <p>eller</p>
            <p>Line: 472 85 575 &nbsp;&nbsp; | &nbsp;&nbsp; Erlend: 909 98 299</p>
          </div>
        </div>
      </div>
    );
  }
};