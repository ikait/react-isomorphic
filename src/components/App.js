import React, { PropTypes } from 'react';
import {Link, RouteHandler} from 'react-router';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class App {

  static propTypes = {
    path: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <h1><Link to="app">React server-side rendering sample</Link></h1>
        <ListGroup>
          <Link to="top" key='top'><ListGroupItem>top</ListGroupItem></Link>
          <Link to="about" key='about'><ListGroupItem>about</ListGroupItem></Link>
        </ListGroup>
        <RouteHandler {...this.props} />
      </div>
    );
  }
}

export default App;
