export default (state = { bills:[], loading: false}, action) => {


    switch(action.type){

    case "LOADING":
      return {loading: true}


    case "FETCH_BILLS_BY_SUBJECT":
      return {
        bills: action.bills,
        loading: false
      }

    case "SHOW_SENATOR_BILLS":
      return {
        loading: false
      }

    case 'ERROR':
      return { bills: action.error.message }

     default:
        return state;
    }
  }
