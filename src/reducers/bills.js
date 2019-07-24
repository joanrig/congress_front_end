//state is the state of bills

export default (state =  [], action) => {
    switch(action.type){

    case "FETCH_BILLS_BY_MEMBER":
      return action.bills

     default:
        return state;
    }
  }


//   // action creator
// export const setSearch = (searchTerm) =>{
//     return{
//         type:"SET_SEARCH", search:searchTerm
//     }
// }
