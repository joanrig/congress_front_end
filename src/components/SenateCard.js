import React, { Component} from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import SenateSocial from './SenateSocial'
import { fetchBillsBySenator } from '../actions/senate'
import { getSenatorFinances } from '../actions/senate'
import { connect } from 'react-redux'


class SenateCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //passed as props to enable flip of all cards
      showNames: this.props.showNames,
      //local only to toggle bills view per Card
      showBills: false,
      showDonors: false
     }
   }

  toggleName = () => {
    this.setState((prevState)=>{
      return {showNames: !prevState.showNames}
    })
  }

//bills
  handleGavelClick = () => {
    let id = this.props.propublica_id
    this.props.fetchBillsBySenator(id)
    this.setState({showBills: true})
  }

  toggleBills = () => {
    this.setState((prevState)=>{
      return {showBills: !prevState.showBills}
    })
  }

//donors
  handleFinanceClick = () => {
    let id = this.props.crp_id
    this.props.getSenatorFinances(id)
    this.setState({showDonors: true})
  }

  toggleDonors = () => {
    this.setState((prevState)=>{
      return {showDonors: !prevState.showDonors}
    })
  }

  render() {
    let senator = this.props

    let name
    this.state.showNames? name = senator.first_name + ' ' + senator.last_name : name = "Guess Who?"

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

    let gavel = <Icon className="legal icon"/>

    let dollarSign= <Icon className="dollar sign icon" />



    let content =
    <>
      {age}<br/>
      {yearsServed} <br/>
      {nextElection}<br/>
      {missedVotes} <br/>
      {votesWithParty}<br/>
      {leaving}
      {runningForPresident}
      <br/>
      <br/>
      <Button className="ui primary basic button"  onClick={this.handleGavelClick} >{gavel}Most recent bills </Button>
      <br/>
      <br/>
      <br/>
      <Button className="ui positive basic button" onClick={this.handleFinanceClick}>{dollarSign} Top three donors</Button>
      <br/>
      <br/>
      <br/>
    </>

    let bills
    if (senator.bills){
      bills = senator.bills.slice(0,5).map(bill =>
        <a href={bill.govtrack_url}>{bill.short_title.substring(0,75)+'...'}</a>
      )
    }

    let billList
    if (this.state.showBills){
      if (bills[0]){
        billList = bills.map(bill =>
        <>
          <li>{bill}</li>
          <br/>
        </>
        )

       }
     }

     let source
     let donorList
     if (this.state.showDonors) {
       if (senator.financial_disclosure){
         source = <a href={senator.financial_disclosure.source} className="center">source: OpenSecrets.org</a>
         donorList = senator.donors.slice(0,3).map(donor =>
         <>
           <br/>
           <strong>{donor.org_name}</strong>
           <li>total: ${donor.total}</li>
           <li>pacs: ${donor.pacs}</li>
           <li>individuals: ${donor.indivs}</li>
           <br/>
         </>
       )}
     }

    if (this.state.showBills){
      content =
      <>
       <br/>
       {billList}
       go back <Icon className="undo" onClick={this.toggleBills} />
      </>
    } else if (this.state.showDonors)
      content =
      <>
        {donorList}
        {source}
        <br/>
        <br/>
        go back  <Icon className="undo" onClick={this.toggleDonors} />
      </>


    return (
      <Card>
        <Image className="party-logo" src={senator.party_logo} wrapped ui={false}  />

        <Card.Content >
          <Card.Header onClick={this.toggleName}>
            Sen. {name}<br/>
            {senator.party}-{senator.state_full_name}
          </Card.Header>

          <Card.Description>
            {content}
          </Card.Description>
        </Card.Content>

        <Card.Content extra className={genderName}>
          <SenateSocial senator={this.props}/>
        </Card.Content>
      </Card>
    )
  }
}

export default connect(null, { fetchBillsBySenator, getSenatorFinances })(SenateCard)
