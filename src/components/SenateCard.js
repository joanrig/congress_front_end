import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { fetchBillsBySenator } from '../actions/senate'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router'


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

  handleClick = () => {
    let id = this.props.propublica_id
    this.props.fetchBillsBySenator(id)
  }

  render() {
    let senator = this.props

     let facebook = senator.facebook_account
     let twitter = senator.twitter_account

     let youTube
     if (senator.youtube_account) {
       youTube = <a href={senator.youtube_account}><Icon className='large youtube' /></a>
     }

     let website = senator.website
     // let contact_form = senator.contact_form

     let name
     this.state.front? name = senator.first_name + ' ' + senator.last_name : name = "Guess Who?"

     //change className of <Card content extra> to change bg color based on gender / running for pres
     let genderName
     if (senator.gender === "F"){
       genderName = "female"
     }

     let runningForPresident
     if (senator.running_for_president){
       runningForPresident = <h4>I'm running for President!</h4>
     }

//for showing latest bill
     let url = ""
     let billTitle
     if (senator.bills[0]){
       let title = senator.bills[0].short_title.substring(0,75)+'...'
       url = senator.bills[0].govtrack_url
       billTitle = <a href={url}>{title}</a>
     } else {
       billTitle = "nothing here? Click gavel below."
     }

    return (
      <Card>
        <Image src={senator.party_logo} wrapped ui={false}  />

        <Card.Content onClick={this.toggleCard}>
          <Card.Header >
            Sen. {name}<br/>
            {senator.party}-{senator.state_full_name}
          </Card.Header>

          <Card.Description>
            Years in office: {senator.seniority} <br/>
            Age: {senator.age}<br/>
            Next election: {senator.next_election}<br/>
            Missed votes: {senator.missed_votes_pct}%<br/>
            Votes party line {senator.votes_with_party_pct}%<br/>
            {runningForPresident}
            <br/>
            <hr/>
            Most recent bill:<br/>
            {billTitle}

          </Card.Description>
        </Card.Content>

        <Card.Content extra className={genderName}>
          <div>
            <a href={facebook}><Icon className='large facebook' /></a>
            <a href={twitter}><Icon className='large twitter' /></a>
            {youTube}
            <a href={website}><Icon className="large home icon" /></a>
            <Icon onClick={this.handleClick} className="large legal icon" />
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default connect(null, { fetchBillsBySenator })(SenateCard)
