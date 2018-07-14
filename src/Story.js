import React, { Component } from 'react';
import './Story.css';

class Story extends Component {
  render() {
    var card = <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={"https://drive.google.com/uc?export=view&id=" + this.props.imageId} alt="Placeholder image" />
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
            {/*<audio controls="controls">
              <source src={"https://drive.google.com/uc?export=download&id=" + this.props.audioId} type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>*/}
            <a className="button">Play</a>
            <a className="button">Pause</a>
            <a className="button">Download</a>
          </div>

          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
              </span>
            </p>
            <p className="card-footer-item">
              <span>
                Share on <a href="#">Facebook</a>
              </span>
            </p>
          </footer>
        </div>
      </div>;
    return card;
  }
}

export default Story;