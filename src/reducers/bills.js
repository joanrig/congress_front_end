export default (state = { bills:[], loading: false}, action) => {
    switch(action.type){

    case "LOADING":
      return {loading: true}

    case "SHOW_SENATOR_BILLS":
      return action.bills


    case "FETCH_BILLS_BY_SUBJECT":
      debugger
      return action.bills

     default:
        return state;
    }
  }
