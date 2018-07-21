import React, { Component } from 'react';
import './Home.css';
import FeaturedStories from './FeaturedStories';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section columns has-background-grey-lighter is-0 is-vertically-centered">
          <div className="column is-half">
            <h1 className="has-text-weight-normal is-size-3">
              <strong>Etherchime</strong> composes music for <strong>video productions</strong>, <strong>video games</strong>, and <strong>meditative practices</strong>.
            </h1>
          </div>
          <div className="column is-half">
            <FeaturedStories />
          </div>
        </section>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Hero title
              </h1>
              <h2 class="subtitle">
                Hero subtitle
              </h2>
            </div>
          </div>
        </section>
        <section className="section columns has-background-grey-lighter is-0 is-vertically-centered">
          <div className="column is-half">
            <FeaturedStories />
          </div>
          <div className="column is-half">
            <h1 className="has-text-weight-normal is-size-3">
              <strong>Etherchime</strong> composes music for <strong><a href="/music">video productions</a></strong>, <strong>video games</strong>, and <strong>meditative practices</strong>.
            </h1>
          </div>
        </section>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Hero title
              </h1>
              <h2 class="subtitle">
                Hero subtitle
              </h2>
            </div>
          </div>
        </section>
        <section className="section columns has-background-grey-lighter is-0 is-vertically-centered">
          <div className="column is-half">
            <FeaturedStories />
          </div>
          <div className="column is-half">
            <h1 className="has-text-weight-normal is-size-3">
              <strong>Etherchime</strong> composes music for <strong>video productions</strong>, <strong>video games</strong>, and <strong>meditative practices</strong>.
            </h1>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;