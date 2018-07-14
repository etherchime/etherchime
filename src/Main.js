import React, { Component } from 'react';
import './Main.css';
import Story from './Story';
import Stories from './Stories.json';
import StoryMenu from './StoryMenu';

function mod(n, m) {
  return ((n % m) + m) % m;
}

class Main extends Component {

  constructor() {
    super()
    this.state = {
        stories: []
    }
  }

  componentDidMount() {
    let storyRows = [];
    const columnsNo = 3;
    Stories.forEach((story, index) => {
      var remainderNo = mod(index + 1, columnsNo);
      if (remainderNo === 0) {
        var storyRow = Stories.slice(index + 1 - columnsNo, index + 1);
        storyRows.push(storyRow);
      } else if (Stories.length - (index + 1) < columnsNo) {
        var remainder = Stories.splice(index, Stories.length - index);
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
          <div className="columns">
            {storyRow.map(story => {
              return (
                <div className="column is-one-third is-mobile is-multiline is-centered" key={index}>
                  <Story 
                    audioId={story.audioId}
                    imageId={story.imageId}
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
      <section className="section columns">
        <div className="column is-four-fifths">
          {stories}
        </div>
        <div className="column is-one-fifth">
          <StoryMenu />
        </div>
      </section>
    );
  }
}

export default Main;
