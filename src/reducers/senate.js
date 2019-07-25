
export default (state = [], action) => {
    switch(action.type){

    case "SET_SENATE":
      return action.senate

    case "LOYALISTS":
      return action.loyalists

    case "MAVERICKS":
      return action.mavericks

    case "TRUANTS":
      return action.truants

    case "SENIORITY":
      return action.seniority

    case "AGE":
      return action.age

    case "FETCH_BILLS_BY_SENATOR":
      let bills = action.payload.bills
      let senate = state.map(senator => {
        //find senator update bills
        if (senator.propublica_id === action.payload.id){
          senator.bills = bills
        }
        return senator
      }
    )
      return senate

     default:
        return state;
    }
  }
