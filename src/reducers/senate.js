
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


// nothing loads
//Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
    // in MemberSearchBar (created by ConnectFunction)

  // export default (state = {
  //     senate: []
  //   }, action) => {
  //
  //     switch(action.type){
  //
  //     case "SET_SENATE":
  //       return { ...state, senate: action.senate }
  //
  //     case "LOYALISTS":
  //       return { ...state, senate: action.loyalists }
  //
  //     case "MAVERICKS":
  //       return { ...state, senate: action.mavericks }
  //
  //     case "TRUANTS":
  //       return { ...state, senate: action.truants }
  //
  //     case "SENIORITY":
  //       return { ...state, senate: action.seniority }
  //
  //     case "AGE":
  //       return { ...state, senate: action.age }
  //
  //     case "FETCH_BILLS_BY_SENATOR":
  //       let bills = action.payload.bills
  //       let senate = state.map(senator => {
  //         //find senator update bills
  //         if (senator.propublica_id === action.payload.id){
  //           senator.bills = bills
  //         }
  //         return senator
  //       }
  //     )
  //       return { ...state, senate: senate }
  //
  //
  //     case "GET_SENATOR_FINANCES":
  //       let financialDisclosure = action.payload.financialDisclosure
  //       let senate1 = state.map(senator => {
  //         if (senator.crp_id === action.payload_id){
  //           senator.financialDisclosure = financialDisclosure
  //         }
  //         return senator
  //       }
  //     )
  //       return { ...state, senate: senate1 }
  //
  //      default:
  //         return state;
  //     }
  //   }



//uncaught in promise members is not a function
//   export default (state = {
//     senate: [],
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
//       senate: action.loyalists
//    }
//
//   case "MAVERICKS":
//     return {
//       ...state,
//       loading: false,
//       senate: action.mavericks
//     }
//
//   case "TRUANTS":
//     return {
//       ...state,
//       loading: false,
//       senate: action.truants
//     }
//
//   case "SENIORITY":
//     return {
//       ...state,
//       loading: false,
//       senate: action.seniority
//     }
//
//   case "AGE":
//     return {
//       ...state,
//       loading: false,
//       senate: action.age
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
//   case "GET_SENATOR_FINANCES":
//     let financialDisclosure = action.payload.financialDisclosure
//     let senate1 = state.map(senator => {
//       if (senator.crp_id === action.payload_id){
//         senator.financialDisclosure = financialDisclosure
//       }
//       return senator
//     }
//   )
//     return senate1
//
//   default:
//     return {
//        ... state,
//        loading: false,
//        senate: action.senate
//      }
//   }
// }
