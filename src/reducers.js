import { combineReducers } from 'redux';
import appReducer from './containers/HomePage/reducer';

export default function createReducer() {
  return combineReducers({
    appReducer,
  });
}
