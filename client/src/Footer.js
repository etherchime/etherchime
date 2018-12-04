import React from 'react';
import './Footer.css';
import { onEnter } from "./utilities";

function Footer(props) {
  return (
	  <footer className="footer has-background-grey-lighter has-text-grey-darker content has-text-centered">
      <section className="section columns is-marginless has-background-grey-lighter is-0 is-vertically-centered">
        <div className="column has-text-centered">
          <h1 className="has-text-weight-normal is-size-4">
            <p><a title="Search for music" aria-label="Search for music" role="button" href="#" tabIndex="0" onClick={props.showCategories} onKeyPress={(e) => { onEnter(e, props.showCategories); }}>Find music for your project.</a></p>
          </h1>
        </div>
      </section>
      <p>
        © 2018 by <a title="" href="https://www.linkedin.com/in/bshewmake" target="_blank" rel="noopener noreferrer">Brandon Shewmake</a>
      </p>
      <p>
        <a title="Find me on Instagram" aria-label="Find me on Instagram" href="https://www.instagram.com/etherchime" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram fa-lg"></i>
        </a>&emsp;
        <a title="Find me on SoundCloud" aria-label="Find me on SoundCloud" href="https://soundcloud.com/etherchime" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-soundcloud fa-lg"></i>
        </a>&emsp;
        <a title="Find me on LinkedIn" aria-label="Find me on LinkedIn" href="https://www.linkedin.com/in/bshewmake" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>&emsp;
        <a title="How to contact me" aria-label="How to contact me" href="/contact" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-envelope fa-lg"></i>
        </a>&emsp;
        <a title="Subscribe to my RSS feed" aria-label="Subscribe to my RSS feed" href="https://feeds.soundcloud.com/users/soundcloud:users:309448348/sounds.rss" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-rss fa-lg"></i>
        </a>
      </p>
	  </footer>
  );
}

export default Footer;