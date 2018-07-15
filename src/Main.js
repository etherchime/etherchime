import React, { Component } from 'react';
import './Main.css';
import StoryView from './StoryView';
import StoryMenu from './StoryMenu';

class Main extends Component {
  render() {
    return (
      <section className="section columns">
        <div id="main-content" className="column is-four-fifths">
        </div>
        <div className="column is-one-fifth">
          <StoryMenu />
        </div>
      </section>
    );
  }
}

export default Main;
