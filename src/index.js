import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-129862709-1');

ReactDOM.render(<App />, document.getElementById('root'));