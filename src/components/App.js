import React, { PropTypes } from 'react'
import {Link, RouteHandler} from 'react-router'

class App {

  static propTypes = {
    path: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <h1><Link to="app">React server-side rendering sample</Link></h1>
        <Link to="top" key='top'>top</Link>
        <Link to="about" key='about'>about</Link>
        <RouteHandler {...this.props} />
      </div>
    );
  }

}

export default App;
