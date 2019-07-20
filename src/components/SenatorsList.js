import React, { Component } from 'react'
import { fetchSenate } from '../actions/senate'
import { fetchLoyalists } from '../actions/senate'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import SenateCard from '../components/SenatorCard'
import Sort from '../components/Sort'


class SenatorsList extends React.Component {
  constructor() {
    super()

    this.state = {
      senators: [],
      search: '',
      sort: ''
    }
  }

  componentDidMount(){
    this.props.fetchSenate()
  }

  updateSearch= (event) => {
    this.setState({search: event.target.value.substr(0, 100)})
  }

  handleChoice = (event) => {
    this.setState({sort: event.target.value})

    if (this.state.sort === "loyalists"){
      let loyalists = this.props.fetchLoyalists()
      this.setState({ senators: loyalists })
    }
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
      <div>
        <h1>U.S. Senate</h1>
        < Sort handleChoice={this.handleChoice}/>
        <br/>
        <br/>
        ... or search for senators by name, state, party or gender
        (<em>note: type the whole word "male" or "female") to search by gender</em>)
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <br/>
        <br/>

        <h2>{filteredSenators.length} senators meet your search requirements</h2><br/>
        <Card.Group itemsPerRow={7}>
          {filteredSenators.map(senator =>
            <SenateCard key={senator.id} senator={senator}/>)}
        </Card.Group>
      </div>
    )
  }
}


const mapStateToProps = state => ({senate: state.senate})


export default connect(mapStateToProps, {fetchSenate})(SenatorsList)
