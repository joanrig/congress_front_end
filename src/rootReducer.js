import { combineReducers } from 'redux'
import senate from './components/Senate/senate'
import house from './components/House/house'
import bills from './components/Bills/bills'

 export default combineReducers({
  senate,
  house,
  bills
});
