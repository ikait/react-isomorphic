import 'babel/polyfill';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import App from './components/App';
import Router from 'react-router';
import routes from './routes';

const server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(path.join(__dirname, 'public')));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

// The top-level React component + HTML template for it
const templateFile = path.join(__dirname, 'templates/index.html');
const template = _.template(fs.readFileSync(templateFile, 'utf8'));

// server.get('*', async (req, res, next) => {
//   try {
//     let uri = req.path;
//     let notFound = false;
//     let css = [];
//     let data = {
//       description: '' ,
//       title: 'test'
//     };
    // let app = <App path={req.path} />;
    // data.body = React.renderToString(app);
    // data.css = css.join('');
    // let html = template(data);
//     if (notFound) {
//       res.status(404);
//     }
//     res.send(html);
//   } catch (err) {
//     next(err);
//   }
// });

server.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    let data = {
      description: '' ,
      title: 'test'
    };
    data.body = React.renderToString(React.createElement(Handler, {params: {}}));
    let html = template(data);
    res.send(html);
  });
});

//
// Launch the server
// -----------------------------------------------------------------------------

server.listen(server.get('port'), () => {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running at http://localhost:' + server.get('port'));
  }
});
