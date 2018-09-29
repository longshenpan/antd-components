import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>{renderRoutes(routes)}</Router>
      </div>
    );
  }
}

export default App;
