import { combineReducers } from 'redux';
import senate from './senate';
import house from './house';
import bills from './bills'
import members from './members'

 export default combineReducers({
  senate,
  house,
  bills,
  members
});
