
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

     default:
        return state;
    }
  }
