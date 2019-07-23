

export function fetchCandidates(){
  return (dispatch) => {
      return fetch('http://localhost:3000/search/presidential_candidates')
      .then(resp => resp.json())
      .then(candidates =>dispatch({type:"PRES_CANDIDATES", candidates} ))
     };
}
