import React, { Component } from 'react';
import './FeaturedStories.css';
import bulmaCarousel from 'bulma-carousel';
import AudioController from './AudioController';
import StoriesData from './StoriesData.json';

class FeaturedStories extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.navigate = this.navigate.bind(this);
  }

  componentWillMount()
  {
    this.setState({ stories: StoriesData.filter(function(story, index) {
      if (!story.tags || story.tags.length === 0) return false;

      return story.tags.indexOf("featured") !== -1;
    })});
  }

  componentDidMount()
  {
    bulmaCarousel.attach();
  }

  navigate(e) {
    e.preventDefault();

    var key = e.which || e.keyCode;
    if (key === 13) e.target.click();
  }

  render() {
    var carouselItems = this.state.stories.map((story, index) => {
      return (
        <React.Fragment key={"featured-" + story.key}>
          <div className='carousel-item has-background' key={"featured-stories-" + story.key}>
            <div className="carousel-item-title is-overlay has-text-white has-text-centered">
              <h2><a href={"/music?story=" + story.key}>{story.title}</a></h2>
            </div>
            <img className="is-background" src={story.imageUrl} alt={story.imageDescription} width="640" height="310" />
            <AudioController storyTitle={story.title} audioUrls={story.audioUrls} />
          </div>
        </React.Fragment>
      );
    });

    return (
      <div className="carousel carousel-animated carousel-animate-fade">
        <div className='carousel-container'>
          {carouselItems}
        </div>
        <div className="carousel-navigation is-overlay">
          <div title="Listen to previous piece" aria-label="Listen to previous piece" role="button" className="carousel-nav-left" tabIndex="0" onKeyPress={this.navigate}>
            <i className="fa fa-chevron-left"></i>
          </div>
          <div  title="Listen to next piece" aria-label="Listen to next piece" className="carousel-nav-right" tabIndex="0" onKeyPress={this.navigate}>
            <i className="fa fa-chevron-right"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedStories;