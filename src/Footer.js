import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
	  <footer className="footer content has-text-centered has-text-white-ter">
	    <p>
	      <strong>Etherchime</strong> by <a href="https://www.linkedin.com/in/bshewmake">Brandon Shewmake</a>. The source code is licensed&nbsp;
	      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
	      is licensed&nbsp;<a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
	    </p>
	  </footer>
    );
  }
}

export default Footer;