import React, { Component } from 'react'
import { fetchSenate } from '../actions/senate'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import SenateCard from './SenatorCard'


class Senate extends React.Component {
  constructor() {
    super()

    this.state = {
      senators: [],
      search: ''
    }
  }

  componentDidMount(){
    this.props.fetchSenate()
  }

  updateSearch= (event) => {
    this.setState({search: event.target.value.substr(0, 100)})
  }

  render() {
    let filteredSenators = this.props.senate.filter(
      (senator) => {
        let name = senator.last_name.toUpperCase() + senator.first_name.toUpperCase() + senator.state_full_name.toUpperCase() +
        senator.gender_search_term.toUpperCase() + senator.party_full_name.toUpperCase()

        let input = this.state.search.toUpperCase()
          if (input === "MALE"){
            input = "WOMENFALSE"
          } else if (input === "FEMALE"){
            input = "WOMENTRUE"
          }
        //!== -1 means not found?
        return name.indexOf(input) !== -1
      }
    )

    return (
      <div>
        <h1>U.S. Senate</h1>
        Search for a senator by name
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <br/>
        <br/>

        {filteredSenators.size} senators meet your search requirements<br/>
        <Card.Group itemsPerRow={7}>
          {filteredSenators.map(senator =>
            <SenateCard key={senator.id} senator={senator}/>)}
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = state => ({senate: state.senate})


export default connect(mapStateToProps, {fetchSenate})(Senate)
