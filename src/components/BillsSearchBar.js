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
    console.log("finished calling fetch bills by subject, query is", this.state.search)
  }

  render (){
    let senator = this.props.senate


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
          <div className="ui five stackable cards">
            {this.state.bills.map(bill =>
            <BillCard key={bill.id} {...bill} />
          )}
          </div>
        </Card.Group>
      </>
    )
  }
}


const mapStateToProps = state => ({bills: state.bills})

export default connect(mapStateToProps, {fetchBillsBySubject})(BillsSearchBar)
