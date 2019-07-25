
//i'd like to make search url more RESTful like search/bills? how?

export function fetchBillsByMember(id){
  return (dispatch) => {
      console.log("now fetching to http://localhost:3000/search/bills/", id)
      return fetch("http://localhost:3000/search/bills/"+id)
      .then(resp => resp.json())
      .then(bills =>dispatch({type:"FETCH_BILLS_BY_MEMBER", bills} ))
    }
}
