import React, { Component} from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import SenateBio from './SenateBio'
import SenateSocial from './SenateSocial'
import { fetchBillsBySenator, getSenatorFinances } from './SenateActions'
import { connect } from 'react-redux'


class SenateCard extends Component {
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
    this.props.fetchBillsBySenator(id)
    this.setState({showBills: true})
  }

  hideBills = () => {
    this.setState((prevState)=>{
      return {showBills: !prevState.showBills}
    })
  }

  //donors
  handleFinanceClick = () => {
    let id = this.props.crp_id
    this.props.getSenatorFinances(id)
    this.setState({showDonors: true})
  }

  hideDonors = () => {
    this.setState((prevState)=>{
      return {showDonors: !prevState.showDonors}
    })
  }

  render() {
    let senator = this.props

    //header
    let name
    this.state.showNames? name = senator.first_name + ' ' + senator.last_name : name = "Guess Who?"

    //content extra
    //change className to change bg background-color based on gender
    let genderName
    if (senator.gender === "F"){
      genderName = "female"
    }


    //description
    let legalTip = "five most recent bills"
    let moneyTip = "top three donors to last campaign"

    let buttons =
    <div className="center">
      <Button
        circular icon="large legal"
        onClick={this.handleGavelClick}
        className="bills button"
        data-tooltip={legalTip}
      />
      <Button
        circular icon="large dollar sign"
        onClick={this.handleFinanceClick}
        className="donors button"
        data-tooltip={moneyTip}
      />
    </div>


    let bills
    if (senator.bills){
      bills = senator.bills.slice(0,5).map(bill =>
        <a href={bill.govtrack_url}>{bill.short_title.substring(0,75)+'...'}</a>
      )
    }

    let billList
    if (this.state.showBills){
      if (bills[0]){
        billList = bills.map(bill =>
        <>
          <li>{bill}</li>
          <br/>
        </>
        )

       }
     }

     let source
     let donorList
     if (this.state.showDonors) {
       if (senator.financial_disclosure){
         source = <a href={senator.financial_disclosure.source} className="center">source: Center for Responsive Politics</a>
         donorList = senator.donors.slice(0,3).map(donor =>
         <>
           <br/>
           <strong>{donor.org_name}</strong>
           <li>total: ${donor.total}</li>
           <li>pacs: ${donor.pacs}</li>
           <li>individuals: ${donor.indivs}</li>
           <br/>
         </>
       )}
     }

    let content
    if (this.state.showBills){
      content =
      <>
       <br/>
       <h4 className="center">Recent Bills</h4>
       {billList}
       <div className="center">
         <Button onClick={this.hideBills} className="ui negative basic button"><Icon className="undo" />go back</Button>
        </div>
      </>
    } else if (this.state.showDonors){
      content =
      <>
        <br/>
        <h4 className="center">Top Three Donors</h4>
        {donorList}
        {source}
        <br/>
        <br/>
         <div className="center">
           <Button onClick={this.hideDonors} className="ui negative basic button"><Icon className="undo" />go back</Button>
         </div>
      </>
    } else {
      content =
      <>
        <SenateBio senator={this.props}/>
        {buttons}
        <br/>
        <br/>
        <br/>
      </>
    }


    return (
      <Card>
        <Image className="party-logo" src={senator.party_logo} wrapped ui={false}  />

        <Card.Content >
          <Card.Header onClick={this.toggleName}>
            Sen. {name}<br/>
            {senator.party}-{senator.state_full_name}
          </Card.Header>

          <Card.Description>
            {content}
          </Card.Description>
        </Card.Content>

        <Card.Content extra className={genderName}>
          <SenateSocial senator={this.props}/>
        </Card.Content>
      </Card>
    )
  }
}

export default connect(null, { fetchBillsBySenator, getSenatorFinances })(SenateCard)

//       <Loader active inline='centered' />
