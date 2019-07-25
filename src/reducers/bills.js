//state is the state of bills

//this will go in senate, another one for house reducer, no bills reducer
export default (state = { senate: []} , action) => {
    switch(action.type){

    case "FETCH_BILLS_BY_MEMBER":
      let bills = action.payload
      let senator = state.senate.find_by_id(action.payload.id)
      debugger


     default:
        return state;
    }
  }


  // var someProperty = {...this.state.someProperty}
  // someProperty.flag = true;
  // this.setState({someProperty})
