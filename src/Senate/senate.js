
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




//
//   export default (state = {
//     senate: [],
//     loyalists: [],
//     mavericks: [],
//     truants: [],
//     seniority: [],
//     age: [],
//     loading: false
//   }, action)  => {
//       switch(action.type){
//
//   case "LOADING":
//     return {...state, loading: true}
//
//   case "SET_SENATE":
//     return {
//       ...state,
//       loading: false,
//       senate: action.senate
//     }
//
//   case "LOYALISTS":
//     return {
//       ...state,
//       loading: false,
//       loyalists: action.loyalists
//    }
//
//   case "MAVERICKS":
//     return {
//       ...state,
//       loading: false,
//       mavericks: action.mavericks
//     }
//
//   case "TRUANTS":
//     return {
//       ...state,
//       loading: false,
//       truants: action.truants
//     }
//
//   case "SENIORITY":
//     return {
//       ...state,
//       loading: false,
//       seniority: action.seniority
//     }
//
//   case "AGE":
//     return {
//       ...state,
//       loading: false,
//       age: action.age
//     }
//
//   case "FETCH_BILLS_BY_SENATOR":
//     let bills = action.payload.bills
//     let senate = state.map(senator => {
//       //find senator update bills
//       if (senator.propublica_id === action.payload.id){
//         senator.bills = bills
//       }
//      //return senator with updated bills array
//       return senator
//     })
//
//     return senate
//
//   default:
//     return {
//        ... state,
//        loading: false,
//        senate: action.senate
//      }
//   }
// }
