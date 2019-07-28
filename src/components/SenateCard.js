import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { fetchBillsBySenator } from '../actions/senate'
import { showSenatorBills } from '../actions/bills'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';



class SenateCard extends React.Component {
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


  handleMoreBillsClick = () => {
    console.log("handle more bills was clicked")
    let bills = this.props.bills
    this.props.showSenatorBills(bills)
  }

  render() {
    let senator = this.props

    let name
    this.state.front? name = senator.first_name + ' ' + senator.last_name : name = "Guess Who?"

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


//show latest bill
     let url = ""
     let billTitle
     if (senator.bills[0]){
       let title = senator.bills[0].short_title.substring(0,75)+'...'
       url = senator.bills[0].govtrack_url
       billTitle = <a href={url}>{title}</a>
     } else {
       billTitle = "nothing here? Click the gavel!"
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
            Years in office: {senator.seniority} <br/>
            Age: {senator.age} <br/>
            Next election: {senator.next_election} <br/>
            Missed votes: {senator.missed_votes_pct}% <br/>
            Votes party line {senator.votes_with_party_pct}% <br/>
            {leaving}
            {runningForPresident}
            <br/>
            <hr/>
            Most recent bill: {gavel}<br/>
            {billTitle}
            <Link to={'./bills'} onClick={this.handleMoreBillsClick}>
              more bills
            </Link>
            <hr/>
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

export default connect(null, { fetchBillsBySenator, showSenatorBills })(SenateCard)
