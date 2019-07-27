

export function fetchBillsBySubject(query){
  console.log("about to fetchBillsBySubject,query is", query)
  debugger
  //breaks here.
  return (dispatch) => {
      return fetch("http://localhost:3000/search/bills/subject/"+query)
      .then(resp => resp.json())
      .then(bills =>dispatch({type:"FETCH_BILLS_BY_SUBJECT", bills})
      )
    }
}
