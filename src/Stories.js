import React, { Component } from 'react';
import './Stories.css';
import bgImage from './0001.png';
import Story from './Story';
import StoriesData from './StoriesData.json';

function mod(n, m) {
  return ((n % m) + m) % m;
}

class Stories extends Component {
  constructor() {
    super()
    this.state = {
        stories: []
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    var storiesData = !params.category || params.category == "all" ? StoriesData :
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
    var bgStyle = {
      background: "url('" + bgImage + "') center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center" 
    }

    var stories =
      this.state.stories.map((storyRow, index) => {
        return (
          <div className="columns is-mobile is-multiline" style={bgStyle}>
            {storyRow.map(story => {
              return (
                <div className="column is-one-third" key={index}>
                  <Story 
                    audioId={story.audioId}
                    imageId={story.imageId}
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
      <section className="section">
        {stories}
      </section>
    );
  }
}

export default Stories;