import {
  expertsReducer,
  selectedExpertReducer,
  homeExpertReducers,
} from './expertReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  allexperts: expertsReducer,
  expert: selectedExpertReducer,
  allhomeexperts: homeExpertReducers,
});

export default reducers;
