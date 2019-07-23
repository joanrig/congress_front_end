import { combineReducers } from 'redux';
import senate from './senate';
import house from './house';

 export default combineReducers({
  senate,
  house
});
