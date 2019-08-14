

export function fetchBillsBySubject(query){
  return (dispatch) => {
      dispatch ({type: 'LOADING'})
      const url = "http://localhost:3000/bills/subject/"+query
      fetch(url).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch(function (err) {console.log(err)})
      .then(bills =>dispatch({type:"FETCH_BILLS_BY_SUBJECT", bills})  
      )
    }
  }
