


export default (state = [], action) => {
    switch(action.type){

    case "SET_SENATE":
      console.log('set senate fired from senate reducer')
      //why is this not return { ...state, senate}
      return action.senate


    case "LOYALISTS":
      console.log('loyalists fired from senate reducer')
      console.log('action payload is', action.payload)//undefined
      return action.loyalists



     default:
        return state;
    }
  }
