import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { fetchBillsByRep } from '../actions/house'
import { connect } from 'react-redux'


class HouseCard extends React.Component {
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
    this.props.fetchBillsByRep(id)
  }

  render() {
    let rep = this.props
    //figure out how to only show these if they exist
     let facebook = rep.facebook_account
     let twitter = rep.twitter_account
     let youtube = rep.you_tube_account
     let website = rep.website
     // let contact_form = rep.contact_form

     let name
     this.state.front? name = rep.first_name + ' ' + rep.last_name : name = "Guess Who?"

     let genderName
     if (rep.gender === "F"){
       genderName = "female"
     }

     let runningForPresident
     if (rep.running_for_president){
       runningForPresident = <h4>I'm running for President!</h4>
     }

     let url = ""
     let billTitle
     if (rep.bills[0]){
       let title = rep.bills[0].short_title.substring(0,75)+'...'
       url = rep.bills[0].govtrack_url
       billTitle = <a href={url}>{title}</a>
     } else {
       billTitle = "nothing here? Click gavel below."
     }

    return (
      <Card>
        <Image src={rep.party_logo} wrapped ui={false} className={genderName}/>

        <Card.Content onClick={this.toggleCard}>
          <Card.Header>
            Rep. {name}<br/> {rep.party}-{rep.state_full_name}<br/>
            District {rep.district}
          </Card.Header>

          <Card.Description>
            Years in office: {rep.seniority} <br/>
            Age: {rep.age}<br/>
            Next election: {rep.next_election}<br/>
            Missed votes: {rep.missed_votes_pct}%<br/>
            Votes party line {rep.votes_with_party_pct}%<br/>
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
              <a href={youtube}><Icon className='large youtube' /></a>
              <a href={website}><Icon className="large home icon" /></a>
              <Icon onClick={this.handleClick} className="large legal icon" />
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default connect(null, { fetchBillsByRep })(HouseCard)
