import { Howl, Howler } from 'howler';
import React, { Component } from 'react';
import './AudioController.css';

class AudioController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storyTitle: props.storyTitle,
      isPlaying: false,
      volumeLevel: 0.5,
      audio: new Howl({
        src: [ props.audioUrls[0] ],
        format: ['wav'],
        autoplay: false,
        loop: true,
        volume: 0.5
      }),
      playId: null,
      html5: true,
      audioUrls: props.audioUrls
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    //this.rewind = this.rewind.bind(this);
    //this.fastForward = this.fastForward.bind(this);
    this.soften = this.soften.bind(this);
    this.louden = this.louden.bind(this);
  }

  play(e) {
    e.preventDefault();

    // Use the the click version of this function should user hit enter.
    var key = e.which || e.keyCode;
    if (key === 13)  {
      e.target.click();
      return
    }

    this.setState({
      isPlaying: true
    });

    var thisPlayId = this.state.playId;
    Howler._howls
      .filter(function(howl, index) {
        return howl._sounds[0]._id !== thisPlayId;
      }).forEach(howl => howl.stop());

    this.setState({
      playId: this.state.audio.play()
    });
  }

  pause(e) {
    e.preventDefault();

    // Use the the click version of this function should user hit enter.
    var key = e.which || e.keyCode;
    if (key === 13)  {
      e.target.click();
      return
    }

    this.setState({
      isPlaying: false
    });

    this.state.audio.pause();
  }

  /*rewind(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }*/

  /*fastForward(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }*/

  soften(e) {
    e.preventDefault();

    // Use the the click version of this function should user hit enter.
    var key = e.which || e.keyCode;
    if (key === 13)  {
      e.target.click();
      return
    }
    
    if (this.state.audio.volume <= 0.0) return;

    var newVolume = (Howler.volume() * 10 - 1) / 10;
    Howler.volume(newVolume);
    //this.state.audio.volume = (this.state.audio.volume * 10 - 1) / 10;
    /*this.setState((prevState) => {
      return { volumeLevel: (prevState.volumeLevel * 10 - 1) / 10 }
    });*/
  }

  louden(e) {
    e.preventDefault();
    
    // Use the the click version of this function should user hit enter.
    var key = e.which || e.keyCode;
    if (key === 13)  {
      e.target.click();
      return
    }
    
    if (this.state.audio.volume >= 1.0) return;

    var newVolume = (Howler.volume() * 10 + 1) / 10;
    Howler.volume(newVolume);
    //this.state.audio.volume = (this.state.audio.volume * 10 + 1) / 10;
    /*this.setState((prevState) => {
      return { volumeLevel: (prevState.volumeLevel * 10 + 1) / 10 }
    });*/
  }

	render() {
		return (
			<p className="audio-controller buttons is-centered">
        {/*<a className="button" onClick={this.rewind}>
          <span className="icon is-small">
            <i className="fa fa-fast-forward fa-flip-horizontal"></i>
          </span>
        </a>*/}
			  <a title={"Play or pause " + this.state.storyTitle} aria-label={"Play or pause " + this.state.storyTitle} className="button-play-pause button" tabIndex="0" onClick={this.state.isPlaying ? this.pause : this.play} onKeyPress={this.state.isPlaying ? this.pause : this.play}>
			    <span className="icon is-small">
			      <i className={"fa " + (this.state.isPlaying ? "fa-pause" : "fa-play")}></i>
			    </span>
			  </a>
			  {/*<a className="button" onClick={this.fastForward}>
			    <span className="icon is-small">
			      <i className="fa fa-fast-forward"></i>
			    </span>
			  </a>*/}
        <a title="Decrease music volume" aria-label="Decrease music volume" className="button" tabIndex="0" onClick={this.soften} onKeyPress={this.soften} disabled={this.state.volumeLevel <= 0.0}>
          <span className="icon is-small">
            <i className="fa fa-volume-down"></i>
          </span>
        </a>
        <a title="Increase music volume" aria-label="Increase music volume" className="button" tabIndex="0" onClick={this.louden} onKeyPress={this.louden} disabled={this.state.volumeLevel >= 1.0}>
          <span className="icon is-small">
            <i className="fa fa-volume-up"></i>
          </span>
        </a>
        <a title={"Download " + this.state.storyTitle} aria-label={"Download " + this.state.storyTitle} className="button" tabIndex="0" href={this.state.audioUrls[1]} target="_blank" download={this.state.title}>
          <span className="icon is-small">
            <i className="fa fa-download"></i>
          </span>
        </a>
			</p>
		);
	}
}

export default AudioController;