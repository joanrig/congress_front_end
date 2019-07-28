

// export function fetchBillsBySubject (query) {
//   // console.log("about to fetchBillsBySubject,query is", query)
//   return dispatch => {
//     const url = `http://localhost:3000/bills/subject/${query}`
//     debugger
//     return fetch(url)
//     .then( resp => resp.json())
//     .then( bills => dispatch({ type: "FETCH_BILLS_BY_SUBJECT", bills }))
//   }
// }

export const fetchBillsBySubject = (query) => {
  return dispatch => {
    const url = "http://localhost:3000/bills/subject/" + query
    debugger
    return fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type" : "application/json"
      }
    })
      // .then(resp => resp.json())
      .then(resp => console.log(resp))
      .then(bills => dispatch({ type: "FETCH_BILLS_BY_SUBJECT", bills }))
  }
}

export function showSenatorBills(bills){
  //bills are still there
  console.log("showSenatorBills fired from actions/senate")
  return (dispatch) => ({type: 'SHOW_SENATOR_BILLS', bills})
    //how to also
    // 1. navigate to Bills container
    // 2. and have it know which senator's bills to show?
}
