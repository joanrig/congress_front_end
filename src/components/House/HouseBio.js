import React, { Component } from 'react'



class HouseBio extends Component {
  constructor(props) {
    super()
  }

  render(){
    let rep = this.props.rep

    let yearsServed = 'Years in office: '+  rep.seniority
    let votesWithParty = 'Votes party line ' + rep.votes_with_party_pct + '%'
    let missedVotes = 'Missed votes: ' + rep.missed_votes_pct + '%'
    let nextElection = 'Next election: ' + rep.next_election
    let age = 'Age: ' + rep.age

    let runningForPresident
    if (rep.running_for_president){
      runningForPresident = <h4>I'm running for President!</h4>
    }

    let leaving
    if (rep.status){
      leaving = <h5>{rep.status_note}</h5>
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
export default HouseBio
