import React from 'react'
import { connect } from 'react-redux'
import { Card, Form } from 'semantic-ui-react'
import { fetchBillsBySubject } from '../actions/bills'
import BillCard from './BillCard'


class BillsSearchBar extends React.Component {
  constructor(props) {
    super()
    this.state = {
      search: '',
      bills: []
    }
  }

  updateSearch= (event) => {
    this.setState({search: event.target.value.substr(0, 50)})
  }

  handleSubmit = (event) => {
    event.preventDefault() 
    this.props.fetchBillsBySubject(this.state.search)
    //this.props does not have 20 bills, but global state does
  }

  render (){


    // for separate filtering method after bills are fetched:
    // let input = this.state.search.toLowerCase()
    // let filteredBills = this.props.bills.filter(
    //   (bill => {
    //     let searchTerm = bill.primary_subject
    //     return searchTerm.toLowerCase().indexOf(input) !== -1
    //   })
    // )

    return (
      <>
        <br/>
          <Form onSubmit={this.handleSubmit}>
            <div className="ui fluid action input">
              <input
                type="search"
                value={this.state.search}
                placeholder="Search bills by subject..."
                onChange={this.updateSearch} />
              <input type="submit" value="search" />
            </div>
          </Form>

        <br/>
        <br/>
        <Card.Group itemsPerRow={5}>
        {this.props.bills && this.props.bills.map(bill =>
           <BillCard key={bill.id} {...bill} />
         )}
        </Card.Group>
      </>
    )
  }
}


const mapStateToProps = state => ({bills: state.bills.bills })

export default connect(mapStateToProps, {fetchBillsBySubject})(BillsSearchBar)
