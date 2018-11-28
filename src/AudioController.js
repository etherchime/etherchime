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
  thisStory.audio.volume(thisStory.volume);
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

export function soften(storyKey, stories) {
  let allStories = stories.slice();
  let thisStory = allStories.find(s => s.key === storyKey);

  // Decrease this story's volume.
  if (thisStory.audio.volume() <= 0.0) return allStories;

  var newVolume = (thisStory.audio.volume() * 10 - 1) / 10;
  thisStory.audio.volume(newVolume);
  thisStory.volume = newVolume;

  return allStories;
}

export function louden(storyKey, stories) {
  let allStories = stories.slice();
  let thisStory = allStories.find(s => s.key === storyKey);

  // Decrease this story's volume.
  if (thisStory.audio.volume() >= 1.0) return allStories;

  var newVolume = (thisStory.audio.volume() * 10 + 1) / 10;
  thisStory.audio.volume(newVolume);
  thisStory.volume = newVolume;

  return allStories;
}

function AudioController(props) {
	return (
		<div className="audio-controller buttons is-centered">
		  <a title={"Play " + props.title} aria-label={"Play " + props.title} className={"button-play button" + (props.isPlaying === false ? "" : " is-hidden")} tabIndex="0" onClick={(e) => props.play(e)} onKeyPress={(e) => props.play(e)}>
		    <span className="icon is-small">
		      <i className="fa fa-play"></i>
		    </span>
		  </a>
      <a title={"Pause " + props.title} aria-label={"Pause " + props.title} className={"button-pause button" + (props.isPlaying === true ? "" : " is-hidden")} tabIndex="0" onClick={(e) => props.pause(e)} onKeyPress={(e) => props.pause(e)}>
        <span className="icon is-small">
          <i className="fa fa-pause"></i>
        </span>
      </a>
      <a title={"Stop " + props.title} aria-label={"Stop " + props.title} className={"button-stop button" + (props.isPlaying === true ? "" : " is-hidden")} tabIndex="0" onClick={(e) => props.stop(e)} onKeyPress={(e) => props.stop(e)}>
        <span className="icon is-small">
          <i className="fa fa-stop"></i>
        </span>
      </a>
      <a title="Decrease music volume" 
        aria-label="Decrease music volume" 
        className="button-soften button"
        tabIndex="0" 
        onClick={(e) => props.soften(e)} 
        onKeyPress={(e) => props.soften(e)}
        disabled={props.volume <= 0}>
        <span className="icon is-small">
          <i className="fa fa-volume-down"></i>
        </span>
      </a>
      <a title="Increase music volume" 
        aria-label="Increase music volume" 
        className="button-louden button"
        tabIndex="0" 
        onClick={(e) => props.louden(e)} 
        onKeyPress={(e) => props.louden(e)}
        disabled={props.volume >= 1}>
        <span className="icon is-small">
          <i className="fa fa-volume-up"></i>
        </span>
      </a>
      <a title={"Download " + props.title} aria-label={"Download " + props.title} className="button" tabIndex="0" href={props.downloadUrl} target="_blank">
        <span className="icon is-small">
          <i className="fa fa-download"></i>
        </span>
      </a>
		</div>
	);
}

export default AudioController;