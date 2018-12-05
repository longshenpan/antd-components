import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export default class Wrapper extends Component {
  render() {
    console.log('wrapper');
    return (
      <Router history={history}>
        <div style={{backgroundColor: 'red'}}>
          {this.props.children}
        </div>
      </Router>
    );
  }
}
