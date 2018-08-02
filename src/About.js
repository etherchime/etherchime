import React, { Component } from 'react';
import './About.css';
import profile from './profile-acadia.JPG';

class About extends Component {
  constructor() {
    super();
    
    document.title = "About the Composer - Etherchime";
  }

  render() {
    return (
      <section className="about section columns is-marginless has-background-grey-lighter">
      	<div className="container column is-two-fifths is-narrow has-text-justified">
          <div className="level">
            <div className="level-item">
      	  		<figure className="image is-360x360">
        			  <img className="profile-image" src={profile} alt="" />
        			</figure>
            </div>
          </div>
          <h1 className="title has-text-centered">About the Composer</h1>
          <p><strong>Brandon's</strong> musical journey began with piano in childhood and grew with clarinet during middle and high schools, sousaphone during high school's marching band season, and ukulele most recently. Brandon won second place in the <a href="http://gw1101.gtm.guildwars.com/events/contests/wintersday2008/winner2.php">2008 Guild Wars Wintersday Art Contest</a> for his piano arrangement of the Guild Wars series' score, won a <a href="http://137.220.1.23/communications/news/2010/20100603-arts.cfm">Richard Westbrook Bryant Award in Piano</a> while studying at Birmingham-Southern College, and was Vice President of the Homewood High School Patriot Band as a senior.</p><br />
          <p>With four years' experience <a href="https://drive.google.com/drive/folders/0BwA-PsbhYlGwQzFzdDFiMERHSTQ">transcribing video game and film scores for piano</a>, Brandon's focus turned to developing original instrumental scores with video games in mind during university. His interest in video games led him to graduate with a bachelor's degree in computer science (CS) from the University of Alabama (UA), but he discovered a love for outdoor recreation through whitewater kayaking with the Alabama Kayak Club. After practicing information technology (IT) consulting for three years, Brandon <a href="https://www.amazon.com/Attuning-Appalachia-Smeagols-Trail-Journal/dp/0692998527">thru-hiked the Appalachian Trail</a> from Georgia to Maine, an adventure that re-kindled an interest in composing music for visual media pertaining to natural pursuits.</p>
        </div>
	   </section>
    );
  }
}

export default About;