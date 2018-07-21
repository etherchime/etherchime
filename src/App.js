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
          <section class="hero">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  Hero title
                </h1>
                <h2 class="subtitle">
                  Hero subtitle
                </h2>
              </div>
            </div>
          </section>
	        <div id="navRoot"></div>
          <section className="hero is-fullheight">
            <main id="mainRoot"></main>
          </section>
	        <div id="footerRoot"></div>
	      </div>
	      <div id="asideRoot" className="column is-hidden is-one-fifth has-background-light"></div>
    	</div>
    );
  }
}

export default App;
