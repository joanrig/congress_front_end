import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
// import Republicanlogo from '../images/Republicanlogo.svg'


class RepCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        front: true
     }
   }

  render() {
     let facebook = this.props.rep.facebook_account
     let twitter = this.props.rep.twitter_account
     let youtube = this.props.rep.you_tube_account
     let website = this.props.rep.website


//figure out how to serve up logo from locally stored images.
    return (
      <Card>
        <Image src={this.props.rep.party_logo} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Sen. {this.props.rep.first_name} {this.props.rep.last_name}, {this.props.rep.party}-{this.props.rep.state}</Card.Header>
          <Card.Meta>
            <span className='seniority'>Years in office: {this.props.rep.seniority} </span><br/>
            <span className='next-election'>Up for re-election: {this.props.rep.next_election} </span>
          </Card.Meta>
          <Card.Description>
            Missed votes % {this.props.rep.missed_votes_pct}<br/>
            Votes with party % {this.props.rep.votes_with_party_pct}
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

export default RepCard
