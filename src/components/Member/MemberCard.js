import React, { Component} from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import MemberBio from './MemberBio'
import MemberSocial from './MemberSocial'
import MemberBills from './MemberBills'
import MemberDonors from './MemberDonors'
import { fetchBillsBySenator, getSenatorFinances } from '../Senate/SenateActions'
import { fetchBillsByRep, getRepFinances } from '../House/HouseActions'

import { connect } from 'react-redux'


class MemberCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //passed as props to enable flip of all cards
      showNames: this.props.showNames,
      //local only to toggle bills view per Card
      showBills: false,
      showDonors: false
     }
   }

  toggleName = () => {
    this.setState((prevState)=>{
      return {showNames: !prevState.showNames}
    })
  }

  //bills
  handleGavelClick = () => {
    let id = this.props.propublica_id
    if (this.props.chamber === "senate"){
      this.props.fetchBillsBySenator(id)
    } else if (this.props.chamber === "house"){
      this.props.fetchBillsByRep(id)
    }
    this.setState({showBills: true})
  }

  hideBills = () => {
    this.setState((prevState)=>{
      return {showBills: !prevState.showBills}
    })
  }

  //donors
  handleDonorsClick = () => {
    let id = this.props.crp_id
    if (this.props.chamber === "senate"){
      this.props.getSenatorFinances(id)
    } else if (this.props.chamber === "house"){
      this.props.getRepFinances(id)
    }
    this.setState({showDonors: true})
  }

  hideDonors = () => {
    this.setState((prevState)=>{
      return {showDonors: !prevState.showDonors}
    })
  }

  render() {
    let member = this.props

    //card.header
    let name
    let fullName = member.first_name + ' ' + member.last_name
    let title
      if (member.chamber === "senate") {
        title = "Sen. "
      } else {
        title = "Rep. "
      }
      
    if (this.state.showNames){
      name = title + fullName
    }  else {
      name = "Guess Who?"
    }

    //card.content.description
    let legalTip = "five most recent bills"
    let moneyTip = "top three donors to last campaign"

    let twoButtons =
    <div className="center">
      <Button
        circular icon="large legal"
        onClick={this.handleGavelClick}
        className="bills button"
        data-tooltip={legalTip}
      />
      <Button
        circular icon="large dollar sign"
        onClick={this.handleDonorsClick}
        className="donors button"
        data-tooltip={moneyTip}
      />
    </div>

    let undoTip = "go back"
    let hideBillsButton =
    <div className="center">
      <Button
        circular icon="large undo"
        onClick={this.hideBills}
        className="undo button"
        data-tooltip={undoTip}
      />
     </div>

    let hideDonorsButton =
    <div className="center">
       <Button
         circular icon="large undo"
         onClick={this.hideDonors}
         className="undo button"
         data-tooltip={undoTip}
       />
    </div>

    let content
    if (this.state.showBills){
      content =
      <>
       <MemberBills
        member={this.props}
        showBills={this.state.showBills}/>
        {hideBillsButton}
      </>
    } else if (this.state.showDonors){
      content =
      <>
        <MemberDonors
          member={this.props} showDonors={this.state.showDonors}/>
        {hideDonorsButton}
      </>
    } else {
      content =
      <>
        <MemberBio member={this.props}/>
        {twoButtons}
        <br/>
      </>
    }

    //card.content extra/ changes bg color
    let genderName
    if (member.gender === "F"){
      genderName = "female"
    }


    return (
      <Card>
        <Image className="party-logo" src={member.party_logo} wrapped ui={false}  />

        <Card.Content >
          <Card.Header onClick={this.toggleName}>
            {name}<br/>
            {member.party}-{member.state_full_name}
          </Card.Header>

          <Card.Description>
            {content}
          </Card.Description>
        </Card.Content>

        <Card.Content extra className={genderName}>
          <MemberSocial member={this.props}/>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = state => ({showDonors: state.showDonors, showBills: state.showBills})

export default connect(mapStateToProps, { fetchBillsBySenator, fetchBillsByRep, getSenatorFinances, getRepFinances })(MemberCard)
