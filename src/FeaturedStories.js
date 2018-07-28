import React, { Component } from 'react';
import './FeaturedStories.css';
import bulmaCarousel from 'bulma-carousel';
import AudioController from './AudioController';
import StoriesData from './StoriesData.json';

class FeaturedStories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    var carouselItems = this.state.stories.map((story, index) => {
      return (
        <React.Fragment>
          <div className='carousel-item has-background' key={"featured-stories-" + story.key}>
            <img className="is-background" src={story.imageUrl} alt={story.imageDescription} width="640" height="310" />
            <AudioController audioUrls={story.audioUrls} />
            <div className="carousel-item-title level has-text-white">
              <div className="level-item">
                <h2><strong>{story.title}</strong></h2>
              </div>
            </div>
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
          <div className="carousel-nav-left">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <div className="carousel-nav-right">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedStories;