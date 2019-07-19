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
     let contact_form = this.props.rep.contact_form


//figure out how to serve up logo from locally stored images.
    return (
      <Card>
        <Image src={this.props.rep.party_logo} wrapped ui={false} />

        <Card.Content>
          <Card.Header>Rep.
            {this.props.rep.first_name} {this.props.rep.last_name}, {this.props.rep.party}-{this.props.rep.state}
            <h3>District: {this.props.rep.district}</h3>
          </Card.Header>

          <Card.Meta>
            <span className='seniority'>Years in office: {this.props.rep.seniority} </span><br/>
            <span className='age'>Age: {this.props.rep.age} </span><br/>
            <span className='next-election'>Up for re-election: {this.props.rep.next_election} </span>
          </Card.Meta>

          <Card.Description>
            Missed votes % {this.props.rep.missed_votes_pct}<br/>
            Votes with party % {this.props.rep.votes_with_party_pct}
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <div>
              <a href={facebook}><Icon name='facebook' /></a>   <a href={twitter}><Icon name='twitter' /></a>   <a href={youtube}><Icon name='youtube' /></a>    <a href={website}>Website</a>    <a href={contact_form}>Contact Form</a>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default RepCard
