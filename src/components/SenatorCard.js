import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'



class SenatorCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        front: true
     }
   }

  render() {
     let facebook = this.props.senator.facebook_account
     let twitter = this.props.senator.twitter_account
     let youtube = this.props.senator.you_tube_account
     let website = this.props.senator.website
     let contact_form = this.props.senator.contact_form


//figure out how to serve up logo from locally stored images.
    return (
      <Card>
        <Image src={this.props.senator.party_logo} wrapped ui={false} />

        <Card.Content>
          <Card.Header>
            Sen. {this.props.senator.first_name} {this.props.senator.last_name}, {this.props.senator.party}-{this.props.senator.state}
          </Card.Header>

          <Card.Meta>
            <span className='seniority'>Years in office: {this.props.senator.seniority} </span><br/>
            <span className='age'>Age: {this.props.senator.age} </span><br/>
            <span className='next-election'>Up for re-election: {this.props.senator.next_election} </span>
          </Card.Meta>

          <Card.Description>
            Missed votes % {this.props.senator.missed_votes_pct}<br/>
            Votes with party % {this.props.senator.votes_with_party_pct}
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <div>

            <a href={facebook}><Icon name='facebook' /></a>   <a href={twitter}><Icon name='twitter' /></a>    <a href={youtube}><Icon name='youtube' /></a>    <a href={website}>Website</a>    <a href={contact_form}>Contact Form</a>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default SenatorCard
