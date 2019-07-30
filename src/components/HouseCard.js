import React, { Component} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { fetchBillsByRep } from '../actions/house'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class HouseCard extends Component {
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
    this.props.fetchBillsByRep(id)
  }

  render() {
    let rep = this.props

    let name
    this.state.front? name = rep.first_name + ' ' + rep.last_name : name = "Guess Who?"

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

    let gavel = <Icon onClick={this.handleGavelClick} className="large legal icon" />

    let phone = <a href={rep.phone_clickable}><Icon className="large phone icon" /></a>


     let url = ""
     let billTitle
     if (rep.bills[0]){
       let title = rep.bills[0].short_title.substring(0,75)+'...'
       url = rep.bills[0].govtrack_url
       billTitle = <a href={url}>{title}</a>
     } else {
       billTitle = billTitle = "nothing here? Click the gavel!"
     }

    return (
      <Card>
        <Image src={rep.party_logo} wrapped ui={false} className={genderName}/>

        <Card.Content >
          <Card.Header onClick={this.toggleCard}>
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
            Most recent bill: {gavel}<br/>
            {billTitle}
            <Link
              to={'./bills'}
              bills={this.props.bills}>
              <br/>
              <br/>
                more bills
            </Link>
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

export default connect(null, { fetchBillsByRep })(HouseCard)
