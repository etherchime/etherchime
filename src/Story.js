import React, { Component } from 'react';
import './Story.css';
import AudioController from './AudioController'

class Story extends Component {
  render() {
    var card = <div className="story card has-background-grey-lighter">
        <div className="card-image">
          <figure className="image is-16by9">
            <img src={this.props.imageUrl} alt={this.props.imageDescription} />
          </figure>
          <div className="title is-grouped-centered content is-overlay">
            <AudioController audioUrl={this.props.audioUrl} />
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <h2 className="title is-4">{this.props.title}</h2>
              <p className="subtitle is-6">{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>;
    return card;
  }
}

export default Story;