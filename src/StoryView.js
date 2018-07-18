import React, { Component } from 'react';
import './StoryView.css';
import bgImage from './0001.png';
import Story from './Story';
import Stories from './Stories.json';

function mod(n, m) {
  return ((n % m) + m) % m;
}

class StoryView extends Component {
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
      } else if (Stories.length - index < columnsNo) {
        var remainder = Stories.splice(index, Stories.length - index);
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
    return <React.Fragment>
        {stories}
      </React.Fragment>;
  }
}

export default StoryView;
