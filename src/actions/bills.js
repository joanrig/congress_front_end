

export function fetchBillsBySubject(query){
  return (dispatch) => {
      dispatch ({type: 'LOADING'})
      const url = "http://localhost:3000/bills/subject/"+query
      return fetch(url)
      .then(resp => resp.json())
      .catch(function (err) {console.log(err)})
      .then(bills =>dispatch({type:"FETCH_BILLS_BY_SUBJECT", bills})
      //bills has 20 bills
      //after action global state has 20 bills
      //but since members have bills? both senate and house re-render
    )
  }
}


export function showSenatorBills(bills){
  // //bills are still there
  // debugger
  // console.log("showSenatorBills fired from actions/senate")
  // return (dispatch) => ({type: 'SHOW_SENATOR_BILLS', bills})
  //   //how to also
  //   // 1. navigate to Bills container
  //   // 2. and have it know which senator's bills to show?
}





//resp.json()
// dispatch({type:"FETCH_BILLS_BY_SUBJECT", bills}
// .then(bills => console.log("bills is", bills))
