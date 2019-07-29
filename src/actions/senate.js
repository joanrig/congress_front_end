

// async action
export function fetchSenate(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/senators')
      .then(resp => resp.json())
      .then(senate =>dispatch({type:"SET_SENATE", senate} ))
     };
}

export function fetchLoyalists(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/senate_loyalists')
      .then(resp => resp.json())
      .then(loyalists =>dispatch({type:"LOYALISTS", loyalists} ))
     };
}

export function fetchMavericks(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/senate_mavericks')
      .then(resp => resp.json())
      .then(mavericks =>dispatch({type:"MAVERICKS", mavericks} ))
     };
}

export function fetchTruants(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/truant_senators')
      .then(resp => resp.json())
      .then(truants =>dispatch({type:"TRUANTS", truants} ))
    };
}

export function fetchBySeniority(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/senators_by_seniority')
      .then(resp => resp.json())
      .then(seniority =>dispatch({type:"SENIORITY", seniority} ))
     };
}

export function fetchByAge(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/senators_by_age')
      .then(resp => resp.json())
      .then(age =>dispatch({type:"AGE", age} ))
     };
}

export function fetchBillsBySenator(id){
  return (dispatch) => {
      return fetch("http://localhost:3000/search/bills/member/"+id)
      .then(resp => resp.json())
      .then(bills =>dispatch({type:"FETCH_BILLS_BY_SENATOR", payload: {bills: bills, id:id}})
      )
    }
}

export function showSenatorBills(bills){
  //bills are still there
  debugger
  console.log("showSenatorBills fired from actions/senate")
  return (dispatch) => ({type: 'SHOW_SENATOR_BILLS', bills})
    //how to also
    // 1. navigate to Bills container
    // 2. and have it know which senator's bills to show?
}











//
