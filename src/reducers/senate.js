
export default (state = [], action) => {
    switch(action.type){

    case "SET_SENATE":
      return action.senate

    case "LOYALISTS":
      console.log("senate action loyalists fired")
      // 
      // return { ...state, senators: [state.senators, action.payload}

     default:
        return state;
    }
  }
