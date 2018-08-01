import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.toggleAside = this.toggleAside.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleAside(e) {
    e.preventDefault();

    // Use the the click version of this function should user hit enter.
    var key = e.which || e.keyCode;
    if (key === 13)  {
      e.target.click();
      return
    }
    
    var asideToggle = document.getElementById("asideToggle");

    var nav = document.getElementById("navRoot");
    nav.classList.toggle("is-four-fifths");

    var asideIcon = asideToggle.getElementsByTagName("i")[0];
      asideIcon.classList.toggle("fa-expand");
      asideIcon.classList.toggle("fa-compress");

    var asideRootTouch = document.getElementById("asideRootTouch");
      asideRootTouch.classList.toggle("is-hidden");

    var asideRootDesktop = document.getElementById("asideRootDesktop");
      asideRootDesktop.classList.toggle("is-hidden");

    var appContainer = document.getElementById("appContainer");
    appContainer.classList.toggle("is-four-fifths-desktop");
  }

  toggleMenu(e) {
    e.preventDefault();

    // Get the target from the "data-target" attribute
    const target = e.target.dataset.target;
    const $target = document.getElementById(target);

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    e.target.classList.toggle('is-active');

    if (!$target) return;
    
    $target.classList.toggle('is-active');
  }

  render() {
    return (
  		<nav className="nav navbar is-transparent has-background-white-ter">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            ETHERCHIME&nbsp;<i className="fa fa-headphones-alt fa-lg"></i>
          </a>
          <a role="button" className="navbar-burger" onClick={this.toggleMenu} data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

  		  <div id="navMenu" className="navbar-menu has-background-white-ter">
          <div className="navbar-end">
  		      <a className="navbar-item" role="menuitem" href="/">
  		        Home
  		      </a>
  		      <a className="navbar-item" role="menuitem" href="/about">About</a>
  		      <a className="navbar-item" role="menuitem" href="/contact">Contact</a>
            <a id="asideToggle" title="Search for music" aria-label="Search for music" role="button" tabIndex="0" className="navbar-item" href="" role="menuitem" aria-haspopup="true" tabIndex="0" onClick={this.toggleAside} onKeyPress={this.toggleAside}>
              Music&nbsp; &nbsp;<i className="fa fa-expand"></i>
            </a>
          </div>
  		  </div>
  		</nav>
    );
  }
}

export default Nav;