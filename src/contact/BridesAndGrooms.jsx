import * as React from 'react';
import Person from './Person';
import './bridesandgrooms.scss';

const forlovede = [
  {name: 'Thea Tomter', title: 'Forlover', image: '/images/people/thea.jpg', social: {facebook: '', twitter: ''}},
  {name: 'Ragnhild Granli', title: 'Forlover', image: '/images/people/raggen.jpg', imageTop: '-159px', social: {facebook: '', twitter: ''}},
  {name: 'Thomas Mathiassen', title: 'Forlover', image: '/images/people/thomas.jpg', social: {facebook: '', twitter: ''}},
  {name: 'Vegard Aasen', title: 'Forlover', image: '/images/people/vegard.jpg', social: {facebook: '', twitter: ''}},
];

const toastmaster = {
  name: 'Hans Henrik',
  title: 'Toastmaster 🍾',
  description: `
  For innmelding av taler og lignende, kontakt Hans Henrik.
  `,
  image: '/images/people/hansh2.jpg',
  social: {},
};

export default class BridesAndGrooms extends React.PureComponent {

  render () {
    return (
      <div id='toastmaster'>
        <div className='tabs'>
          <Toastmaster/>
          <Bridespeople/>
        </div>
      </div>
    );
  }

}

export class Bridespeople extends React.PureComponent {

  render () {
    return <div className='persons'>{forlovede.map((forlover, i) => <Person key={i} {...forlover}/>)}</div>;
  }

}

const Toastmaster = props => <Person {...toastmaster} huge={true}/>;