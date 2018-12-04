import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import FeaturedStories from './FeaturedStories';
import CategoriesData from './Categories.json';

class Home extends Component {
  constructor(props) {
    super(props);

    document.title = "Royalty-Free Music - Etherchime";
  }

  componentWillMount() {
    this.setState({ categories: CategoriesData.filter(function(category, index) {
      if (!category.tags || category.tags.length === 0) return false;

      return category.tags.indexOf("featured") !== -1;
    })});
  }

  render() {
    var categories =
      this.state.categories.map((category, index) => {
        return (
          <React.Fragment key={"home-" + category.key}>
            <section id={"musicFor-" + category.key} className="hero">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    Music for {category.name}
                  </h1>
                </div>
              </div>
            </section>
            <section className="section is-medium columns is-marginless has-background-grey-lighter is-0 is-vertically-centered">
              <div className="column is-one-third is-hidden-mobile has-text-centered">
                <i className={"fa fa-5x " + category.icon}></i>
              </div>
              <div className="column is-two-thirds">
                <div className="has-text-weight-normal is-size-4">
                  <p><Link to={"/music/" + category.key}>{category.tagline}</Link></p>
                  <ul>
                    {category.features.map((feature, index) => {
                      return <li key={category.key + "-feature-" + index} className="has-circled-bullet">{feature}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </section>
          </React.Fragment>
        );
      });
    return (
      <React.Fragment>
        <section className="section is-medium columns is-marginless has-background-grey-lighter is-0 is-vertically-centered">
          <div className="column is-5">
            <h1 className="has-text-weight-normal is-size-4">
              Music for <a title="Learn about music for video games" aria-label="Learn about music for video games" href="#musicFor-games">video games</a> and <a title="Learn about music for video productions" aria-label="Learn about music for video productions" href="#musicFor-videos">video productions</a> - composed by Brandon Shewmake.
            </h1><br />
            <p className="content is-size-4">Find free music for your project licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons BY 4.0</a>, or request original compositions by <Link to="/contact">contacting me</Link>.</p>
          </div>
          <div className="column is-7">
            <FeaturedStories />
          </div>
        </section>
        {categories}
      </React.Fragment>
    );
  }
}

export default Home;