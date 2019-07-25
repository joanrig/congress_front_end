//state is the state of bills

const initialState = {
  bills: []
}

export default (state = initialState, action) => {
    switch(action.type){

    case "FETCH_BILLS_BY_MEMBER":
      return {
        ...state,
        bills: action.bills
      }

     default:
        return state;
    }
  }
