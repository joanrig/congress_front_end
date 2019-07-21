


export default (state = [], action) => {
    switch(action.type){

    case "SET_SENATE":
      //why is this not return { ...state, senate}
      return action.senate

    case "LOYALISTS":
      return action.loyalists

    case "MAVERICKS":
      return action.mavericks

     default:
        return state;
    }
  }
