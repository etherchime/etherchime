import React, { Component } from 'react';
import './Story.css';
import AudioController from './AudioController'

class Story extends Component {
  render() {
    var card = <div className="card has-background-white-ter">
        <div className="card-image">
          <figure className="image is-16by9">
            <img src={"https://drive.google.com/uc?export=view&id=" + this.props.imageId} alt={this.props.imageDescription} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.props.title}</p>
              <p className="subtitle is-6">{this.props.description}</p>
            </div>
          </div>

          <div className="content">
            <AudioController />
          </div>
        </div>
      </div>;
    return card;
  }
}

export default Story;