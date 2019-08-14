export default (state = {members:[], loading: false}, action) => {
    switch(action.type){

    case "SET_SENATE":
        return {
          ...state,
          loading: false,
          members: action.senate
        }

     default:
        return state;
    }
  }
