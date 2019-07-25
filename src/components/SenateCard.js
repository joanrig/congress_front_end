import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { fetchBillsByMember } from '../actions/bills'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'




class SenateCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        // bills: []
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
    let senator = this.props.senator
    if (this.state.redirect) {
      return <Redirect push to="/bills" />;
    }

    //go back to api, add fields for facebook and youtube handles
     let facebook = this.props.senator.facebook_account
     let twitter = this.props.senator.twitter_account
     let youtube = this.props.senator.you_tube_account
     let website = this.props.senator.website

     let name
     this.state.front? name = senator.first_name + ' ' + senator.last_name : name = "Guess Who?"

     let gender
     if (senator.gender === "F"){
       gender = <i className="female icon large" ></i>
     }

     let bills = ""
     if (this.props.senator.bills){
       bills = this.props.senator.bills.length
      }

    return (
      <Card >
        <Image src={senator.party_logo} wrapped ui={false} />

        <Card.Content onClick={this.toggleCard}>
          <Card.Header>
            Sen. {name}<br/>
            {senator.party}-{senator.state_full_name}
          </Card.Header>

          <Card.Description>
            Years in office: {senator.seniority} <br/>
            Age: {senator.age}<br/>
            Next election: {senator.next_election}<br/>
            Missed votes: {senator.missed_votes_pct}%<br/>
            Votes party line {senator.votes_with_party_pct}%<br/>
            {bills}
          </Card.Description>
        </Card.Content>

        <Card.Content extra >
          <div>
            <Icon onClick={this.handleClick} className="legal icon" />
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
