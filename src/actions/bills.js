

export function fetchBillsBySubject(query){
  console.log("about to fetchBillsBySubject,query is", query)
  return (dispatch) => {
      dispatch ({type: 'LOADING'})
      //works in browser bar.
      const url = "http://localhost:3000/bills/subject/"+query
      debugger
      return fetch(url)
      .then(resp => resp.json())
      // .then(resp => console.log)
      .then(bills =>dispatch({type:"FETCH_BILLS_BY_SUBJECT", bills})
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





//resp.json()
// dispatch({type:"FETCH_BILLS_BY_SUBJECT", bills}
// .then(bills => console.log("bills is", bills))
