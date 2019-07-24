
//i'd like to make search url more RESTful like search/bills? how?

export function fetchBillsByMember(id){
  return (dispatch) => {
      return fetch("http://localhost:3000/search/memberbills-"+id)
      .then(resp => resp.json())
      .then(bills =>dispatch({type:"FETCH_BILLS_BY_MEMBER", bills} ))
    }
}


    // `https://api.propublica.org/congress/v1/members/"+id+"/bills/introduced.json`
