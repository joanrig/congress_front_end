import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import SenateCard from './SenateCard'


class SenateSearchBar extends React.Component {
  constructor(props) {
    super()

    this.state = {
      search: ''
    }
  }

  updateSearch= (event) => {
    this.setState({search: event.target.value.substr(0, 100)})
  }

  render (){
    //this.props.senators has a full array of senators
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
        <h3 className="ui block header center">Search for senators by name, state, party, next election year or gender
        (<em>type the whole word "male" or "female")</em>). <br/>Try 'president' for presidential candidates, or 'freshmen' for new faces.<br/>
          <div className="ui input focus center">
            <input type="text"
              value={this.state.search}
              onChange={this.updateSearch}
            />
          </div>
        </h3>

        <h2 className='ui block header center'>{filteredSenators.length} senators meet your search requirements</h2><br/>

        <Card.Group itemsPerRow={7}>
          {filteredSenators.map(senator =>
            <SenateCard key={senator.id} senator={senator}/>)}
        </Card.Group>
      </>
    )
  }
}


const mapStateToProps = state => ({senate: state.senate})

export default connect(mapStateToProps)(SenateSearchBar)
