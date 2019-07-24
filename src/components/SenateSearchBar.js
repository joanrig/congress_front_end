import React from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'semantic-ui-react'
import SenateCard from './SenateCard'


class SenateSearchBar extends React.Component {
  constructor(props) {
    super()

    this.state = {
      search: '',
      showNames: true,
      senate: props.senate
    }
  }

  updateSearch= (event) => {
    this.setState({search: event.target.value.substr(0, 100)})
  }

  flip = () => {
    console.log('firing flip')
    this.setState((prevState)=>{
      return {showNames: !prevState.showNames}
    })
  }


  render (){

    let searchInstructions =
      "search by name, state, party, next election year or gender (type the full word 'female' or 'male'); 'president' for presidential candidates,'freshmen' for the newest faces!"

    let filteredSenators = this.props.senate.filter(
      (senator) => {
        let searchTerm = senator.last_name + senator.first_name + senator.state_full_name +
        senator.gender_search_term + senator.party_full_name + senator.next_election

        if (senator.running_for_president === true){
          searchTerm += "president"
        }

        if (senator.seniority < 2){
          searchTerm += "freshmen"
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
        <div className="ui fluid icon input">
          <Button label="FLIP" onClick={this.flip}/>
          <input
            type="text"
            placeholder={searchInstructions}
            value={this.state.search}
            onChange={this.updateSearch}
          />
          <i className="search icon"></i>
        </div>


        <h2 className='ui block header center'>{filteredSenators.length} senators meet your search requirements</h2><br/>

        <Card.Group itemsPerRow={5}>
          {filteredSenators.map(senator =>
            <SenateCard showNames={this.state.showNames} key={senator.id} senator={senator}/>)}
        </Card.Group>
      </>
    )
  }
}


const mapStateToProps = state => ({ senate: state.senate })

export default connect(mapStateToProps)(SenateSearchBar)
