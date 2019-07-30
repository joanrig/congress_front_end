import React from 'react'


class BillFilter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter:''
     }
   }

   updateFilter= (event) => {
     this.setState({filter: event.target.value.substr(0, 100)})
   }

   render(){
     let filterInstructions =
       "Search the text of the bill's summary"

     let filteredBills = this.props.bills && this.props.bills.filter(
       (bill) => {
         debugger
         let filterTerm = bill.title
         let input = this.state.filter.toLowerCase()
         //This method returns -1 if the value to search for never occurs.
         if (filterTerm){
           return filterTerm.toLowerCase().indexOf(input) !==-1
         }
       }
     )

     return(
       <>
        <input
           type="text"
           placeholder={filterInstructions}
           value={this.state.filter}
           onChange={this.updateFilter}
         />
       </>

     )
   }
 }

 export default BillFilter
