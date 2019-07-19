import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Republicanlogo from '../images/Republicanlogo.svg'
// import { throws } from 'assert';

class SenatorCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        front: true
     }
   }

   // componentDidMount(){
   //    switch(this.props.senator.party) {
   //     case "D":
   //       let logo = "https://upload.wikimedia.org/wikipedia/commons/0/02/DemocraticLogo.svg"
   //       return logo
   //     case "R":
   //       return logo = "https://upload.wikimedia.org/wikipedia/commons/9/9b/Republicanlogo.svg"
   //     case "I":
   //       return logo =  "https://www.justthinking.us/sites/default/files/image/Photos/Independence.png"
   //     default:
   //       return logo =  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Seal_of_the_United_States_Senate.svg/1920px-Seal_of_the_United_States_Senate.svg.png"
   //   }
   // }

  // toggleSenator = () =>{
  //   this.setState((prevState)=>{
  //     return {front: !prevState.front}
  //   })
  // }
  //
  // frontBack = () =>{
  //   {this.state.front ? sprites.front : sprites.back}
  // }


  render() {
     let facebook = this.props.senator.facebook_account
     let twitter = this.props.senator.twitter_account
     let youtube = this.props.senator.you_tube_account
     let website = this.props.senator.website


//figure out how to serve up logo from locally stored images.
    return (
      <Card>
        <Image src={this.props.senator.party_logo} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Sen. {this.props.senator.first_name} {this.props.senator.last_name}, {this.props.senator.party}-{this.props.senator.state}</Card.Header>
          <Card.Meta>
            <span className='seniority'>Years in office: {this.props.senator.seniority} </span><br/>
            <span className='next-election'>Up for re-election: {this.props.senator.next_election} </span>
          </Card.Meta>
          <Card.Description>
            Missed votes % {this.props.senator.missed_votes_pct}<br/>
            Votes with party % {this.props.senator.votes_with_party_pct}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='stats' />
              <a href={facebook}>Facebook</a>   <a href={twitter}>Twitter</a>   <a href={youtube}>YouTube</a>    <a href={website}>Website</a>
          </a>
        </Card.Content>
      </Card>
    )
  }
}

export default SenatorCard
