import React, { Component } from 'react'


class SenateBio extends Component {
  constructor(props) {
    super()
  }

  render(){
    let senator = this.props.senator

    let yearsServed = 'Years in office: '+  senator.seniority
    let votesWithParty = 'Votes party line ' + senator.votes_with_party_pct + '%'
    let missedVotes = 'Missed votes: ' + senator.missed_votes_pct + '%'
    let nextElection = 'Next election: ' + senator.next_election
    let age = 'Age: ' + senator.age

    let runningForPresident
    if (senator.running_for_president){
      runningForPresident =
      <h4>I'm running for President!</h4>
    } 

    let leaving
    if (senator.status){
      leaving = <h5>{senator.status_note}</h5>
    }

    return (
      <div>
        {age}<br/>
        {yearsServed} <br/>
        {nextElection}<br/>
        {missedVotes} <br/>
        {votesWithParty}<br/>
        {leaving}
        {runningForPresident}
      <br/>
      </div>
    )

  }

}
export default SenateBio
