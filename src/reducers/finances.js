export default (state = { finances:[], loading: false}, action) => {


    switch(action.type){

    case "LOADING":
      return {loading: true}

    case "SHOW_SENATOR_FINANCES":
      return {
        financialDisclosure: action.financialDisclosure, loading: false
      }
      //has 20 bills

    case 'ERROR':
      return { bills: action.error.message }

     default:
        return state;
    }
  }
