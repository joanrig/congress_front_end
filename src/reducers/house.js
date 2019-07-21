
export default (state = [], action) => {
    switch(action.type){


    case "SET_HOUSE":
        return action.house

    case "LOYALISTS":
      return action.loyalists

    case "MAVERICKS":
      return action.mavericks

     default:
        return state;
    }
  }
