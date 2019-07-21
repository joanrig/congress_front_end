import React, { Component } from 'react'
import { fetchHouse, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge } from '../actions/house'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import RepCard from '../components/RepCard'

class RepsList extends React.Component {
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
        let searchTerm = rep.last_name +
        rep.first_name +
        rep.state_full_name +
        rep.gender_search_term +
        rep.party_full_name

        let input = this.state.search.toLowerCase()
          if (input === "male"){
            input = "womenfalse"
          } else if (input === "female"){
            input = "womentrue"
          }
        //!== -1 means not found?
        return searchTerm.toLowerCase().indexOf(input) !== -1
      }
    )

    return (
      <div>
        <h1>U.S. House of Representatives</h1>
        <button onClick={() => this.props.fetchLoyalists()}>Party Loyalists</button>
        <button onClick={() => this.props.fetchMavericks()}>Party Mavericks</button>
        <button onClick={() => this.props.fetchTruants()}>Most Truant</button>
        <button onClick={() => this.props.fetchBySeniority()}>Longest Serving</button>
        <button onClick={() => this.props.fetchByAge()}>Oldest</button>
        <br/>
        <br/>
        ... or search for representatives by name, state, party or gender
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


export default connect(mapStateToProps, {fetchHouse, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge})(RepsList)
