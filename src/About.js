import React, { Component } from 'react';
import './About.css';
import bgImage from './0001.png';
import profile from './profile-acadia.JPG';

class About extends Component {
  render() {
    var bgStyle = {
      background: "url('" + bgImage + "') center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center" 
    }

    return (
      <section className="section columns" style={bgStyle}>
      	<div className="container column is-half is-narrow">
  	  		<figure className="image is-360x360">
    			  <img className="profile-image" src={profile} alt="" />
    			</figure>
          <h1 className="title">Brandon</h1>
        	<p>My name is Brandon, and I am fond of adventure.</p>
        	<p>Growing up in Homewood, Alabama, my most vibrant passions were the visual and musical arts. I played the clarinet, keyboard, and sousaphone in the Homewood High School Patriot Band, and I actively transcribed video game and film soundtracks for piano, winning second place in the 2008 Guild Wars Wintersday Art Contest.</p>
        	<p>My interest in video games led me to graduate with a bachelor's degree in computer science (CS) from the University of Alabama (UA). During my years at UA, I discovered whitewater kayaking through the Alabama Kayak Club, influencing my thirst for various outdoor recreational pursuits.</p>
        	<p>My CS degree introduced me to the information technology consulting field, where I practiced web application design and development for three years. I then turned my focus towards spending almost five unpredictable months in the Appalachian Mountains via the Appalachian Trail.</p>
        </div>
	   </section>
    );
  }
}

export default About;