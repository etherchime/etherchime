import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
  	  <footer className="footer has-background-grey-lighter has-text-grey-darker content has-text-centered">
  	    <div className="level is-mobile">
            <div className="level-item">
              <p>© 2018 Etherchime by <a href="https://www.linkedin.com/in/bshewmake" target="_blank" rel="noopener noreferrer">Brandon Shewmake</a></p>
            </div>
            <div className="level-item">
              <p>
                <a href="https://www.instagram.com/etherchime/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram fa-lg"></i>
                </a>
              </p>
          </div>
        </div>
  	  </footer>
    );
  }
}

export default Footer;