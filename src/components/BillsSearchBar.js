import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Form } from 'semantic-ui-react'
import { fetchBillsBySubject } from '../actions/bills'
// import BillsFilter from './BillsFilter'
import BillCard from './BillCard'


class BillsSearchBar extends Component {

  constructor(props) {
    super()
    this.state = {
      search: '',
      bills: []
    }
  }

  // componentDidMount = () => {
  //   debugger
  //   this.setState({
  //     bills: this.props.location.state.bills
  //   })
  // }


  updateSearch= (event) => {
    this.setState({search: event.target.value.substr(0, 50)})
  }

  handleSubmit = (event) => {
    event.preventDefault() 
    this.props.fetchBillsBySubject(this.state.search)
    //this.props does not have 20 bills, but global state does
  }

  render (){
    let bills = this.props.bills
    let content
    if (this.props.bills){
      content = this.props.bills.map(bill =><BillCard key={bill.id} {...bill} />)

   } else {
     content = "searching for your bills ..."
   }

   let searchInstructions = "Search for active bills by brief subject name, i.e. 'immigration' or 'climate'"

    return (
      <>
        <br/>
          <Form onSubmit={this.handleSubmit}>
            <div className="ui fluid action input">
              <input
                type="search"
                value={this.state.search}
                placeholder={searchInstructions}
                onChange={this.updateSearch} />
              <input type="submit" value="search" />
            </div>
          </Form>

        <br/>
        <br/>
        <Card.Group itemsPerRow={5}>
          {content}
        </Card.Group>
      </>
    )
  }
}


const mapStateToProps = state => ({bills: state.bills.bills })

export default connect(mapStateToProps, {fetchBillsBySubject})(BillsSearchBar)
