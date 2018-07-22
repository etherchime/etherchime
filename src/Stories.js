import React, { Component } from 'react';
import './Stories.css';
import Story from './Story';
import StoriesData from './StoriesData.json';
import CategoriesData from './Categories.json';

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

    var storiesData = !params.category || params.category === "anything" ? StoriesData :
      StoriesData.filter(function(story, index) {
        if (!story.tags || story.tags.length === 0) return false;

        return story.tags.indexOf(params.category) !== -1;
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
          <div className="columns is-mobile is-multiline">
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

    return (
      <React.Fragment>
        <section class="hero has-background-grey-lighter">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Music for {this.state.category.name}
              </h1>
              <h2 class="subtitle">
                {this.state.category.tagline}
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          {stories}
        </section>
      </React.Fragment>
    );
  }
}

export default Stories;