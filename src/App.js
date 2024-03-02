import React from 'react';
import cosmogliaLogo from './cosmoglia-logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cosmogliaLogo} className="cosmoglia-logo" alt="cosmoglia-logo" />
        <p>
          Cosmoglia App deployed on IPFS through Fleek.
        </p>
        <a
          className="App-link"
          href="https://github.com/cosmoglia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About Cosmoglia!
        </a>
      </header>
    </div>
  );
}

export default App;
