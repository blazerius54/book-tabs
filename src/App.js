import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import HomePage from './containers/HomePage';
import history from './utils/history';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/:tab?" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
