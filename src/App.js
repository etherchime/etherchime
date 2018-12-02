import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Aside from './Aside';
import Footer from './Footer';
import bgImage from './aurora.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      areCategoriesVisible: false,
      isMenuVisible: false
    };

    this.toggleCategories = this.toggleCategories.bind(this);
    this.showCategories = this.showCategories.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleCategories() {
    this.setState((previousState) => {
      return {
        areCategoriesVisible: !previousState.areCategoriesVisible,
        isMenuVisible: !previousState.areCategoriesVisible || previousState.isMenuVisible
      };
    });
  }

  showCategories() {
    (function smoothscroll(){
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo (0, currentScroll - (currentScroll / 5));
      }
    })();

    this.setState((previousState) => {
      return {
        areCategoriesVisible: true,
        isMenuVisible: true
      };
    });
  }

  toggleMenu() {
    this.setState((previousState) => {
      return {
        areCategoriesVisible: !previousState.isMenuVisible,
        isMenuVisible: !previousState.isMenuVisible
      }
    })
  }

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
        <div className="columns is-desktop is-gapless is-marginless has-background-light">
          <div id="navRoot" className={"column" + (this.state.areCategoriesVisible ? " is-four-fifths" : "")}>
            <Nav 
              areCategoriesVisible={this.state.areCategoriesVisible}
              isMenuVisible={this.state.isMenuVisible}
              toggleCategories={this.toggleCategories}
              toggleMenu={this.toggleMenu} />
          </div>
          <div id="asideRootTouch" className={"is-hidden-desktop column has-background-light" + (this.state.areCategoriesVisible ? "" : " is-hidden")}>
            <Aside />
          </div>
          <div id="asideRootDesktop" className={"is-hidden-touch column has-background-light is-one-fifth-desktop is-pulled-right has-background-light" + (this.state.areCategoriesVisible ? "" : " is-hidden")}>
            <Aside />
          </div>
        </div>
        <div className="columns is-gapless is-marginless">
  	      <div id="appContainer" className={"column" + (this.state.areCategoriesVisible ? " is-four-fifths-desktop" : "")} style={mainBg}>
            <main id="mainRoot"></main>
  	        <div id="footerRoot">
              <Footer showCategories={this.showCategories} />
            </div>
  	      </div>
      	</div>
      </div>
    );
  }
}

export default App;
