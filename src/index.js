import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import 'bulma-carousel/dist/css/bulma-carousel.min.css'
import 'bulma-carousel/dist/js/bulma-carousel.min.js'
import 'font-awesome/css/font-awesome.min.css'; 
import './index.css';
import App from './App';
import Header from './Header';
  import Home from './Home';
  import StoryView from './StoryView';
  import About from './About';
  import Contact from './Contact';
import Footer from './Footer';
import StoryMenu from './StoryMenu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/music" component={StoryView} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("main"));
ReactDOM.render(<StoryMenu />, document.getElementById("menu"));
ReactDOM.render(<Footer />, document.getElementById("footer"));

registerServiceWorker();