//state is the state of bills

export default (state = { bills: [] }, action) => {
    switch(action.type){

    case "FETCH_BILLS_BY_MEMBER":
      return [...state, bills [ ...bills, action.bills]

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
