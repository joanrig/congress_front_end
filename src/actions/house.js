import house from "../reducers/house";
// async action
export const fetchHouse = () => {
  return (dispatch) => {
      return fetch('http://localhost:3000/search/reps')
      .then(resp => resp.json())
      .then(house =>dispatch({type:"SET_HOUSE", house} ))
     };
}
