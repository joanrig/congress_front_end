
export default (state = [], action) => {
    switch(action.type){

    case "SET_HOUSE":
        return action.house

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

    case "FETCH_BILLS_BY_REP":
      let bills = action.payload.bills
      let house = state.map(rep => {
        //find rep update bills
        if (rep.propublica_id === action.payload.id){
          rep.bills = bills
        }
        return rep
      }
    )
      return house

     default:
        return state;
    }
  }
