
import React, { Component } from 'react';
import './StoryMenu.css';
import Story from './Story'
import AudioPlayer from './AudioPlayer'

class StoryMenu extends Component {
  render()
  {
    return (
      <aside className="menu">
        <br /><p className="menu-label has-text-centered">
          Now Listening To:
        </p>
        <Story 
          audioId="1ahlcrwApJpLUXOM7FevR6tyZSOzC36ov"
          imageId="1dYeYZd7qYA72U1AZ6Kc6_nQAxLbVLvtK"
          title="Sage of Summer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
          />
      </aside>
    );
  }
}

export default StoryMenu;