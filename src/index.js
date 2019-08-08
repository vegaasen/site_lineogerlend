import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Logging from './services/Logging';

Logging.Remote.initialize();

document.title = 'Line og Erlend gifter seg 17.08.2019 ❤️';

ReactDOM.render(
  <>
    {(!!window.MSInputMethodContext && !!document.documentMode) && <div className='ie-sucks'>
      Det ser ut som du bruker en litt eldre versjon av Internet Explorer.
      Siden kan oppleves som ufullstendig. Prøv nyeste Internet Explorer, Firefox eller Chrome for en bedre opplevelse.
    </div>}
    <App/>
  </>
  , document.getElementById('root'));