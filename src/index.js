import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Logging from './services/Logging';

Logging.Remote.initialize();

document.title = 'Line og Erlend gifter seg 17.08.2019 ❤️';

ReactDOM.render(<App/>, document.getElementById('root'));