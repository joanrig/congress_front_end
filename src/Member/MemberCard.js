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
      showDonors: false,
      width: window.innerWidth
     }
   }

  componentDidMount() {
     window.addEventListener('resize', this.handleWindowSizeChange);
   }

  componentWillUnmount() {
     window.removeEventListener('resize', this.handleWindowSizeChange);
   }

  handleWindowSizeChange = () => {
     this.setState({ width: window.innerWidth });
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

    let isMobile
    const width = this.state.width
    width <= 500 ? isMobile = true : isMobile = false

    //card.image
    let image
    if (isMobile) {
      image = <Image className="party-logo-mobile" src={member.party_logo} wrapped ui={false} />
    } else {
      image = <Image className="party-logo-desktop" src={member.party_logo} wrapped ui={false}  />
    }

    //card.header
    let name
    if (this.state.showNames){
      name = member.title_and_name
    }  else {
      name = member.short_title + "Guess Who?"
    }

    //card.content.description
    let legalTip = "most recent bills"
    let moneyTip = "top three donors to last campaign"
    let undoTip = "go back"

    //style buttons for mobile v. desktop
    let hideBillsClassName
    let hideDonorsClassName
    let billsButtonIcon
    let donorsButtonIcon

    if (isMobile) {
      hideBillsClassName = "small undo"
      hideDonorsClassName = "small undo"
      billsButtonIcon = "small legal"
      donorsButtonIcon = "small dollar sign"

    } else {
      hideBillsClassName = "large undo"
      hideDonorsClassName = "large undo"
      billsButtonIcon = "large legal"
      donorsButtonIcon = "large dollar sign"
    }

    let hideBillsButton =
    <div className="center">
      <Button
        circular icon={hideBillsClassName}
        onClick={this.hideBills}
        id="hideBills"
        data-tooltip={undoTip}
      />
     </div>

    let hideDonorsButton =
    <div className="center">
       <Button
         circular icon={hideDonorsClassName}
         onClick={this.hideDonors}
         id="hideDonors"
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
      <span>
       <MemberBills
        member={this.props}
        showBills={this.state.showBills}/>
        {hideBillsButton}
      </span>
    } else if (this.state.showDonors){
      image = ""
      align = "center"
      space = <br/>
      content =
      <span>
        <MemberDonors
          member={this.props} showDonors={this.state.showDonors}/>
        {hideDonorsButton}
      </span>
    } else {
      content =
      <span>
        <MemberBio member={this.props}/>
        <div className="center">
          <Button
            circular icon={billsButtonIcon}
            onClick={this.handleGavelClick}
            className="bills button"
            data-tooltip={legalTip}
          />

        </div>
        <br/>
    </span>

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

export default connect(mapStateToProps, { fetchBillsBySenator, fetchBillsByRep, getSenatorFinances, getRepFinances })(MemberCard)


// //  <Button
//     circular icon={donorsButtonIcon}
//     onClick={this.handleDonorsClick}
//     className="donors button"
//     data-tooltip={moneyTip}
//   />
