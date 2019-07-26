import { combineReducers } from 'redux';
import senate from './senate';
import house from './house';
import bills from './bills'

 export default combineReducers({
  senate,
  house,
  bills

});
