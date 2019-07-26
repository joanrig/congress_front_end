import React from 'react'
import { connect } from 'react-redux'
import { Container, Card, Button } from 'semantic-ui-react'
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
    this.setState({search: event.target.value.substr(0, 100)})
  }

  render (){
    let searchInstructions =
      "enter a subject, i.e. 'guns', 'education', 'China'"

    let input = this.state.search.toLowerCase()
    // let filteredBills = this.props.bills.filter(
    //   (bill => {
    //     let searchTerm = bill.primary_subject
    //     return searchTerm.toLowerCase().indexOf(input) !== -1
    //   })
    // )

    return (
      <>

          <br/>
          <div className="ui fluid icon input">
            <input
              type="text"
              placeholder={searchInstructions}
              value={this.state.search}
              onChange={this.updateSearch}
            />
            <i className="search icon"></i>
          </div>
          <br/>
          <br/>
          <Card.Group itemsPerRow={5}>
          <div className="ui five stackable cards">

          </div>
          </Card.Group>

      </>
    )
  }
}


const mapStateToProps = state => ({bills: state.bills})

export default connect(mapStateToProps)(BillsSearchBar)
