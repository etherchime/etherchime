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
              Music for <a href="#musicForVideos">video productions</a>, <a href="#musicForGames">video games</a>, and <a href="#musicForMeditation">meditative practices</a> - composed by Brandon Shewmake.
            </h1><br />
            <p className="content is-size-3">Find free music for your project licensed under <a href="">License To-Be-Determined</a>, or request original compositions by <a href="/contact">contacting me</a>.</p>
          </div>
          <div className="column is-half">
            <FeaturedStories />
          </div>
        </section>
        <section id="musicForVideos" className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Music for Video Productions
              </h1>
            </div>
          </div>
        </section>
        <section className="section columns has-background-grey-lighter is-0 is-vertically-centered">
          <div className="column is-one-third has-text-centered">
            <i className="fa fa-5x fa-film"></i>
          </div>
          <div className="column is-two-thirds">
            <h1 className="has-text-weight-normal is-size-4">
              <p>Elevate your <a href="/music/videos">video productions</a> with instrumental music.</p>
              <ul>
                <li className="has-circled-bullet">nature documentaries</li>
                <li className="has-circled-bullet">outdoor recreation documentaries</li>
                <li className="has-circled-bullet">adventure films</li>
              </ul>
            </h1>
          </div>
        </section>
        <section id="musicForGames" className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Music for Video Games
              </h1>
            </div>
          </div>
        </section>
        <section className="section columns has-background-grey-lighter is-0 is-vertically-centered">
          <div className="column is-one-third has-text-centered">
            <i className="fa fa-5x fa-gamepad"></i>
          </div>
          <div className="column is-two-thirds">
            <h1 className="has-text-weight-normal is-size-4">
              <p>Imbue your <a href="/music/games">video games</a> with instrumental music.</p>
              <ul>
                <li className="has-circled-bullet">overworld music</li>
                <li className="has-circled-bullet">boss encounters</li>
                <li className="has-circled-bullet">character themes</li>
              </ul>
            </h1>
          </div>
        </section>
        <section id="musicForMeditation" className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Music for Meditative Practices
              </h1>
            </div>
          </div>
        </section>
        <section className="section columns has-background-grey-lighter is-0 is-vertically-centered">
          <div className="column is-one-third has-text-centered">
            <i className="fa fa-5x fa-bell-o"></i>
          </div>
          <div className="column is-two-thirds">
            <h1 className="has-text-weight-normal is-size-4">
              <p>Augment your <a href="/music/meditation">meditative practices</a> with instrumental music.</p>
              <ul>
                <li className="has-circled-bullet">serene ambience</li>
                <li className="has-circled-bullet">guiding themes</li>
                <li className="has-circled-bullet">emotional soundscapes</li>
              </ul>
            </h1>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;