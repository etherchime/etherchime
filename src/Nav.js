import React, { Component } from 'react';
import './Nav.css';

function toggleAside()
{
  var asideToggle = document.getElementById("asideToggle");
  var appContainer = document.getElementById("appContainer");

  var asideIcon = asideToggle.getElementsByTagName("i")[0];
    asideIcon.classList.toggle("fa-expand");
    asideIcon.classList.toggle("fa-compress");

  var asideRootTouch = document.getElementById("asideRootTouch");
    asideRootTouch.classList.toggle("is-hidden");

  var asideRootDesktop = document.getElementById("asideRootDesktop");
    asideRootDesktop.classList.toggle("is-hidden");

  appContainer.classList.toggle("is-four-fifths-desktop");
}


class Nav extends Component {
  render() {
    return (
  		<nav className="nav navbar has-background-white-ter">
        <div className="navbar-brand">
          <a className="navbar-item" aria-hidden="true" href="/">
            <i className="fa fa-music"></i>&emsp;Etherchime
          </a>
        </div>

  		  <div className="navbar-end">
  		    <div className="navbar-start">
  		      <a className="navbar-item" role="menuitem" href="/">
  		        Home
  		      </a>
  		      <a className="navbar-item" role="menuitem" href="/about">About</a>
  		      <a className="navbar-item" role="menuitem" href="/contact">Contact</a>
            <a id="asideToggle" className="navbar-item" href="" role="menuitem" aria-haspopup="true" tabindex="0" onClick={() => toggleAside()}>
              Music&nbsp; &nbsp;<i className="fa fa-expand"></i>
            </a>
  		    </div>
  		  </div>
  		</nav>
    );
  }
}

export default Nav;