import house from '../reducers/house'
import loyalists from '../reducers/house'
import mavericks from '../reducers/house'
import truants from '../reducers/house'
import seniority from '../reducers/house'


// async action
export function fetchHouse(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/reps')
      .then(resp => resp.json())
      .then(house =>dispatch({type:"SET_HOUSE", house} ))
     };
}

//doesn't work
export function fetchLoyalists(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/house_loyalists')
      .then(resp => resp.json())
      .then(loyalists =>dispatch({type:"LOYALISTS", loyalists} ))
     };
}

//works
export function fetchMavericks(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/house_mavericks')
      .then(resp => resp.json())
      .then(mavericks =>dispatch({type:"MAVERICKS", mavericks} ))
     };
}


//works
export function fetchTruants(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/truant_reps')
      .then(resp => resp.json())
      .then(truants =>dispatch({type:"TRUANTS", truants} ))
     };
}

//works
export function fetchBySeniority(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/reps_by_seniority')
      .then(resp => resp.json())
      .then(seniority =>dispatch({type:"SENIORITY", seniority} ))
     };
}
