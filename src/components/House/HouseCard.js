import React, { Component} from 'react'
import { Card, Icon, Button, Image } from 'semantic-ui-react'
import HouseBio from './HouseBio'
import HouseSocial from './HouseSocial'
import { fetchBillsByRep } from '../../actions/house'
import { getRepFinances } from '../../actions/house'
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
  handleFinanceClick = () => {
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

    let name
    this.state.showNames? name = rep.first_name + ' ' + rep.last_name : name = "Guess Who?"

    let genderName
    if (rep.gender === "F"){
      genderName = "female"
    }


    let gavel = <Icon className=" legal icon" />

    let dollarSign= <Icon className="dollar sign icon" />


    let content =
    <>
      <HouseBio rep={this.props} />
      <Button className="ui primary basic button"  onClick={this.handleGavelClick} >{gavel}Most recent bills </Button>
      <br/>
      <br/>
      <br/>
      <Button className="ui positive basic button" onClick={this.handleFinanceClick}>{dollarSign} Top three donors</Button>
      <br/>
      <br/>
      <br/>
    </>

    let bills
    if (rep.bills){
      bills = rep.bills.slice(0,3).map(bill =>
        <a href={bill.govtrack_url}>{bill.short_title.substring(0,75)+'...'}</a>
      )
    }

    let billList
    if (this.state.showBills){
      if (bills[0]){
       billList = bills.map(bill =>
          <>
            <li>{bill}</li>
            <br />
          </>
        )
      }
    }



    let source
    let donorList
    if (this.state.showDonors) {
      if (rep.financial_disclosure){
        source = <a href={rep.financial_disclosure.source} className="center">source: OpenSecrets.org</a>
        donorList = rep.donors.slice(0,3).map(donor =>
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

    if (this.state.showBills){
      content =
      <>
       {billList}
       go back <Icon className="undo" onClick={this.hideBills} />
      </>
    } else if (this.state.showDonors)
      content =
      <>
        {donorList}
        {source}
        <br/>
        <br/>
        go back  <Icon className="undo" onClick={this.hideDonors} />
      </>



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
         <HouseSocial rep={this.props} />
        </Card.Content>
      </Card>
    )
  }
}

export default connect(null, { fetchBillsByRep, getRepFinances })(HouseCard)
