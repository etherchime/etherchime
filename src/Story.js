import React, { Component } from 'react';
import './Story.css';
import AudioController from './AudioController'

class Story extends Component {
  constructor() {
    super();

    this.copy = this.copy.bind(this);
  }

  copy(text) {
    //e.preventDefault();

    // Use the the click version of this function should user hit enter.
    /*var key = e.which || e.keyCode;
    if (key === 13)  {
      e.target.click();
      return
    }*/

    if (window.clipboardData && window.clipboardData.setData) {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      var copied = window.clipboardData.setData("Text", text);
      window.prompt("Link copied to clipboard", text);
      return copied;
    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        var copied = document.execCommand("copy");  // Security exception may be thrown by some browsers.
        window.prompt("Link copied to clipboard", text);
        return copied;
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }

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
                <div className="level-item level-right">
                  <span>
                    <li className="is-inline has-text-grey-light"><i className="fa fa-lg fa-share"></i></li>&nbsp;
                    <li className="is-inline"><a title="Share on Twitter" aria-label="Share on Twitter" href={"https://twitter.com/home?status=" + "Check%20out%20this%20music%21%20" + window.location.protocol + "//" + window.location.host + "/music?story=" + this.props.alias + "%20%23etherchime"} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-2x fa-twitter-square"></i>
                    </a></li>&nbsp;
                    <li className="is-inline"><a title="Share on Facebook" aria-label="Share on Facebook" href={"https://www.facebook.com/sharer/sharer.php?u=" + window.location.protocol + "//" + window.location.host + "/music?story=" + this.props.alias} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-2x fa-facebook-square"></i>
                    </a></li>&nbsp;
                    <li className="is-inline"><a title="Share on Pinterest" aria-label="Share on Pinterest" href={"https://pinterest.com/pin/create/button/?url=" + window.location.protocol + "//" + window.location.host + "/music?story=" + this.props.alias + "&media=" + this.props.imageUrl + "&description=" + this.props.description} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-2x fa-pinterest-square"></i>
                    </a></li>&nbsp;
                    <li className="is-inline"><a title="Copy link to clipboard" aria-label="Copy link to clipboard" onClick={ () => this.copy(window.location.protocol + "//" + window.location.host + "/music?story=" + this.props.alias)} onKeyPress={ () => this.copy(window.location.protocol + "//" + window.location.host + "/music?story=" + this.props.alias)}>
                      <i className="fa fa-2x fa-copy"></i>
                    </a></li>
                  </span>
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