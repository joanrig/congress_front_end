import React, { PureComponent } from 'react'


class MemberBio extends PureComponent {
  constructor(props) {
    super()
  }

  render(){
    let member = this.props.member

    let yearsServed = 'Years in office: '+  member.seniority
    let votesWithParty = 'Votes party line ' + member.votes_with_party_pct + '%'
    let missedVotes = 'Missed votes: ' + member.missed_votes_pct + '%'
    let nextElection = 'Next election: ' + member.next_election
    let age = 'Age: ' + member.age

    let runningForPresident
    if (member.running_for_president){
      runningForPresident =
      <h4>I'm running for President!</h4>
    }

    let leaving
    if (member.status){
      leaving = <h5>{member.status_note}</h5>
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
export default MemberBio
