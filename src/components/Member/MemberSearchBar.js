import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import MemberCard from './MemberCard'


class MemberSearchBar extends Component {
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

    let members
    this.props.renderedBy === "senate" ? members = this.props.senate : members = this.props.house


    let filteredMembers = members.filter(
      (member) => {
        let searchTerm =
        member.last_name +
        member.first_name + member.state_full_name +
        member.gender_search_term + member.party_full_name + member.next_election

        if (member.running_for_president === true){
          searchTerm += "president"
        }

        if (member.seniority <= 2){
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
        return searchTerm.toLowerCase().indexOf(input) !== -1
      }
    )

    //define members as senator vs. rep, pluralize search results notice
    let member
    filteredMembers[0] && filteredMembers[0].chamber === "senate" ? member = "senator" : member = "representative"

    let count = filteredMembers.length
    let input = this.state.search
    let resultsCount
    let memberPluralized
    count === 1 ? memberPluralized = member : memberPluralized = member + 's'

    if (input) {
      resultsCount =
      <>
        {count} {memberPluralized} found in your search for {input}
      </>
    } else {
      resultsCount =
      <>
        {count} {memberPluralized} found
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
