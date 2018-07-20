import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Howler } from 'howler';
import 'bulma/css/bulma.min.css';
import 'bulma-carousel/dist/css/bulma-carousel.min.css'
import 'bulma-carousel/dist/js/bulma-carousel.min.js'
import 'font-awesome/css/font-awesome.min.css'; 
import './index.css';
import App from './App';
import Nav from './Nav';
import Home from './Home';
import Stories from './Stories';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Aside from './Aside';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById("appRoot"));
ReactDOM.render(<Nav />, document.getElementById("navRoot"));
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/music/:category?" component={Stories} />
      <Route path="/about" component={About} />
      <Route path="/contact" component = {Contact} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("mainRoot"));
ReactDOM.render(<Footer />, document.getElementById("footerRoot"));
ReactDOM.render(<Aside />, document.getElementById("asideRoot"));

registerServiceWorker();