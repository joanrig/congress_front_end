

// async action
export function fetchHouse(){
  //console.log('firing fetchHouse')
  console.log("c")
  return (dispatch) => {
      return fetch('http://localhost:3000/search/reps')
      .then(resp => resp.json())
      .then(house =>{
        console.log("d")
        return dispatch({type:"SET_HOUSE", house} )
      })
     }
     console.log("e")
}

//doesn't work
export function fetchLoyalists(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/house_loyalists')
      .then(resp => resp.json())
      .then(loyalists =>dispatch({type:"LOYALISTS", loyalists} ))
     }
}


export function fetchMavericks(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/house_mavericks')
      .then(resp => resp.json())
      .then(mavericks =>dispatch({type:"MAVERICKS", mavericks} ))
     }
}


export function fetchTruants(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/truant_reps')
      .then(resp => resp.json())
      .then(truants =>dispatch({type:"TRUANTS", truants} ))
     }
}

export function fetchBySeniority(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/reps_by_seniority')
      .then(resp => resp.json())
      .then(seniority =>dispatch({type:"SENIORITY", seniority} ))
     }
}


export function fetchByAge(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/reps_by_age')
      .then(resp => resp.json())
      .then(age =>dispatch({type:"AGE", age} ))
     };
}

export function fetchBillsByRep(id){
  return (dispatch) => {
      console.log("now fetching to http://localhost:3000/search/bills/", id)
      return fetch("http://localhost:3000/search/bills/member/"+id)
      .then(resp => resp.json())
      .then(bills =>dispatch({type:"FETCH_BILLS_BY_REP", payload: {bills: bills, id:id}})
      )
    }
}
