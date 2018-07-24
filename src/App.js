import React, { Component } from 'react';
import './App.css';
import bgImage from './aurora.png';

class App extends Component {
  render() {
    var mainBg = {
      backgroundImage: "url('" + bgImage + "'), linear-gradient(to top, hsl(0, 0%, 14%), #66CDAA 45%, #FF7256 150%)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center"
    }

    return (
      <div className="app columns is-gapless">
	      <div id="appContainer" className="column" style={mainBg}>
          <section className="hero">
            <div className="hero-body">
              <div className="container">
              </div>
            </div>
          </section>
	        <div id="navRoot"></div>
          <div id="asideRootTouch" className="is-hidden-desktop is-hidden column has-background-light"></div>
          <main id="mainRoot"></main>
	        <div id="footerRoot"></div>
	      </div>
	      <div id="asideRootDesktop" className="is-hidden-touch column is-hidden is-one-fifth-desktop has-background-light"></div>
    	</div>
    );
  }
}

export default App;
