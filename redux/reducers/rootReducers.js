// rootReducer.js

import { combineReducers } from 'redux';
import {cartReducers} from './cartReducers'


const rootReducer = combineReducers({
  cart:cartReducers
  // Add other reducers here if needed
});

export default rootReducer;
