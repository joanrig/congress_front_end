
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


    case "GET_REP_FINANCES":
      let financialDisclosure = action.payload.financialDisclosure
      let house1 = state.map(rep => {
        if (rep.crp_id === action.payload_id){
          rep.financialDisclosure = financialDisclosure
        }
        return rep
      }
    )
      return house1

    case "GET_REP_ASSETS":
      let assetReport = action.payload.assetReport
      let house2 = state.map(rep => {
        if (rep.crp_id === action.payload_id){
          rep.assetReport = assetReport
        }
        return rep
      }
    )
      return house2


     default:
        return state;
    }
  }
