import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './containers/HomePage';
import history from './utils/history';
import configureStore from './configureStore';

const initialState = {};
const store = configureStore(initialState, history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router history={history}>
            <Switch>
              <Route exact path="/:tab?" component={HomePage} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
