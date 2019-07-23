import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class CandidateCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        front: true
     }
   }

  render() {
    //figure out how to only show these if they exist
     let facebook = this.props.candidate.facebook_account
     let twitter = this.props.candidate.twitter_account
     let youtube = this.props.candidate.you_tube_account
     let website = this.props.candidate.website
     // let contact_form = this.props.candidate.contact_form


//figure out how to serve up logo from locally stored images.
    return (
      <Card>
        <Image src={this.props.candidate.party_logo} wrapped ui={false} />

        <Card.Content>
          <Card.Header>
            Rep. {this.props.candidate.first_name} {this.props.candidate.last_name}<br/> {this.props.candidate.party}-{this.props.candidate.state}<br/>
            District {this.props.candidate.district}
          </Card.Header>

          <Card.Description>
            Years in office: {this.props.candidate.seniority} <br/>
            Age: {this.props.candidate.age}<br/>
            Next election: {this.props.candidate.next_election}<br/>
            Missed votes: {this.props.candidate.missed_votes_pct}%<br/>
            Votes party line {this.props.candidate.votes_with_party_pct}%
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

export default CandidateCard
