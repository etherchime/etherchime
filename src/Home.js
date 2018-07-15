import React, { Component } from 'react';
import './Home.css';
import bgImage from './0001.png';
import bulmaCarousel from 'bulma-carousel'

class Home extends Component {
  componentDidMount()
  {
    bulmaCarousel.attach();
  }

  render() {
    var bgStyle = {
      background: "url('" + bgImage + "') center center",
      backgroundSize: "cover"
    }

    return (
      <section className="hero is-large" style={bgStyle}>
        <div className="hero-body columns">
          <div className="container column">
            <h1 className="has-text-weight-normal is-size-3">
              <strong>Etherchime</strong> composes music for <strong>video productions</strong>, <strong>video games</strong>, and <strong>meditative practices</strong>.
            </h1>
          </div>
          <div className="container column">
            <div className='carousel carousel-animated carousel-animate-slide'>
              <div className='carousel-container'>
                <div className='carousel-item has-background is-active'>
                  <img className="is-background" src="https://wikiki.github.io/images/merry-christmas.jpg" alt="" width="640" height="310" />
                  <div className="title">Merry Christmas</div>
                </div>
                <div className='carousel-item has-background'>
                  <img className="is-background" src="https://wikiki.github.io/images/singer.jpg" alt="" width="640" height="310" />
                  <div className="title">Original Gift: Offer a song with <a href="https://lasongbox.com" target="_blank">La Song Box</a></div>
                </div>
                <div className='carousel-item has-background'>
                  <img className="is-background" src="https://wikiki.github.io/images/sushi.jpg" alt="" width="640" height="310" />
                  <div className="title">Sushi time</div>
                </div>
                <div className='carousel-item has-background'>
                  <img className="is-background" src="https://wikiki.github.io/images/life.jpg" alt="" width="640" height="310" />
                  <div className="title">Life</div>
                </div>
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
        </div>
      </section>
    );
  }
}

export default Home;