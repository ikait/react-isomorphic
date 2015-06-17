import React from 'react';
import App from './components/App';
import Top from './components/Top';
import About from './components/About';
import {Route, DefaultRoute} from 'react-router';

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={About} />
    <Route name="top" handler={Top} />
    <DefaultRoute handler={Top} />
  </Route>
)

export default routes;
