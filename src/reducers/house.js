
export default (state = [], action) => {
// export default house(state={house: []}, action) {
    switch(action.type){

    case "SET_HOUSE":
        return action.house

     default:
        return state;
    }
  }
