import * as React from 'react';
import Person from './Person';
import './bridesandgrooms.css';

export default class BridesAndGrooms extends React.PureComponent {

  constructor () {
    super();
    this.state = {current: 'grooms'}
  }

  selectType = type => this.setState({current: type});

  render () {
    return (
      <div>
        <div className='tabList'>
          <ul>
            <li onClick={() => this.selectType('grooms')}>Brudegutter</li>
            <li onClick={() => this.selectType('brides')}>Brudejenter</li>
          </ul>
        </div>
        <div className='tabs'>
          {this.state.current === 'grooms' ? <Grooms/> : <Brides/>}
        </div>
      </div>
    );
  }

}

export class Grooms extends React.PureComponent {

  render () {
    return (
      <div className='persons'>
        <Person name='hehe'/>
        <Person name='hehe'/>
        <Person name='hehe'/>
      </div>
    );
  }

}

export class Brides extends React.PureComponent {

  render () {
    return (
      <div className='persons'>
        <Person name='hehe'/>
        <Person name='hehe'/>
        <Person name='hehe'/>
      </div>
    );
  }

}