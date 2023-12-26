// rootReducer.js

import { combineReducers } from 'redux';

import dReducer from './dReducer';

const rootReducer = combineReducers({
 dReducer
  // Add other reducers here if needed
});

export default rootReducer;
