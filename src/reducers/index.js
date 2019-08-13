import { combineReducers } from 'redux';
import senate from './senate';
import house from './house';
import bills from './bills'
import finances from './finances'

 export default combineReducers({
  senate,
  house,
  bills,
  finances
});
