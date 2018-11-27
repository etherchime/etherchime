import React from 'react';
import './AudioController.css';

export function play(storyKey, stories) {
  let allStories = stories.slice();
  let thisStory = allStories.find(s => s.key === storyKey);

  // Return if already playing.
  if (thisStory.isPlaying === true) return allStories;

  // Stop all other stories' music.
  allStories.forEach((story, index) => {
    if (story.key === storyKey) return;

    story.audio.stop();
    story.isPlaying = false;
  });

  // Play this story's music.
  thisStory.audio.play();
  thisStory.isPlaying = true;

  return allStories;
}

export function pause(storyKey, stories) {
  let allStories = stories.slice();
  let thisStory = allStories.find(s => s.key === storyKey);

  // Return if already paused.
  if (thisStory.isPlaying === false) return allStories;

  // Pause this story's music.
  thisStory.audio.pause();
  thisStory.isPlaying = false;

  return allStories;
}

export function stop(storyKey, stories) {
  let allStories = stories.slice();
  let thisStory = allStories.find(s => s.key === storyKey);

  // Stop this story's music.
  thisStory.audio.stop();
  thisStory.isPlaying = false;

  return allStories;
}

// soften(e) {
//   e.preventDefault();

//   // Use the the click version of this function should user hit enter.
//   var key = e.which || e.keyCode;
//   if (key === 13)  {
//     e.target.click();
//     return
//   }
  
//   var softenButtons = document.getElementsByClassName("button-soften");
//   if (this.state.volumeLevel <= 0.0) {
//     [].forEach.call(softenButtons, function(s) { s.setAttribute("disabled", "disabled"); });
//     return;
//   }
//   [].forEach.call(softenButtons, function(s) { s.removeAttribute("disabled"); });
//   var loudenButtons = document.getElementsByClassName("button-louden");
//   [].forEach.call(loudenButtons, function(l) { l.removeAttribute("disabled"); });

//   this.setState((prevState) => {
//     var newVolume = (prevState.volumeLevel * 10 - 1) / 10;
//     Howler.volume(newVolume);
//     return { volumeLevel: newVolume }
//   });
// }

// louden(e) {
//   e.preventDefault();
  
//   // Use the the click version of this function should user hit enter.
//   var key = e.which || e.keyCode;
//   if (key === 13)  {
//     e.target.click();
//     return
//   }

//   var loudenButtons = document.getElementsByClassName("button-louden");
//   if (this.state.volumeLevel >= 1.0) {
//     [].forEach.call(loudenButtons, function(l) { l.setAttribute("disabled", "disabled"); });
//     return;
//   }
//   [].forEach.call(loudenButtons, function(l) { l.removeAttribute("disabled"); });
//   var softenButtons = document.getElementsByClassName("button-soften");
//   [].forEach.call(softenButtons, function(s) { s.removeAttribute("disabled"); });
  
//   this.setState((prevState) => {
//     var newVolume = (prevState.volumeLevel * 10 + 1) / 10;
//     Howler.volume(newVolume);
//     return { volumeLevel: newVolume }
//   });
// }

function AudioController(props) {
	return (
		<div className="audio-controller buttons is-centered">
      {/*<a className="button" onClick={this.rewind}>
        <span className="icon is-small">
          <i className="fa fa-fast-forward fa-flip-horizontal"></i>
        </span>
      </a>*/}
		  <a title={"Play " + props.storyTitle} aria-label={"Play " + props.storyTitle} className={"button-play button" + (props.isPlaying === false ? "" : " is-hidden")} tabIndex="0" onClick={(e) => props.play(e)} onKeyPress={(e) => props.play(e)}>
		    <span className="icon is-small">
		      <i className="fa fa-play"></i>
		    </span>
		  </a>
      <a title={"Pause " + props.storyTitle} aria-label={"Pause " + props.storyTitle} className={"button-pause button" + (props.isPlaying === true ? "" : " is-hidden")} tabIndex="0" onClick={(e) => props.pause(e)} onKeyPress={(e) => props.pause(e)}>
        <span className="icon is-small">
          <i className="fa fa-pause"></i>
        </span>
      </a>
      <a title={"Stop " + props.storyTitle} aria-label={"Stop " + props.storyTitle} className={"button-stop button" + (props.isPlaying === true ? "" : " is-hidden")} tabIndex="0" onClick={(e) => props.stop(e)} onKeyPress={(e) => props.stop(e)}>
        <span className="icon is-small">
          <i className="fa fa-stop"></i>
        </span>
      </a>
      {/*<a title="Decrease music volume" aria-label="Decrease music volume" className="button-soften button" tabIndex="0" onClick={(e) => props.soften(e)} onKeyPress={(e) => props.soften(e)}>
        <span className="icon is-small">
          <i className="fa fa-volume-down"></i>
        </span>
      </a>
      <a title="Increase music volume" aria-label="Increase music volume" className="button-louden button" tabIndex="0" onClick={(e) => props.louden(e)} onKeyPress={(e) => props.louden(e)}>
        <span className="icon is-small">
          <i className="fa fa-volume-up"></i>
        </span>
      </a>*/}
      <a title={"Download " + props.storyTitle} aria-label={"Download " + props.storyTitle} className="button" tabIndex="0" href={props.downloadUrl} target="_blank">
        <span className="icon is-small">
          <i className="fa fa-download"></i>
        </span>
      </a>
		</div>
	);
}

export default AudioController;