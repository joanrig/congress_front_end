export default (state = [], action) => {
    switch(action.type){

    case "FETCH_BILLS_BY_SUBJECT":
      debugger
      return action.payload.bills

     default:
        return state;
    }
  }
