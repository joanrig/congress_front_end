import { combineReducers } from 'redux'
import senate from './Senate/senate'
import house from './House/house'
import bills from './Bills/bills'

 export default combineReducers({
  senate,
  house,
  bills
});
