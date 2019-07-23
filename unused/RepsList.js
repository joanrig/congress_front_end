import React, { Component } from 'react'
import { fetchHouse, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge } from '../actions/house'
import { connect } from 'react-redux'
import { Container, Card, Button } from 'semantic-ui-react'
import RepCard from './RepCard'

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
      <Container>
        <br/>
        <h1 class="ui block header center" color="blue">
          Who's Who in the U.S. House of Representatives? Let's sort them out!
        </h1>
        <br/>


        <div class='senate social center'>
          <Button size="huge" color="green" onClick={() => this.props.fetchLoyalists()}>Party Loyalists</Button>
          <Button size="huge" color="blue" onClick={() => this.props.fetchMavericks()}>Party Mavericks</Button>
          <Button size="huge" color="red" onClick={() => this.props.fetchTruants()}>Most Truant</Button>
          <Button size="huge" color="black" onClick={() => this.props.fetchBySeniority()}>Longest Serving</Button>
          <Button size="huge" color="orange" onClick={() => this.props.fetchByAge()}>Oldest</Button>
        </div>
        <br/>
        <br/>

        <h3 class="ui block header center">... or search for representatives by name, state, party or gender
        (<em>note: type the whole word "male" or "female") to search by gender</em>)
          <div class="ui input focus center">
            <input type="text"
              value={this.state.search}
              onChange={this.updateSearch}
            />
          </div>
        </h3>
        <h2 class='ui block header center'>{filteredReps.length} representatives meet your search requirements</h2><br/>

        <Card.Group itemsPerRow={7}>
          {filteredReps.map(rep => <RepCard key={rep.id} rep={rep}/>)}
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = state => ({house: state.house})

export default connect(mapStateToProps, {fetchHouse, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge})(RepsList)
