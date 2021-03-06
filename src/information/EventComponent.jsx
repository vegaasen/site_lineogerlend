import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons'

export default class EventComponent extends React.Component {

  static defaultProps = {
    title: 'blabla',
    location: {
      caption: 'blabla',
      link: 'blabla',
    },
    when: 'Aug 21 2019, 13:00 - 15:00',
    description: 'blabla',
    image: '',
  };

  constructor (props) {
    super();
  }

  render () {
    return (
      <div className='event'>
        <div className='image'>
          <img src={this.props.image} alt={this.props.title}/>
        </div>
        <div className='details'>
          <h3>{this.props.title}</h3>
          <ul>
            <li><a href={this.props.location.link}><span className='event-icon'><FontAwesomeIcon icon={faMapMarker}/></span> {this.props.location.caption}</a></li>
            <li><span className='event-icon'><FontAwesomeIcon icon={faClock}/></span> {this.props.when}</li>
          </ul>
          <p dangerouslySetInnerHTML={{ __html: this.props.description }}/>
          <a href={this.props.location.link}>Vis på kart <FontAwesomeIcon icon={faAngleRight}/></a>
        </div>
      </div>
    )
  }

}