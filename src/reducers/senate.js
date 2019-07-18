
export default (state = [], action) => {
    switch(action.type){

    case "SET_SENATE":
        return action.senate

     default:
        return state;
    }
  }
