import senate from "../reducers/senate";
import loyalists from "../reducers/senate"


// async action
export function fetchSenate(){
  //return async function (dispatch){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/senators')
      .then(resp => resp.json())
      .then(senate =>dispatch({type:"SET_SENATE", senate} ))
     };
}

export function fetchLoyalists(){
  console.log('fetchLoyalists fired from senate actions')
  return (dispatch) => {
      return fetch('http://localhost:3000/search/senate_loyalists')
      .then(resp => resp.json())
      .then(loyalists =>dispatch({type:"LOYALISTS", loyalists} ))
     };
    console.log('in senate actions fetchLoyalists, loyalists is', loyalists)
}
