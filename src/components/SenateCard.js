import React, { Component} from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { fetchBillsBySenator } from '../actions/senate'
import { getMemberFinances } from '../actions/financialDisclosures'
import { connect } from 'react-redux'


class SenateCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      front: props.showNames
     }
   }

  toggleCard = () =>{
    this.setState((prevState)=>{
      return {front: !prevState.front}
    })
  }

  handleGavelClick = () => {
    let id = this.props.propublica_id
    this.props.fetchBillsBySenator(id)
  }

  handleFinanceClick = () => {
    let id = this.props.crp_id
    this.props.getMemberFinances(id)
  }

  render() {
    let senator = this.props

    let name
    this.state.front? name = senator.first_name + ' ' + senator.last_name : name = "Guess Who?"

    let yearsServed = 'Years in office: '+  senator.seniority
    let votesWithParty = 'Votes party line ' + senator.votes_with_party_pct + '%'
    let missedVotes = 'Missed votes: ' + senator.missed_votes_pct + '%'
    let nextElection = 'Next election: ' + senator.next_election
    let age = 'Age: ' + senator.age

    //change className to change bg color based on gender
    let genderName
    if (senator.gender === "F"){
      genderName = "female"
    }

    let runningForPresident
    if (senator.running_for_president){
      runningForPresident = <h4>I'm running for President!</h4>
    }

    let leaving
    if (senator.status){
      leaving = <h5>{senator.status_note}</h5>
    }

    let facebook
    if (senator.facebook_account) {
      facebook = <a href={senator.facebook_account} ><Icon className='large facebook' /></a>
    }

    let twitter
    if (senator.twitter_account) {
      twitter = <a href={senator.twitter_account} ><Icon className='large twitter' /></a>
    }

    let youTube
    if (senator.youtube_account) {
      youTube = <a href={senator.youtube_account} ><Icon className='large youtube' /></a>
    }

    let website
    if (senator.website) {
      website = <a href={senator.website} ><Icon className='large home icon' /></a>
    }

    let contact_form
    if (senator.contact_form) {
      contact_form = <a href={senator.contact_form} ><Icon className='large mail' /></a>
    }

    let gavel = <Icon onClick={this.handleGavelClick} className="legal icon" />

    let phone = <a href={senator.phone_clickable}><Icon className="large phone icon" /></a>

    let bills
    if (senator.bills){
      bills = senator.bills.map(bill =>
        <a href={bill.govtrack_url}>{bill.short_title.substring(0,75)+'...'}</a>
      )
    }

    let billTitle
     if (bills[0]){
      billTitle =
        <>
          {bills[0]}
          <br/>
          <br/>
          {bills[1]}
          <br/>
          <br/>
          {bills[2]}

        </>
     } else {
       billTitle = "nothing here? Click the gavel!"
     }

    let donors
    if (senator.financial_disclosure){
      donors = senator.donors.map(donor =>
      <>
        <h3>{donor.org_name}</h3>
        <ul>
          <li>total: ${donor.total}</li>
          <li>pacs: ${donor.pacs}</li>
          <li>individuals: ${donor.indivs}</li>
        </ul>
      </>
    )
    } else {
      donors = "nothing here? click the button"
    }

    return (
      <Card>
        <Image src={senator.party_logo} wrapped ui={false}  />

        <Card.Content >
          <Card.Header onClick={this.toggleCard}>
            Sen. {name}<br/>
            {senator.party}-{senator.state_full_name}
          </Card.Header>

          <Card.Description>
            {age}<br/>
            {yearsServed} <br/>
            {nextElection}<br/>
            {missedVotes} <br/>
            {votesWithParty}<br/>
            {leaving}
            {runningForPresident}
            <br/>
            <hr/>
            Most recent bills: {gavel}
            <br/>
            <br/>
            {billTitle}
            <br/>
            <br/>

            <hr/>
            <Button onClick={this.handleFinanceClick} />
            <h4>Contributors to last election</h4>
            {donors}
          </Card.Description>
        </Card.Content>

        <Card.Content extra className={genderName}>
          <div>
            {facebook}
            {twitter}
            {youTube}
            {website}
            {contact_form}
            {phone}
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default connect(null, { fetchBillsBySenator, getMemberFinances })(SenateCard)
