import React, { Component } from 'react';
import './AudioPlayer.css';

class Audio extends Component {
	constructor(props) {
		super(props);
		this.play = function(audioSource) {
		  var audio = document.getElementById("audioPlayer");

		  if (audioSource) {
		  	audio.src = "https://drive.google.com/uc?export=download&id=" + audioSource;
		  }
		  
		  audio.play();
		}

		this.pause = function()
		{
		  var audio = document.getElementById("audioPlayer");
		  audio.pause();
		}

		this.louden = function()
		{
		  var audio = document.getElementById("audioPlayer");
		  audio.volume += 0.1
		}

		this.soften = function()
		{
		  var audio = document.getElementById("audioPlayer");
		  audio.volume -= 0.1
		}
	}

  render() {
    return (
	  	<audio id="audioPlayer"></audio>
    );
  }
}

export default Audio;