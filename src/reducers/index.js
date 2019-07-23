import { combineReducers } from 'redux';
import senate from './senate';
import house from './house';
import presCandidates from './presCandidates'

 export default combineReducers({
  senate,
  house,
  presCandidates
});
