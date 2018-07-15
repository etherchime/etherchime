import React, { Component } from 'react';
import './Home.css';
import bulmaCarousel from 'bulma-carousel';
import bgImage from './0001.png';
import Story from './Story';
import Stories from './Stories.json';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      stories: []
    }
  }

  componentWillMount()
  {
    this.state.stories = Stories.filter(function(story, index) {
      if (!story.tags || story.tags.length === 0) return false;

      return story.tags.indexOf("featured") !== -1;
    });
  }

  componentDidMount()
  {
    bulmaCarousel.attach();
  }

  render() {
    var bgStyle = {
      background: "url('" + bgImage + "') center center",
      backgroundSize: "cover"
    }
    var carouselItems = this.state.stories.map((story, index) => {
      return (
        <div className='carousel-item has-background'>
          <Story 
            audioId={story.audioId}
            imageId={story.imageId}
            title={story.title}
            description={story.description}
            />
        </div>
      );
    });

    return (
      <section className="section columns is-vertically-centered" style={bgStyle}>
        <div className="container column">
          <h1 className="has-text-weight-normal is-size-3">
            <strong>Etherchime</strong> composes music for <strong>video productions</strong>, <strong>video games</strong>, and <strong>meditative practices</strong>.
          </h1>
        </div>
        <div className="container column">
          <div className='carousel carousel-animated carousel-animate-slide'>
            <div className='carousel-container'>
              {carouselItems}
            </div>
            <div className="carousel-navigation">
              <div className="carousel-nav-left">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </div>
              <div className="carousel-nav-right">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;