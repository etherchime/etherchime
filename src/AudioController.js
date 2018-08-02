import { Howl, Howler } from 'howler';
import React, { Component } from 'react';
import './AudioController.css';

class AudioController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playRef: React.createRef(),
      pauseRef: React.createRef(),
      storyTitle: props.storyTitle,
      volumeLevel: 0.5,
      audio: new Howl({
        src: [ props.audioUrls[0] ],
        format: ['wav'],
        autoplay: false,
        loop: true,
        volume: 1
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

    var thisPlayId = this.state.playId;
    Howler._howls
      .filter(function(howl, index) {
        return howl._sounds[0]._id !== thisPlayId;
      }).forEach(howl => howl.stop());

    var pauseButtons = document.getElementsByClassName("button-pause");
    [].forEach.call(pauseButtons, function(p) { p.classList.add("is-hidden"); });

    var playButtons = document.getElementsByClassName("button-play");
    [].forEach.call(playButtons, function(p) { p.classList.remove("is-hidden"); });

    this.state.playRef.current.classList.add("is-hidden");
    this.state.pauseRef.current.classList.remove("is-hidden");

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

    this.state.audio.pause();

    this.state.playRef.current.classList.remove("is-hidden");
    this.state.pauseRef.current.classList.add("is-hidden");
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
    
    var softenButtons = document.getElementsByClassName("button-soften");
    if (this.state.volumeLevel <= 0.0) {
      [].forEach.call(softenButtons, function(s) { s.setAttribute("disabled", "disabled"); });
      return;
    }
    [].forEach.call(softenButtons, function(s) { s.removeAttribute("disabled"); });
    var loudenButtons = document.getElementsByClassName("button-louden");
    [].forEach.call(loudenButtons, function(l) { l.removeAttribute("disabled"); });

    this.setState((prevState) => {
      var newVolume = (prevState.volumeLevel * 10 - 1) / 10;
      Howler.volume(newVolume);
      return { volumeLevel: newVolume }
    });
  }

  louden(e) {
    e.preventDefault();
    
    // Use the the click version of this function should user hit enter.
    var key = e.which || e.keyCode;
    if (key === 13)  {
      e.target.click();
      return
    }

    var loudenButtons = document.getElementsByClassName("button-louden");
    if (this.state.volumeLevel >= 1.0) {
      [].forEach.call(loudenButtons, function(l) { l.setAttribute("disabled", "disabled"); });
      return;
    }
    [].forEach.call(loudenButtons, function(l) { l.removeAttribute("disabled"); });
    var softenButtons = document.getElementsByClassName("button-soften");
    [].forEach.call(softenButtons, function(s) { s.removeAttribute("disabled"); });
    
    this.setState((prevState) => {
      var newVolume = (prevState.volumeLevel * 10 + 1) / 10;
      Howler.volume(newVolume);
      return { volumeLevel: newVolume }
    });
  }

	render() {
		return (
			<p className="audio-controller buttons is-centered">
        {/*<a className="button" onClick={this.rewind}>
          <span className="icon is-small">
            <i className="fa fa-fast-forward fa-flip-horizontal"></i>
          </span>
        </a>*/}
			  <a ref={this.state.playRef} title={"Play " + this.state.storyTitle} aria-label={"Play " + this.state.storyTitle} className="button-play button" tabIndex="0" onClick={this.play} onKeyPress={this.play}>
			    <span className="icon is-small">
			      <i className="fa fa-play"></i>
			    </span>
			  </a>
        <a ref={this.state.pauseRef} title={"Pause " + this.state.storyTitle} aria-label={"Pause " + this.state.storyTitle} className="button-pause button is-hidden" tabIndex="0" onClick={this.pause} onKeyPress={this.pause}>
          <span className="icon is-small">
            <i className="fa fa-pause"></i>
          </span>
        </a>
			  {/*<a className="button" onClick={this.fastForward}>
			    <span className="icon is-small">
			      <i className="fa fa-fast-forward"></i>
			    </span>
			  </a>*/}
        {/*<a title="Decrease music volume" aria-label="Decrease music volume" className="button-soften button" tabIndex="0" onClick={this.soften} onKeyPress={this.soften}>
          <span className="icon is-small">
            <i className="fa fa-volume-down"></i>
          </span>
        </a>
        <a title="Increase music volume" aria-label="Increase music volume" className="button-louden button" tabIndex="0" onClick={this.louden} onKeyPress={this.louden}>
          <span className="icon is-small">
            <i className="fa fa-volume-up"></i>
          </span>
        </a>*/}
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