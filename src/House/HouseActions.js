const API_URL="https://congress-api-jr.herokuapp.com/"

// async action
export function fetchHouse(){
  //console.log('firing fetchHouse')
  console.log("c")
  return (dispatch) => {
      return fetch(API_URL+'/search/reps')
      .then(resp => resp.json())
      .then(house =>{
        return dispatch({type:"SET_HOUSE", house})
    })
  }
}

export function fetchHouseLoyalists(){
  return (dispatch) => {
      return fetch(API_URL+'/search/house_loyalists')
      .then(resp => resp.json())
      .then(loyalists =>dispatch({type:"LOYALISTS", loyalists} ))
     }
}


export function fetchHouseMavericks(){
  return (dispatch) => {
      return fetch(API_URL+'/search/house_mavericks')
      .then(resp => resp.json())
      .then(mavericks =>dispatch({type:"MAVERICKS", mavericks} ))
     }
}


export function fetchHouseTruants(){
  return (dispatch) => {
      return fetch(API_URL+'/search/truant_reps')
      .then(resp => resp.json())
      .then(truants =>dispatch({type:"TRUANTS", truants} ))
     }
}

export function fetchHouseBySeniority(){
  return (dispatch) => {
      return fetch(API_URL+'/search/reps_by_seniority')
      .then(resp => resp.json())
      .then(seniority =>dispatch({type:"SENIORITY", seniority} ))
     }
}


export function fetchHouseByAge(){
  return (dispatch) => {
      return fetch(API_URL+'/search/reps_by_age')
      .then(resp => resp.json())
      .then(age =>dispatch({type:"AGE", age} ))
     };
}

export function fetchBillsByRep(id){
  return (dispatch) => {
      return fetch(API_URL+'/search/bills/member/'+id)
      .then(resp => resp.json())
      .then(bills => dispatch({type:"FETCH_BILLS_BY_REP", payload: {bills: bills, id:id}})
      )
    }
}

export function getRepFinances(id){
  return (dispatch) => {
      const url = API_URL+'/search/financial_disclosures/member/'+id
      fetch(url).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch(function (err) {console.log(err)})
      .then(financialDisclosure => dispatch({type:"GET_REP_FINANCES", payload: {financialDisclosure: financialDisclosure, id:id}})
      )
    }
  }
