import React from 'react';
import { copy } from './utilities'
import './Story.css';
import AudioController from './AudioController';

function Story(props) {
  var card = (
    <div className="story card has-background-grey-lighter">
      <div className="card-image">
        <figure className="image is-16by9">
          <img src={props.imageUrl} alt={props.imageDescription} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <h2 className="title is-4">{props.title}</h2>
            <p className="subtitle is-6">{props.description}</p>
            <ul className="content level is-mobile">
              <div className="level-item level-left">
                <AudioController 
                  storyTitle={props.title} 
                  play={props.play}
                  pause={props.pause}
                  stop={props.stop}
                  soften={props.soften}
                  louden={props.louden}
                  downloadUrl={props.downloadUrl}
                  isPlaying={props.isPlaying} />
              </div>
              <div className="level-item level-right">
                <span className="social-links">
                  <li className="is-inline has-text-grey-light"><i className="fa fa-lg fa-share"></i></li>&nbsp;
                  <li className="is-inline"><a title="Share on Twitter" aria-label="Share on Twitter" href={"https://twitter.com/home?status=Check%20out%20this%20music%21%20" + window.location.protocol + "//" + window.location.host + "/music?story=" + props.alias + "%20%23etherchime"} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-2x fa-twitter-square"></i>
                  </a></li>&nbsp;
                  <li className="is-inline"><a title="Copy link to clipboard" aria-label="Copy link to clipboard" onClick={ () => copy(window.location.protocol + "//" + window.location.host + "/music?story=" + props.alias)} onKeyPress={ () => copy(window.location.protocol + "//" + window.location.host + "/music?story=" + props.alias)} tabIndex="0">
                    <i className="fa fa-2x fa-copy"></i>
                  </a></li>
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  return card;
}

export default Story;