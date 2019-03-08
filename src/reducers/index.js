import { combineReducers } from 'redux';
import PollReducer from './pollListReducer';

const rootReducer = combineReducers({
  PollReducer: PollReducer,
});

export default rootReducer;