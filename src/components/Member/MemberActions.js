
export function fetchSenate(){
  return (dispatch) => {
      dispatch ({type: 'LOADING'})
      return fetch('http://localhost:3000/search/senators')
      .then(resp => resp.json())
      .then(senate =>dispatch({type:"SET_SENATE", senate} ))
     };
}
