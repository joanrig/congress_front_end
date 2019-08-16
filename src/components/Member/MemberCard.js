import React, { Component} from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import MemberBio from './MemberBio'
import MemberSocial from './MemberSocial'
import MemberBills from './MemberBills'
import MemberDonors from './MemberDonors'
import MemberAssets from './MemberAssets'
import { fetchBillsBySenator, getSenatorFinances, getSenatorAssets } from '../Senate/SenateActions'
import { fetchBillsByRep, getRepFinances, getRepAssets } from '../House/HouseActions'


import { connect } from 'react-redux'


class MemberCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //passed as props to enable flip of all cards
      showNames: this.props.showNames,
      //local only to toggle bills view per Card
      showBills: false,
      showDonors: false,
      showAssets: false
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

  //assets
  handleAssetsClick = () => {
    let id = this.props.crp_id
    if (this.props.chamber === "senate"){
      this.props.getSenatorAssets(id)
    } else if (this.props.chamber === "house"){
      this.props.getRepFinances(id)
    }
    this.setState({showAssets: true})
  }

  hideAssets = () => {
    this.setState((prevState)=>{
      return {showAssets: !prevState.showAssets}
    })
  }

  render() {
    let member = this.props

    //card.image
    let image = <Image className="party-logo" src={member.party_logo} wrapped ui={false}  />

    //card.header
    let name
    if (this.state.showNames){
      name = member.title_and_name
    }  else {
      name = member.short_title + "Guess Who?"
    }

    //card.content.description
    let legalTip = "five most recent bills"
    let moneyTip = "top three donors to last campaign"
    let assetsTip = "net worth and assets"


    let undoTip = "go back"
    let hideBillsButton =
    <div className="center">
      <Button
        circular icon="large undo"
        onClick={this.hideBills}
        id="hideBills"
        data-tooltip={undoTip}
      />
     </div>


    let hideDonorsButton =
    <div className="center">
       <Button
         circular icon="large undo"
         onClick={this.hideDonors}
         id="hideDonors"
         data-tooltip={undoTip}
       />
    </div>

    let hideAssetsButton =
    <div className="center">
       <Button
         circular icon="large undo"
         onClick={this.hideAssets}
         id="hideAssets"
         data-tooltip={undoTip}
       />
    </div>

    //format back of card
    let align
    let content
    let space
    if (this.state.showBills){
      image = ""
      align = "center"
      space = <br/>
      content =
      <>
       <MemberBills
        member={this.props}
        showBills={this.state.showBills}/>
        {hideBillsButton}
      </>
    } else if (this.state.showDonors){
      image = ""
      align = "center"
      space = <br/>
      content =
      <>
        <MemberDonors
          member={this.props} showDonors={this.state.showDonors}/>
        {hideDonorsButton}
      </>
    } else if (this.state.showAssets){
      image = ""
      align = "center"
      space = <br/>
      content =
      <>
        <MemberAssets
          member={this.props} showAssets={this.state.showAssets}/>
        {hideAssetsButton}
      </>
    } else {
      content =
      <>
        <MemberBio member={this.props}/>
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
          <Button
            circular icon="large coffee"
            onClick={this.handleAssetsClick}
            className="assets button"
            data-tooltip={assetsTip}
          />
        </div>
        <br/>
      </>
    }

    //card.content extra/ add to className to change bg color
    let genderName
    if (member.gender === "F"){
      genderName = "female"
    }


    return (
      <Card>
        {image}
        <Card.Content >
          <Card.Header onClick={this.toggleName} className={align}>
            {space}
            {name}<br/>
            {member.party}-{member.state_full_name}
          </Card.Header>

          <Card.Description className="description">
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

export default connect(mapStateToProps, { fetchBillsBySenator, fetchBillsByRep, getSenatorFinances, getRepFinances, getSenatorAssets, getRepAssets })(MemberCard)
