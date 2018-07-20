import React, { Component } from 'react';
import './Home.css';
import bgImage from './0001.png';
import FeaturedStories from './FeaturedStories';


class Home extends Component {
  render() {
    var bgStyle = {
      background: "url('" + bgImage + "') center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center"
    }

    return (
      <React.Fragment>
        <section className="section columns is-gapless is-0 is-vertically-centered" style={bgStyle}>
          <div className="column is-half">
            <h1 className="has-text-weight-normal is-size-3">
              <strong>Etherchime</strong> composes music for <strong>video productions</strong>, <strong>video games</strong>, and <strong>meditative practices</strong>.
            </h1>
          </div>
          <div className="column is-half">
            <FeaturedStories />
          </div>
        </section>
        <section className="columns is-gapless is-0 is-vertically-centered">
          <div className="column">
            
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;