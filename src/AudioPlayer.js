import React, { Component } from 'react';
import './AudioPlayer.css';

class AudioPlayer extends Component {
	play(audioSource) {
	  var audio = document.getElementById("audioPlayer");

	  if (audioSource) {
	  	audio.src = "https://drive.google.com/uc?export=download&id=" + audioSource;
	  }
	  
	  audio.play();
	}

	pause() {
	  var audio = document.getElementById("audioPlayer");
	  audio.pause();
	}

	louden() {
	  var audio = document.getElementById("audioPlayer");
	  audio.volume += 0.1
	}

	soften() {
	  var audio = document.getElementById("audioPlayer");
	  audio.volume -= 0.1
	}

  render() {
    return (
	  	<audio id="audioPlayer"></audio>
    );
  }
}

export default AudioPlayer;