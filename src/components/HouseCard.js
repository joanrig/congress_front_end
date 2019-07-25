import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'



class HouseCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        front: true
     }
   }

   toggleCard = () =>{
    this.setState((prevState)=>{
      return {front: !prevState.front}
    })
  }

  render() {
    let rep = this.props.rep
    //figure out how to only show these if they exist
     let facebook = rep.facebook_account
     let twitter = rep.twitter_account
     let youtube = rep.you_tube_account
     let website = rep.website
     // let contact_form = rep.contact_form

     let name
     this.state.front? name = rep.first_name + ' ' + rep.last_name : name = "Guess Who?"

     let gender
     if (rep.gender === "F"){
       gender = <i className="female icon large" ></i>
     }


    return (
      <Card>
        <Image src={rep.party_logo} wrapped ui={false} />

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
            Votes party line {rep.votes_with_party_pct}%
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <div>
              <a href={facebook}><Icon name='facebook' /></a>
              <a href={twitter}><Icon name='twitter' /></a>
              <a href={youtube}><Icon name='youtube' /></a>
              <a href={website}>WEBSITE</a>
              {gender}
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default HouseCard
