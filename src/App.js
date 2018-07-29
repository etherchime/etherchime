import React, { Component } from 'react';
import './App.css';
import bgImage from './aurora.png';

class App extends Component {
  render() {
    var mainBg = {
      backgroundImage: "url('" + bgImage + "'), linear-gradient(to top, #1F618D 15%, #FF6347 135%)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center"
    }

    return (
      <div className="has-background-light">
        <div className="columns is-gapless is-marginless has-background-light">
          <div id="navRoot" className="column"></div>
          <div id="asideRootTouch" className="is-hidden-desktop is-hidden column has-background-light"></div>
          <div id="asideRootDesktop" className="is-hidden-touch column is-hidden has-background-light is-one-fifth-desktop is-pulled-right has-background-light"></div>
        </div>
        <div className="columns is-gapless is-marginless">
  	      <div id="appContainer" className="column" style={mainBg}>
            <main id="mainRoot"></main>
  	        <div id="footerRoot"></div>
  	      </div>
      	</div>
      </div>
    );
  }
}

export default App;
