import React from 'react';
import './FeaturedStory.css';

function FeaturedStory(props) {
  return (
    <React.Fragment>
      <div className='carousel-item has-background'>
        <img className="is-background" src={props.imageUrl} alt={props.imageDescription} width="800" height="450" />
      </div>
    </React.Fragment>
  );
}

export default FeaturedStory;