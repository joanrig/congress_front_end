import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { fetchBillsByMember } from '../actions/bills'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'




class SenateCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      front: props.showNames
     }
   }

   toggleCard = () =>{
    this.setState((prevState)=>{
      return {front: !prevState.front}
    })
  }

  handleClick = () => {
    let id = this.props.propublica_id
    // this.interval = setInterval(() =>{this.props.fetchBillsByMember(id)},250)
    this.props.fetchBillsByMember(id)
  }



  render() {
    let senator = this.props


    // if (this.state.redirect) {
    //   return <Redirect push to="/bills" />;
    // }

    //go back to api, add fields for facebook and youtube handles
     let facebook = senator.facebook_account
     let twitter = senator.twitter_account
     let youtube = senator.you_tube_account
     let website = senator.website

     let name
     this.state.front? name = senator.first_name + ' ' + senator.last_name : name = "Guess Who?"

     let gender
     if (senator.gender === "F"){
       gender = <i className="large female icon" ></i>
     }

     let url = ""
     let title = ""
     if (senator.bills[0]){
       title = senator.bills[0].short_title.substring(0,75)+'...'
       url = senator.bills[0].govtrack_url
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
            <br/>
            <hr/>
            Most recent bill:<br/>
            <a href={url}>{title}</a>
          </Card.Description>

        </Card.Content>


        <Card.Content extra >
          <div>

            <a href={facebook}><Icon className='large facebook' /></a>
            <a href={twitter}><Icon className='large twitter' /></a>
            <a href={youtube}><Icon className='large youtube' /></a>
            <a href={website}><Icon className="large home icon" /></a>
            <Icon onClick={this.handleClick} className="large legal icon" />
            {gender}
          </div>
        </Card.Content>
      </Card>
    )
  }
}

// const mapStateToProps = state => ({ bills: state.bills })

export default connect(null, { fetchBillsByMember })(SenateCard)

//
