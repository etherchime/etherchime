import React from 'react';
import { onEnter } from "./utilities"
import './Nav.css';

function Nav(props) {
  return (
    <nav className="nav navbar is-transparent has-background-white-ter">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          ETHERCHIME&ensp;<img className="brand-icon" src="/favicon-48.png" alt="" />
        </a>
        <a role="button" className={"navbar-burger" + (props.isMenuVisible ? " is-active" : "")} onClick={props.toggleMenu} onKeyPress={(e) => onEnter(e, props.toggleMenu)} data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div id="navMenu" className={"navbar-menu has-background-white-ter" + (props.isMenuVisible ? " is-active" : "")}>
        <div className="navbar-end">
          <a className="navbar-item" role="menuitem" href="/">
            Home
          </a>
          <a className="navbar-item" role="menuitem" href="/about">About</a>
          <a className="navbar-item" role="menuitem" href="/contact">Contact</a>
          <a id="asideToggle" title="Search for music" aria-label="Search for music" role="button" tabIndex="0" className="navbar-item" href="#" onClick={props.toggleCategories} onKeyPress={(e) => { onEnter(e, props.toggleCategories); }}>
            Music&nbsp; &nbsp;<i className={"fa " + (props.areCategoriesVisible ? "fa-compress" : "fa-expand")}></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;