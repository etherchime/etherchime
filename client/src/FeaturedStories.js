import React, { Component } from 'react';
import './FeaturedStories.css';
import bulmaCarousel from 'bulma-carousel';
import FeaturedStory from './FeaturedStory';
import AudioController, { play, pause, stop, soften, louden } from './AudioController';
import StoriesData from './StoriesData20181223.json';
import { onEnter } from './utilities';
import { Howl } from 'howler';
import { Link } from 'react-router-dom';

class FeaturedStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: [],
      storyIndex: 0
    };

    this.navigateWest = this.navigateWest.bind(this);
    this.navigateEast = this.navigateEast.bind(this);
  }

  componentWillMount() {
    this.setState({ 
      stories: StoriesData.filter(function(story, index) {
        if (!story.tags || story.tags.length === 0) return false;

        story.audio = new Howl({
          src: [ story.audioUrls[0] ],
          format: ['wav'],
          autoplay: false,
          loop: true,
          volume: 0.8
        });
        story.isPlaying = false;
        story.volume = 0.8;

        return story.tags.indexOf("featured") !== -1;
      })
    });
  }

  componentDidMount() {
    bulmaCarousel.attach();

    this.setState((prevState) => {
      return {
        storyIndex: 0,
      };
    })
  }

  navigateWest(e) {
    e.preventDefault();
    e.target.click();

    this.setState((prevState) => {
      var index = (prevState.storyIndex - 1) < 0 ? prevState.stories.length - 1 : prevState.storyIndex - 1;
      return {
        storyIndex: index
      };
    });
  }

  navigateEast(e) {
    e.preventDefault();
    e.target.click();

    this.setState((prevState) => {
      var index = (prevState.storyIndex + 1) >= prevState.stories.length ? 0 : prevState.storyIndex + 1;
      return {
        storyIndex: index
      };
    });
  }

  actionUpdate(e, storyKey, action) {
    e.preventDefault();

    // Use the the click version of this function should user hit enter.
    var key = e.which || e.keyCode;
    if (key === 13)  {
      e.target.click();
      return
    }

    var updatedStories = action(storyKey, this.state.stories);

    this.setState({
      stories: updatedStories
    });
  }

  render() {
    var currentStory = this.state.stories[this.state.storyIndex];
    var carouselItems = this.state.stories.map((story, index) => {
      return (
        <FeaturedStory
          key={"featured-stories-" + story.key}
          imageUrl={story.imageUrl}
          imageDescription={story.imageDescription} />
      );
    });
    var audioControllers = this.state.stories.map((story, index) => {
        return (
          <span className={(this.state.storyIndex === index) ? "" : "is-hidden"} key={"featured-audio-" + story.key}>
            <AudioController 
              title={story.title}
              play={(e) => this.actionUpdate(e, story.key, play)}
              pause={(e) => this.actionUpdate(e, story.key, pause)}
              stop={(e) => this.actionUpdate(e, story.key, stop)}
              soften={(e) => this.actionUpdate(e, story.key, soften)}
              louden={(e) => this.actionUpdate(e, story.key, louden)}
              downloadUrl={story.audioUrls[1]}
              isPlaying={story.isPlaying}
              volume={story.volume} />
          </span>
        );
    });

    return (
      <div className="carousel carousel-animated carousel-animate-fade">
        <div className="carousel-item-title has-text-centered is-size-4 is-overlay-desktop">
          <h2><Link to={"/music?story=" + (currentStory && currentStory != null ? currentStory.key : "")}>{currentStory && currentStory != null ? currentStory.title : ""}</Link></h2>
        </div>
        <div className='carousel-container'>
          {carouselItems}
        </div>
        <div className="carousel-navigation is-overlay-desktop levels is-mobile">
          <div title="Listen to previous piece" aria-label="Listen to previous piece" role="button" className="carousel-nav-left" tabIndex="0" onClick={this.navigateWest} onKeyPress={(e) => { onEnter(e, this.navigateWest); }}>
            <i className="fa fa-chevron-left"></i>
          </div>
          {audioControllers}
          <div title="Listen to next piece" aria-label="Listen to next piece" role="button" className="carousel-nav-right" tabIndex="0" onClick={this.navigateEast} onKeyPress={(e) => { onEnter(e, this.navigateEast); }}>
            <i className="fa fa-chevron-right"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedStories;