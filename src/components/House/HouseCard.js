import React, { Component} from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import MemberBio from '../Member/MemberBio'
import MemberBills from '../Member/MemberBills'
import MemberSocial from '../Member/MemberSocial'
import MemberDonors from '../Member/MemberDonors'
import { fetchBillsByRep, getRepFinances } from './HouseActions'
import { connect } from 'react-redux'


class HouseCard extends Component {
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

   toggleName = () =>{
    this.setState((prevState)=>{
      return {showNames: !prevState.showNames}
    })
  }

  //bills
  handleGavelClick = () => {
    let id = this.props.propublica_id
    this.props.fetchBillsByRep(id)
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
      this.props.getRepFinances(id)
      this.setState({showDonors: true})
    }

  hideDonors = () => {
      this.setState((prevState)=>{
        return {showDonors: !prevState.showDonors}
      })
    }


  render() {
    let rep = this.props

    //card.header
    let name
    this.state.showNames? name = rep.first_name + ' ' + rep.last_name : name = "Guess Who?"

    //card.description
    let legalTip = "five most recent bills"
    let moneyTip = "top three donors to last campaign"
    let undoTip = "go back"

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
      } else if (this.state.showDonors) {
        content =
        <>
          <MemberDonors member={this.props} showDonors={this.state.showDonors}/>
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

      //card.content extra
      //change className to change bg background-color based on gender
      let genderName
      if (rep.gender === "F"){
        genderName = "female"
      }


    return (
      <Card>
        <Image src={rep.party_logo} wrapped ui={false} className="party-logo"/>

        <Card.Content >
          <Card.Header onClick={this.toggleName}>
            Rep. {name}<br/> {rep.party}-{rep.state_full_name}<br/>
            District {rep.district}
          </Card.Header>

          <Card.Description>
            {content}
          </Card.Description>
        </Card.Content>

        <Card.Content extra className={genderName}>
         <MemberSocial member={this.props} />
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = state => ({showDonors: state.showDonors, showBills: state.showBills})

export default connect(mapStateToProps, { fetchBillsByRep, getRepFinances })(HouseCard)
