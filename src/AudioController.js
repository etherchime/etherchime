import React, { Component } from 'react';
import './AudioController.css';

class AudioController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      volumeLevel: 0.5
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.rewind = this.rewind.bind(this);
    this.fastForward = this.fastForward.bind(this);
    this.soften = this.soften.bind(this);
    this.louden = this.louden.bind(this);
  }

  play(e) {
    e.preventDefault();

    this.setState({
      isPlaying: true
    });
  }

  pause(e) {
    e.preventDefault();

    this.setState({
      isPlaying: false
    });
  }

  rewind(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  fastForward(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  soften(e) {
    e.preventDefault();
    
    if (this.state.volumeLevel <= 0.0) return;

    this.setState((prevState) => {
      return { volumeLevel: (prevState.volumeLevel * 10 - 1) / 10 }
    });
  }

  louden(e) {
    e.preventDefault();
    
    if (this.state.volumeLevel >= 1.0) return;

    this.setState((prevState) => {
      return { volumeLevel: (prevState.volumeLevel * 10 + 1) / 10 }
    });
  }

	render() {
		return (
			<p className="buttons">
        <a className="button" onClick={this.rewind}>
          <span className="icon is-small">
            <i className="fa fa-fast-forward fa-flip-horizontal"></i>
          </span>
        </a>
			  <a className="button" onClick={this.state.isPlaying ? this.pause : this.play}>
			    <span className="icon is-small">
			      <i className={"fa " + (this.state.isPlaying ? "fa-pause" : "fa-play")}></i>
			    </span>
			  </a>
			  <a className="button is-hidden" onClick={this.pause}>
			    <span className="icon is-small">
			      <i className="fa fa-pause"></i>
			    </span>
			  </a>	  
			  <a className="button" onClick={this.fastForward}>
			    <span className="icon is-small">
			      <i className="fa fa-fast-forward"></i>
			    </span>
			  </a>
        <a className="button" onClick={this.soften} 
          disabled={this.state.volumeLevel <= 0.0}>
          <span className="icon is-small">
            <i className="fa fa-volume-down"></i>
          </span>
        </a>
        <a className="button" onClick={this.louden}
          disabled={this.state.volumeLevel >= 1.0}>
          <span className="icon is-small">
            <i className="fa fa-volume-up"></i>
          </span>
        </a>
			</p>
		);
	}
}

export default AudioController;