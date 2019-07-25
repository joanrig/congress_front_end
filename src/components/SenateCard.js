import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { fetchBillsByMember } from '../actions/bills'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'




class SenateCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        front: props.showNames,
        bills: []
     }
   }

   toggleCard = () =>{
    this.setState((prevState)=>{
      return {front: !prevState.front}
    })
  }

  handleClick = () => {
    let id = this.props.senator.propublica_id
    this.props.fetchBillsByMember(id)
    //after fetch, redirect to /bills, but HOW do you bring fetch result with you?
    // this.setState({redirect: true})
  }




  render() {
    if (this.state.redirect) {
      return <Redirect push to="/bills" />;
    }

    //go back to api, add fields for facebook and youtube handles
     let facebook = this.props.senator.facebook_account
     let twitter = this.props.senator.twitter_account
     let youtube = this.props.senator.you_tube_account
     let website = this.props.senator.website

     let name
     this.state.front? name = this.props.senator.first_name + ' ' + this.props.senator.last_name : name = "Guess Who?"

     let gender
     if (this.props.senator.gender === "F"){
       gender = <i className="female icon large" ></i>
     }

     let bills = ""
     if (this.props.senator.bills){
       bills = this.props.senator.bills.length
      }

    return (
      <Card >
        <Image src={this.props.senator.party_logo} wrapped ui={false} />

        <Card.Content onClick={this.toggleCard}>
          <Card.Header>
            Sen. {name}<br/>
            {this.props.senator.party}-{this.props.senator.state_full_name}
          </Card.Header>

          <Card.Description>
            Years in office: {this.props.senator.seniority} <br/>
            Age: {this.props.senator.age}<br/>
            Next election: {this.props.senator.next_election}<br/>
            Missed votes: {this.props.senator.missed_votes_pct}%<br/>
            Votes party line {this.props.senator.votes_with_party_pct}%<br/>
            {bills}
          </Card.Description>
        </Card.Content>

        <Card.Content extra >
          <div>
            <Icon onClick={this.handleClick} name="legal icon" />
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

const mapStateToProps = state => ({ bills: state.bills })

export default connect(mapStateToProps, { fetchBillsByMember })(SenateCard)

//
