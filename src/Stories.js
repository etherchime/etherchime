import React, { Component } from 'react';
import './Stories.css';
import Story from './Story';
import StoriesData from './StoriesData20181118.json';
import CategoriesData from './Categories.json';
import { mod } from './utilities';
import qs from 'qs';

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

    document.title = "Find Royalty-Free Music for " + category.name + " - Etherchime";

    this.setState({
      category: category
    });
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const queryParams = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });

    var storiesData = !params.category || params.category === "anything" ? StoriesData :
      StoriesData.filter(function(story, index) {
        if (!story.tags || story.tags.length === 0) return false;

        return story.tags.indexOf(params.category) !== -1;
      });

    var isFilteredToStory = queryParams.story && 
      queryParams.story !== null &&
      queryParams.story.match(/^ *$/) === null;
    storiesData = !isFilteredToStory ? storiesData :
      storiesData.filter(function(story, index) {
        if (!story.key || story.key === null || story.key.match(/^ *$/) !== null) return false;

        return story.key.toUpperCase() === queryParams.story.toUpperCase();
      });

    this.setState({
      isFilteredToStory: isFilteredToStory
    });

    if (isFilteredToStory === true) {
      this.setState({
        story: storiesData[0]
      });
      document.title = storiesData[0].title + " - Royalty-Free Music - Etherchime";
    }

    let storyRows = [];
    const columnsNo = 3;
    storiesData.forEach((story, index) => {
      var count = index + 1;
      var remainderNo = mod(count, columnsNo);
      var remainingNo = storiesData.length - index;
      if (remainderNo === 0) {
        var storyRow = storiesData.slice(count - columnsNo, count);
        storyRows.push(storyRow);
      } else if (remainingNo < columnsNo && columnsNo - remainderNo > 1) {
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
          <div key={"stories-row-" + index} className="columns is-multiline">
            {storyRow.map(story => {
              return (
                <div key={"stories-" + story.key} className="column is-one-third">
                  <Story 
                    alias={story.key}
                    audioUrls={story.audioUrls}
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
      <section className="stories">
        <section className="hero has-background-grey-lighter">
          <div className="hero-body">
            <div className="columns">
              <div className="column is-one-fifth is-hidden-mobile has-text-centered">
                <i className={"category-icon fa fa-4x " + (this.state.isFilteredToStory ? "fa-music" : this.state.category.icon)}></i>
              </div>
              <div className="column is-four-fifths">
                <h1 className="title">
                  {this.state.isFilteredToStory ? this.state.story.title : "Music for " + this.state.category.name}
                </h1>
                <p className="subtitle">
                  {this.state.isFilteredToStory ? "" : this.state.category.tagline}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          {this.state.stories && this.state.stories.length > 0 ? stories : noStories}
        </section>
      </section>
    );
  }
}

export default Stories;