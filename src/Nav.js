import React, { Component } from 'react';
import './Nav.css';

function toggleAside()
{
  var asideToggle = document.getElementById("asideToggle");
  var asideRootTouch = document.getElementById("asideRootTouch");
  var asideRootDesktop = document.getElementById("asideRootDesktop");
  var appContainer = document.getElementById("appContainer");
  var asideIcon = asideToggle.getElementsByTagName("i")[0];
  appContainer.classList.toggle("is-four-fifths");
  asideRootTouch.classList.toggle("is-hidden");
  asideRootDesktop.classList.toggle("is-hidden");
  asideIcon.classList.toggle("fa-expand");
  asideIcon.classList.toggle("fa-compress");
}


class Nav extends Component {
  render() {
    return (
  		<nav className="nav navbar has-background-white-ter">
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

  		  <div className="navbar-end">
  		    <div className="navbar-start">
  		      <a className="navbar-item" href="/">
  		        Home
  		      </a>
  		      <a className="navbar-item" href="/about">About</a>
  		      <a className="navbar-item" href="/contact">Contact</a>
            <a id="asideToggle" className="navbar-item" onClick={() => toggleAside()}>
              Music&nbsp; &nbsp;<i className="fa fa-expand"></i>
            </a>
  		    </div>
  		  </div>
  		</nav>
    );
  }
}

export default Nav;