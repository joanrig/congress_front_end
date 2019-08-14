import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'semantic-ui-react'
import SenateCard from './SenateCard'


class SenateSearchBar extends Component {
  constructor(props) {
    super()

    this.state = {
      search: '',
      showNames: false,
    }
  }

  updateSearch= (event) => {
    this.setState({search: event.target.value.substr(0, 100)})
  }

  handleFlipClick = (prevState) => {
    this.setState(prevState => ({
      showNames: !prevState.showNames
    }))
    console.log('senate search bar: this.state.showNames is', this.state.showNames)
}

  render (){

    let value = this.state.showNames

    let searchInstructions =
      "search by name, state, party, next election year or gender (type the full word 'female' or 'male'); 'president' for candidates; 'leaving'; or 'freshmen'"

    let filteredSenators = this.props.senate.filter(
      (senator) => {
        let searchTerm = senator.last_name + senator.first_name + senator.state_full_name +
        senator.gender_search_term + senator.party_full_name + senator.next_election

        if (senator.running_for_president === true){
          searchTerm += "president"
        }

        if (senator.seniority < 2){
          searchTerm += "freshmenfreshman"
        }

        if (senator.status){
          searchTerm += "leaving"
        }

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
      <>
        <br/>
        <Button onClick={this.handleFlipClick} >Flip</Button>
        <div className="ui fluid icon input">

          <input
            type="text"
            placeholder={searchInstructions}
            value={this.state.search}
            onChange={this.updateSearch}
          />
          <i className="search icon"></i>
        </div>
        <h2 className='ui block header center'>{filteredSenators.length} senators meet your search requirements</h2>

        <Card.Group itemsPerRow={5}>
          {filteredSenators.map(senator =>
            <SenateCard
              showNames={value}
              bills={[]}
              donors={[]}
              key={senator.id} {...senator}/>
            )}
        </Card.Group>
      </>
    )
  }
}


const mapStateToProps = state => ({ senate: state.senate })

export default connect(mapStateToProps)(SenateSearchBar)

//<Button label="FLIP" onClick={this.handleFlipClick}/>
