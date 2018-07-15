import React, { Component } from 'react';
import './Main.css';
import StoryView from './StoryView';
import StoryMenu from './StoryMenu';

class Main extends Component {
  render() {
    return (
      <div className="columns">
        <section id="main-content" className="section column is-four-fifths has-background-primary"></section>
        <section className="column is-one-fifth">
          <StoryMenu />
        </section>
      </div>
    );
  }
}

export default Main;
