import React, { Component } from 'react'
import { fetchHouse } from '../actions/house'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import RepCard from '../components/RepCard'

class House extends React.Component {
  constructor(){
    super()

    this.state = {
      reps: [],
      search: ''
    }
  }

  componentDidMount(){
    this.props.fetchHouse()
  }

  updateSearch= (event) => {
    this.setState({search: event.target.value.substr(0, 100)})
  }

  render() {
    let filteredReps = this.props.house.filter(
      (rep) => {
        let searchTerm = rep.last_name.toUpperCase() + rep.first_name.toUpperCase() + rep.state_full_name.toUpperCase() + rep.gender_search_term.toUpperCase() + rep.party_full_name.toUpperCase()

        let input = this.state.search.toUpperCase()
          if (input === "MALE"){
            input = "WOMENFALSE"
          } else if (input === "FEMALE"){
            input = "WOMENTRUE"
          }
        //!== -1 means not found?
        return searchTerm.indexOf(input) !== -1
      }
    )

    return (
      <div>
        <h1>U.S. House of Representatives</h1>
        Search for representatives by name, state, party or gender
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <br/>
        <br/>
        <h2>{filteredReps.length} representatives meet your search requirements</h2><br/>
        <Card.Group itemsPerRow={7}>
          {filteredReps.map(rep => <RepCard key={rep.id} rep={rep}/>)}
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = state => ({house: state.house})


export default connect(mapStateToProps, {fetchHouse})(House)
