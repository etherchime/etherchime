import React, { Component } from 'react';
import { toggleStoryFilters, toggleMenu, onEnter } from "./utilities"
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
  		<nav className="nav navbar is-transparent has-background-white-ter">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            ETHERCHIME&ensp;<img className="brand-icon" src="/favicon-48.png" />
          </a>
          <a role="button" className="navbar-burger" onClick={toggleMenu} onKeyPress={(e) => onEnter(e, toggleMenu)} data-target="navMenu" aria-label="menu" aria-expanded="false">
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
            <a id="asideToggle" title="Search for music" aria-label="Search for music" role="button" tabIndex="0" className="navbar-item" href="" role="menuitem" onClick={toggleStoryFilters} onKeyPress={(e) => { onEnter(e, toggleStoryFilters); }}>
              Music&nbsp; &nbsp;<i className="fa fa-expand"></i>
            </a>
          </div>
  		  </div>
  		</nav>
    );
  }
}

export default Nav;