import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import 'bulma-carousel/dist/css/bulma-carousel.min.css';
import 'bulma-carousel/dist/js/bulma-carousel.min.js';
import './index.css';
import App from './App';
import Home from './Home';
import Stories from './Stories';
import About from './About';
import Contact from './Contact';
import { Howler } from 'howler';
import { unregister } from './registerServiceWorker';

window.FontAwesomeConfig = {
  searchPseudoElements: true
};

// Disable Howler's attempt to unlock audio,
// as it causes event-propagation issues with
// anchor-interaction.
Howler.mobileAutoEnable = false;

ReactDOM.render(<App />, document.getElementById("appRoot"));
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/music/:category?" component={Stories} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("mainRoot"));

unregister();