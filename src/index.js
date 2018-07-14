import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './index.css';
import Header from './Header';
import Main from './Main';
import About from './About';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(
	<BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("main"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
registerServiceWorker();