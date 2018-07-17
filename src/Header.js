import React, { Component } from 'react';
import './Header.css';

function toggleStoryMenu()
{
  var storyMenu = document.getElementById("storyMenu");
  var mainContent = document.getElementById("mainContent");
  mainContent.classList.toggle("is-four-fifths");
  storyMenu.classList.toggle("is-hidden")
}


class Header extends Component {
  render() {
    return (
		<nav className="navbar has-background-grey-darker">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>

        <a role="button" className="navbar-burger is-active" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

		  <div id="navbarExampleTransparentExample" className="navbar-end">
		    <div className="navbar-start">
		      <a className="navbar-item" href="/">
		        Home
		      </a>
		      <a className="navbar-item" href="/music">Music</a>
		      <a className="navbar-item" href="/about">About</a>
		      <a className="navbar-item" href="/contact">Contact</a>
          <button className="button" onClick={() => toggleStoryMenu()}>Toggle</button>
		    </div>
		  </div>
		</nav>
    );
  }
}

export default Header;