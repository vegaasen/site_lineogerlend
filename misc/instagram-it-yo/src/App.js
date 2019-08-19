import React, { useState } from 'react';
import './App.css';
import Instagram from './Instagram';

const getInstagramz = () => fetch('http://localhost:3001/instagramz').then(data => {
  return data.json();
});

let loaded = false;

function App () {
  const [instagrams, setInstagrams] = useState({files: []});
  const [active, setActive] = useState('');
  if(!loaded) {
    getInstagramz().then(instagrams => {
      setInstagrams((instagrams));
      loaded = true;
      setActive(0);
    });
  }
  setTimeout(() => getInstagramz().then(instagrams => setInstagrams((instagrams))), 10 * 60000);
  setTimeout(() => setActive(active >= instagrams.files.length ? 0 : active + 1), 60000);
  return (
    <div className="App">
      <Instagram image={instagrams.files[active]}/>
    </div>
  );
}

export default App;
