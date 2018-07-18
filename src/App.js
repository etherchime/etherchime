import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="columns is-gapless">
	      <div id="mainContent" className="column has-background-primary">
	        <header id="header"></header>
	        <main id="main" className="section"></main>
	        <footer id="footer" className="footer has-background-grey-darker"></footer>
	      </div>
	      <div id="storyMenu" className="column is-hidden is-one-fifth has-background-white">
	        <section id="menu"></section>
	      </div>
    </div>
    );
  }
}

export default App;
