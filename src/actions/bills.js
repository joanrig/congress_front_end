
export function fetchBillsByMember(id){
  return async function(dispatch){
      const res = await fetch("http://localhost:3000/search/bills/"+id)
      const bills = await res.json()
      return dispatch({ type:"FETCH_BILLS_BY_MEMBER", bills })
    }
}






// export function fetchBillsByMember(id){
//   return (dispatch) => {
//       console.log("now fetching to http://localhost:3000/search/bills/", id)
//       return fetch("http://localhost:3000/search/bills/"+id)
//       .then(resp => resp.json())
//       .then(bills =>dispatch({type:"FETCH_BILLS_BY_MEMBER", bills} ))
//     }
// }
