import React, { Component} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { fetchBillsByRep } from '../actions/house'
import { getMemberFinances } from '../actions/financialDisclosures'
import { connect } from 'react-redux'


class HouseCard extends Component {
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

   toggleName = () =>{
    this.setState((prevState)=>{
      return {showNames: !prevState.showNames}
    })
  }

  //bills
  handleGavelClick = () => {
    let id = this.props.propublica_id
    this.props.fetchBillsByRep(id)
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
      this.props.getMemberFinances(id)
      this.setState({showDonors: true})
    }

  toggleDonors = () => {
      this.setState((prevState)=>{
        return {showDonors: !prevState.showDonors}
      })
    }


  render() {
    let rep = this.props

    let name
    this.state.showNames? name = rep.first_name + ' ' + rep.last_name : name = "Guess Who?"

    let yearsServed = 'Years in office: '+  rep.seniority
    let votesWithParty = 'Votes party line ' + rep.votes_with_party_pct + '%'
    let missedVotes = 'Missed votes: ' + rep.missed_votes_pct + '%'
    let nextElection = 'Next election: ' + rep.next_election
    let age = 'Age: ' + rep.age

    let genderName
    if (rep.gender === "F"){
      genderName = "female"
    }

    let runningForPresident
    if (rep.running_for_president){
      runningForPresident = <h4>I'm running for President!</h4>
    }

    let leaving
    if (rep.status){
      leaving = <h5>{rep.status_note}</h5>
    }

    let facebook
    if (rep.facebook_account) {
      facebook = <a href={rep.facebook_account} ><Icon className='large facebook' /></a>
    }

    let twitter
    if (rep.twitter_account) {
      twitter = <a href={rep.twitter_account} ><Icon className='large twitter' /></a>
    }

    let youTube
    if (rep.youtube_account) {
      youTube = <a href={rep.youtube_account} ><Icon className='large youtube' /></a>
    }

    let website
    if (rep.website) {
      website = <a href={rep.website} ><Icon className='large home icon' /></a>
    }

    let contact_form
    if (rep.contact_form) {
      contact_form = <a href={rep.contact_form} ><Icon className='large mail' /></a>
    }

    let gavel = <Icon onClick={this.handleGavelClick} className=" legal icon" />

    let dollarSign= <Icon onClick={this.handleFinanceClick} className="dollar sign icon" />

    let phone = <a href={rep.phone_clickable}><Icon className="large phone icon" /></a>


    let bills
    if (rep.bills){
      bills = rep.bills.slice(0,3).map(bill =>
        <a href={bill.govtrack_url}>{bill.short_title.substring(0,75)+'...'}</a>
      )
    }

    let billTitles
    if (this.state.showBills){
      if (bills[0]){
       billTitles = bills.map(bill =>
          <>
            <li>{bill}</li>
            <br />
          </>
        )
      }
    }

    let toggleBillsIcon
    if (this.state.showBills){
      toggleBillsIcon = "toggle on icon"
    } else {
      toggleBillsIcon = "toggle off icon"
    }

    let donors
    if (this.state.showDonors) {
      if (rep.financial_disclosure){
        donors = rep.donors.slice(0,3).map(donor =>
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

    let toggleDonorsIcon
    if (this.state.showDonors){
      toggleDonorsIcon = "toggle on icon"
    } else {
      toggleDonorsIcon = "toggle off icon"
    }





    return (
      <Card>
        <Image src={rep.party_logo} wrapped ui={false} className="party-logo"/>

        <Card.Content >
          <Card.Header onClick={this.toggleName}>
            Rep. {name}<br/> {rep.party}-{rep.state_full_name}<br/>
            District {rep.district}
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
            Get most recent bills: <button className="billsButton"> {gavel}</button>
            <br/>
            show/hide bills  <Icon className={toggleBillsIcon} onClick={this.toggleBills} />
            <br/>
            <br/>
            {billTitles}
            <br />
            <hr/>
            Get top three donors <button className="donorsButton"> {dollarSign}</button>
            <br/>
            show/hide donors  <Icon className={toggleDonorsIcon} onClick={this.toggleDonors} />
            <br/>
            {donors}
            <br/>

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

export default connect(null, { fetchBillsByRep, getMemberFinances })(HouseCard)
