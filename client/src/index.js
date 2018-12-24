import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';
import 'bulma-carousel/dist/css/bulma-carousel.min.css';
import 'bulma-carousel/dist/js/bulma-carousel.min.js';
import './index.css';
import App from './App';
import { Howler } from 'howler';
import { unregister } from './registerServiceWorker';

window.FontAwesomeConfig = {
  searchPseudoElements: true
};

// Disable Howler's attempt to unlock audio,
// as it causes event-propagation issues with
// anchor-interaction.
Howler.autoUnlock = false;

ReactDOM.render(<App />, document.getElementById("appRoot"));

unregister();