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
            {this.props.rep.first_name} {this.props.rep.last_name}<br/> {this.props.rep.party}-{this.props.rep.state}<br/>
            District {this.props.rep.district}
          </Card.Header>

          <Card.Description>
            Years in office: {this.props.rep.seniority} <br/>
            Age: {this.props.rep.age}<br/>
            Next election: {this.props.rep.next_election}<br/>
            Missed votes: {this.props.rep.missed_votes_pct}%<br/>
            Votes party line {this.props.rep.votes_with_party_pct}%
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <div>
              <a href={facebook}><Icon name='facebook' /></a>
              <a href={twitter}><Icon name='twitter' /></a>
              <a href={youtube}><Icon name='youtube' /></a>
              <a href={website}>WEBSITE</a>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default RepCard
