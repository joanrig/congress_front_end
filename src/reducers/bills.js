export default (state = [], action) => {
    switch(action.type){

//look but don't persist these to database
    case "FETCH_BILLS_BY_SUBJECT":
      return action.payload.bills

     default:
        return state;
    }
  }
