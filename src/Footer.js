import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
  	  <footer className="footer has-background-grey-lighter has-text-grey-darker content has-text-centered">
              <p>
                © 2018 by <a href="https://www.linkedin.com/in/bshewmake" target="_blank" rel="noopener noreferrer">Brandon Shewmake</a>
              </p>
              <p>
                <a href="https://www.instagram.com/etherchime/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram fa-lg"></i>
                </a>&emsp;
                <a href="https://www.linkedin.com/in/bshewmake" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin fa-lg"></i>
                </a>&emsp;
                <a href="/contact" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-envelope fa-lg"></i>
                </a>
              </p>
  	  </footer>
    );
  }
}

export default Footer;