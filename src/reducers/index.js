import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import event from './event'
// this is the default entry point for the application to get to all the reducers and all the reducer methods are linked to
export default combineReducers({
  alert,
  auth,
  event
});
