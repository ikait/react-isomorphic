import React from 'react';
import App from './components/App'

let path = decodeURI(window.location.pathname);

function run() {
  // Render the top-level React component
  let props = {
    path: path,
    context: {
      onSetTitle: value => document.title = value,
    }
  };
  let element = React.createElement(App, props);
  React.render(element, document.getElementById('app'), () => {
  });
}

// Run the application when both DOM is ready
// and page content is loaded
Promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  }),
]).then(run);
