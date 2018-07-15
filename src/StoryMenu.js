
import React, { Component } from 'react';
import './StoryMenu.css';
import Story from './Story'

function playAudio()
{
  var audio = document.getElementById("player");
  audio.play();
}

function pauseAudio()
{
  var audio = document.getElementById("player");
  audio.pause();
}

function loudenAudio()
{
  var audio = document.getElementById("player");
  audio.volume += 0.1
}

function softenAudio()
{
  var audio = document.getElementById("player");
  audio.volume -= 0.1
}

class StoryMenu extends Component {
  render()
  {
    return (
      <aside className="menu ">
        <br /><p class="menu-label has-text-centered">
          Now Listening To:
        </p>
        <Story 
          audioId="1ahlcrwApJpLUXOM7FevR6tyZSOzC36ov"
          imageId="1dYeYZd7qYA72U1AZ6Kc6_nQAxLbVLvtK"
          title="Sage of Summer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
          />
        <audio id="player" src="https://drive.google.com/uc?export=download&id=1ahlcrwApJpLUXOM7FevR6tyZSOzC36ov">
        </audio>
        <div>
          <button onClick={playAudio}>Play</button> 
          <button onClick={pauseAudio}>Pause</button> 
          <button onClick={loudenAudio}>Vol+</button> 
          <button onClick={softenAudio}>Vol-</button> 
        </div>
      </aside>
    );
  }
}

export default StoryMenu;