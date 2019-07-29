


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
