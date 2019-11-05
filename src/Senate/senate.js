
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


    case "GET_SENATOR_FINANCES":
      let financialDisclosure = action.payload.financialDisclosure
      let senate1 = state.map(senator => {
        if (senator.crp_id === action.payload_id){
          senator.financialDisclosure = financialDisclosure
        }
        return senator
      }
    )
      return senate1

     default:
        return state;
    }
  }
