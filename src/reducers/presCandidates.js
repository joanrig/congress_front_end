export default (state = [], action) => {
    switch(action.type){

    case "PRES_CANDIDATES":
        return action.pres_candidates

     default:
        return state;
    }
  }
