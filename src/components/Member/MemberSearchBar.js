import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import MemberCard from './MemberCard'


//note - this is senate search bar but does not work for house search bar - notes at end

class MemberSearchBar extends PureComponent {
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

  render (){

    let searchInstructions =
      "search by name, state, party, next election year or gender (type the full word 'female' or 'male'); 'president' for candidates; 'leaving'; or 'freshmen'"

    //find way to toggle between this.props.senate/house based on which action was just called?

    // let filteredMembers = this.props.house.filter(
    let filteredMembers = this.props.senate.filter(
      (member) => {
        let searchTerm =
        member.last_name +
        member.first_name + member.state_full_name +
        member.gender_search_term + member.party_full_name + member.next_election

        if (member.running_for_president === true){
          searchTerm += "president"
        }

        if (member.seniority < 2){
          searchTerm += "freshmenfreshman"
        }

        if (member.status){
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

    let count = filteredMembers.length
    let input = this.state.search
    let resultsCount
    if (input) {
      resultsCount =
      <>
        {count} senators found in your search for {input}
      </>
    } else {
      resultsCount =
      <>
        {count} senators found
      </>
    }


    return (
      <>
        <br/>
        <div className="ui fluid icon input">

          <input
            type="text"
            placeholder={searchInstructions}
            value={this.state.search}
            onChange={this.updateSearch}
            className="search text"
          />
          <i className="search icon"></i>
        </div>
        <h2 className='ui block header center'>{resultsCount}</h2>

        <Card.Group itemsPerRow={5}>
          {filteredMembers.map(member =>
            <MemberCard
              showNames={this.state.showNames}
              bills={[]}
              donors={[]}
              key={member.id} {...member}/>
            )}
        </Card.Group>
      </>
    )
  }
}

const mapStateToProps = state => ({ senate: state.senate, house: state.house })

export default connect(mapStateToProps)(MemberSearchBar)
