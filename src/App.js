import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="columns is-gapless">
	      <div id="appContainer" className="column">
	        <div id="navRoot"></div>
	        <main id="mainRoot" className="has-background-primary"></main>
	        <div id="footerRoot" className="has-background-grey-darker"></div>
	      </div>
	      <div id="asideRoot" className="column is-hidden is-one-fifth has-background-white"></div>
    	</div>
    );
  }
}

export default App;
