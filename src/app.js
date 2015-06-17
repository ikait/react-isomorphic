import React from 'react';
import Router from 'react-router';
import App from './components/App'
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

let path = decodeURI(window.location.pathname);
injectTapEventPlugin();

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler params={{}} />, document.getElementById("app"));
});
