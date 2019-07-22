import React, { Component } from 'react'
import { fetchSenate, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge } from '../actions/senate'
import { connect } from 'react-redux'
import { Container, Card, Button } from 'semantic-ui-react'
import SenateCard from './SenatorCard'


class SenatorsList extends React.Component {
  constructor() {
    super()

    this.state = {
      senators: [],
      search: ''
    }
  }

  updateSearch= (event) => {
    this.setState({search: event.target.value.substr(0, 100)})
  }

  render(){
    let filteredSenators = this.props.senate.filter(
      (senator) => {
        let searchTerm = senator.last_name + senator.first_name + senator.state_full_name +
        senator.gender_search_term + senator.party_full_name

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
        <h1 class="ui block header center">
          Who's Who in the U.S. Senate?  Let's sort them out!
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


        <h3 class="ui block header center">... or search for senators by name, state, party or gender
        (<em>note: type the whole word "male" or "female") to search by gender</em>)
          <div class="ui input focus center">
            <input type="text"
              value={this.state.search}
              onChange={this.updateSearch}
            />
          </div>
        </h3>

        <h2 class='ui block header center'>{filteredSenators.length} senators meet your search requirements</h2><br/>

        <Card.Group itemsPerRow={7}>
          {filteredSenators.map(senator =>
            <SenateCard key={senator.id} senator={senator}/>)}
        </Card.Group>
      </Container>
    )
  }
}


const mapStateToProps = state => ({senate: state.senate})

export default connect(mapStateToProps, { fetchSenate, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge })(SenatorsList)
