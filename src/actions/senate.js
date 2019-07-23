

// async action
export function fetchSenate(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/senators')
      .then(resp => resp.json())
      .then(senate =>dispatch({type:"SET_SENATE", senate} ))
     };
}

//works
export function fetchLoyalists(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/senate_loyalists')
      .then(resp => resp.json())
      .then(loyalists =>dispatch({type:"LOYALISTS", loyalists} ))
     };
}

//doesn't work
export function fetchMavericks(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/senate_mavericks')
      .then(resp => resp.json())
      .then(mavericks =>dispatch({type:"MAVERICKS", mavericks} ))
     };
}

//works
export function fetchTruants(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/truant_senators')
      .then(resp => resp.json())
      .then(truants =>dispatch({type:"TRUANTS", truants} ))
     };
}

//works
export function fetchBySeniority(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/senators_by_seniority')
      .then(resp => resp.json())
      .then(seniority =>dispatch({type:"SENIORITY", seniority} ))
     };
}

//works
export function fetchByAge(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/senators_by_age')
      .then(resp => resp.json())
      .then(age =>dispatch({type:"AGE", age} ))
     };
}
