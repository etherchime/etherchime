import React, { Component } from 'react';
import './Stories.css';
import Story from './Story';
import StoriesData from './StoriesData.json';
import CategoriesData from './Categories.json';
import queryString from 'query-string';

function mod(n, m) {
  return ((n % m) + m) % m;
}

class Stories extends Component {
  constructor() {
    super();
    this.state = {
      stories: []
    };
  }

  componentWillMount() {
    const { match: { params } } = this.props;

    var category = CategoriesData.filter(function(category, index) {
      return category.key === (params.category || "anything");
    })[0];

    this.setState({
      category: category
    });
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const queryParams = queryString.parse(this.props.location.search);

    var storiesData = !params.category || params.category === "anything" ? StoriesData :
      StoriesData.filter(function(story, index) {
        if (!story.tags || story.tags.length === 0) return false;

        return story.tags.indexOf(params.category) !== -1;
      });

    storiesData = 
      !queryParams.story || 
      queryParams.story === null || 
      queryParams.story.match(/^ *$/) !== null ? storiesData :
      storiesData.filter(function(story, index) {
        if (!story.key || story.key === null || story.key.match(/^ *$/) !== null) return false;

        return story.key.toUpperCase() === queryParams.story.toUpperCase();
      });

    let storyRows = [];
    const columnsNo = 3;
    storiesData.forEach((story, index) => {
        var remainderNo = mod(index + 1, columnsNo);
        if (remainderNo === 0) {
          var storyRow = storiesData.slice(index + 1 - columnsNo, index + 1);
          storyRows.push(storyRow);
        } else if (storiesData.length - index < columnsNo) {
          var remainder = storiesData.splice(index, storiesData.length - index);
          storyRows.push(remainder);
        }
      });

    this.setState({
      stories: storyRows
    });
  }

  render() {
    var stories =
      this.state.stories.map((storyRow, index) => {
        return (
          <div className="columns is-multiline">
            {storyRow.map(story => {
              return (
                <div className="column is-one-third" key={index}>
                  <Story 
                    audioUrl={story.audioUrl}
                    imageUrl={story.imageUrl}
                    imageDescription={story.imageDescription}
                    title={story.title}
                    description={story.description}
                    />
                </div>
              );
            })}
          </div>
        );
      });
    var noStories =
      <section className="section is-medium">
        <blockquote className="content is-size-5 has-text-centered">
          <strong>Music is the silence between the notes.</strong><br />
          <span className="is-size-6">&mdash;Achille-Claude Debussy</span>
        </blockquote>
      </section>;

    return (
      <React.Fragment>
        <section className="hero has-background-grey-lighter">
          <div className="hero-body">
            <div className="container">
              <i className={"category-icon is-pulled-left fa fa-4x " + this.state.category.icon}></i>
              <h1 className="title">
                Music for {this.state.category.name}
              </h1>
              <h2 className="subtitle">
                {this.state.category.tagline}
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          {this.state.stories && this.state.stories.length > 0 ? stories : noStories}
        </section>
      </React.Fragment>
    );
  }
}

export default Stories;