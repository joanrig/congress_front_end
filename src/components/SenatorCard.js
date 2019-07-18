import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
// import { throws } from 'assert';

class SenatorCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        front: true
     }
   }

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
     // let URL = `${BASE_PATH}\`${this.props.fieldName}\``
     const FB_PATH = "https://www.facebook.com/"
     let fb_account = this.props.senator.facebook_account
     let fb_page = FB_PATH + fb_account

     const TWITTER_PATH = "https://twitter.com/"
     let twitter_account = this.props.senator.twitter_account
     let twitter_page = TWITTER_PATH + twitter_account

     const YOUTUBE_PATH = "https://www.youtube.com/user/"
     let youtube_account = this.props.senator.you_tube_account
     let youtube_page = TWITTER_PATH + youtube_account

     

    return (
      <Card>
    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Seal_of_the_United_States_Senate.svg/1920px-Seal_of_the_United_States_Senate.svg.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Sen. {this.props.senator.first_name} {this.props.senator.last_name}, {this.props.senator.party}-{this.props.senator.state}</Card.Header>
      <Card.Meta>
        <span className='next-election'>Up for re-election: {this.props.senator.next_election} </span>
      </Card.Meta>
      <Card.Description>
        <a href={fb_page}>Facebook</a>   <a href={twitter_page}>Twitter</a>   <a href={youtube_page}>YouTube</a>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
    )
  }
}

export default SenatorCard
