export default (state = { bills:[], loading: false}, action) => {
    switch(action.type){

    case "LOADING":
      return {loading: true}

    case "SHOW_SENATOR_BILLS":
      return { bills: action.bills, loading: false }
      //has 20 bills

    case "FETCH_BILLS_BY_SUBJECT":
      return { bills: action.bills, loading: false }

    case 'ERROR':
      return { bills: action.error.message }

     default:
        return state;
    }
  }
