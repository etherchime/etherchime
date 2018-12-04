import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { onEnter } from "./utilities";

function Nav(props) {
  return (
    <nav className="nav navbar is-transparent has-background-white-ter">
      <div className="navbar-brand">
        <Link to='/' className="navbar-item">
          ETHERCHIME&ensp;<img className="brand-icon" src="/favicon-48.png" alt="" />
        </Link>
        <a role="button" className={"navbar-burger" + (props.isMenuVisible ? " is-active" : "")} onClick={props.toggleMenu} onKeyPress={(e) => onEnter(e, props.toggleMenu)} data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div id="navMenu" className={"navbar-menu has-background-white-ter" + (props.isMenuVisible ? " is-active" : "")}>
        <div className="navbar-end">
          <Link to='/' className="navbar-item" role="menuitem">
            Home
          </Link>
          <Link className="navbar-item" role="menuitem" to="/about">About</Link>
          <Link className="navbar-item" role="menuitem" to="/contact">Contact</Link>
          <a id="asideToggle" title="Search for music" aria-label="Search for music" role="button" tabIndex="0" className="navbar-item" href="javascript:void(0);" onClick={props.toggleCategories} onKeyPress={(e) => { onEnter(e, props.toggleCategories); }}>
            Music&nbsp; &nbsp;<i className={"fa " + (props.areCategoriesVisible ? "fa-compress" : "fa-expand")}></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;