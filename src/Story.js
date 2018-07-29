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
            <AudioController storyTitle={this.props.title} audioUrls={this.props.audioUrls} />
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <h2 className="title is-4">{this.props.title}</h2>
              <p className="subtitle is-6">{this.props.description}</p>
              <ul className="content level">
                <div className="level-item level-right"><span>
                  <li className="is-inline has-text-grey-light"><i className="fa fa-lg fa-share"></i></li>&nbsp;
                  <li className="is-inline"><a title="Share on Twitter" aria-label="Share on Twitter" href={"https://twitter.com/home?status=" + window.location.protocol + "//" + window.location.host + "/music?story=" + this.props.alias}>
                    <i className="fa fa-2x fa-twitter-square"></i>
                  </a></li>&nbsp;
                  <li className="is-inline"><a title="Share on Facebook" aria-label="Share on Facebook" href={"https://www.facebook.com/sharer/sharer.php?u=" + window.location.protocol + "//" + window.location.host + "/music?story=" + this.props.alias}>
                    <i className="fa fa-2x fa-facebook-square"></i>
                  </a></li>&nbsp;
                  <li className="is-inline"><a title="Share on Pinterest" aria-label="Share on Pinterest" href={"https://pinterest.com/pin/create/button/?url=" + window.location.protocol + "//" + window.location.host + "/music?story=" + this.props.alias + "&media=" + this.props.imageUrl + "&description=" + this.props.description}>
                    <i className="fa fa-2x fa-pinterest-square"></i>
                  </a></li></span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>;
    return card;
  }
}

export default Story;