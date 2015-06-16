import React, { PropTypes } from 'react'

class App {

  static propTypes = {
    path: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        Hello World {this.props.path}
      </div>
    );
  }

}

export default App;
