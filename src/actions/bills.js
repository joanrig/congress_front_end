

export function fetchBillsBySubject(query){
  console.log("about to fetchBillsBySubject,query is", query)
  return (dispatch) => {
      return fetch('http://localhost:3000/search/bills/'+query)
      .then(resp => resp.json())
      .then(bills =>dispatch({type:"FETCH_BILLS_BY_SUBJECT", payload: {bills: bills, subject:query}})
      )
    }
}
