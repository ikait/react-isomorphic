import React, { PropTypes } from 'react';
import {Link, RouteHandler} from 'react-router';
import mui from 'material-ui';
let {MenuItem, RaisedButton, AppBar, LeftNav} = mui
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

class App extends React.Component {

  static propTypes = {
    path: PropTypes.string.isRequired
  };

  static childContextTypes = {
    muiTheme: PropTypes.object
  };

  constructor() {
    super();
    this._handleLeftIconButtonTouchTap = this._handleLeftIconButtonTouchTap.bind(this);
  }

  componentDidMount() {
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.lightBlue500
    });
  }

  _handleLeftIconButtonTouchTap() {
  }

  render() {
    let containerStyle = {
      textAlign: 'center',
      paddingTop: '0px'
    };
    let pageStyle = {
      paddingTop: '200px'
    };
    let linkStyle = {
      paddingLeft: '20px'
    };
    let menuItems = [
      { route: 'top', text: 'Top' },
      { route: 'about', text: 'About'},
    ];
    return (
      <div style={containerStyle}>
        <div style={{ marginTop: '10px' }} >
          <Link to="top" key='top'><RaisedButton label="Top" primary={true} /></Link>
          <Link style={linkStyle} to="about" key='about'><RaisedButton label="About" primary={true} /></Link>
          <div style={pageStyle}>
            <RouteHandler {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
