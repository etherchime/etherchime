import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
    	<section className="hero is-dark">
			<div className="hero-body">
				<div className="container">
					{/*<img src={logo} className="Header-logo" alt="logo" />*/}
					<h1 className="title">
						Etherchime
					</h1>
					<h2 className="subtitle">
						Music for Video Productions, Video Games, and Meditative Practices
					</h2>
				</div>
			</div>
		</section>
    );
  }
}

export default Header;