import React, { Component } from 'react';
import './App.css';
import StoryView from './StoryView';
import StoryMenu from './StoryMenu';

class App extends Component {
  render() {
    return (
      <div className="columns is-gapless">
	      <div className="column is-four-fifths has-background-primary">
	        <header id="header"></header>
	        <main id="main"></main>
	        <footer id="footer" className="footer has-background-grey-darker"></footer>
	      </div>
	      <div className="column is-one-fifth has-background-white">
	        <section id="menu"></section>
	      </div>
    </div>
    );
  }
}

export default App;
