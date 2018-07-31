import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.toggleAside = this.toggleAside.bind(this);
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

  render() {
    return (
  		<nav className="nav navbar has-background-white-ter">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            ETHERCHIME&nbsp;<i className="fa fa-headphones-alt fa-lg"></i>
          </a>
        </div>

  		  <div className="navbar-end">
  		    <div className="navbar-start">
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