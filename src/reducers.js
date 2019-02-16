import { combineReducers } from 'redux';
import history from './utils/history';
import appReducer from './containers/HomePage/reducer';

export default function createReducer() {
  const rootReducer = combineReducers({
    appReducer,
  });

  return rootReducer;
}
