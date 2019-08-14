import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'


class MemberDonors extends Component {
  constructor(props) {
    super(props)
      this.state = {
        showDonors: this.props.showDonors
       }
     }

  hideDonors = () => {
    this.setState((prevState)=>{
      return {showDonors: !prevState.showDonors}
    })
  }



  render(){
    let member = this.props.member

    let donorsSource
    let donorList
    if (this.state.showDonors) {
      if (member.financial_disclosure){
        donorsSource = <a href={member.financial_disclosure.source} className="center">click for top 100 donors <br/>source: Center for Responsive Politics</a>
        donorList = member.donors.slice(0,3).map(donor =>
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

    let undoTip = "memberDonors go back"


    return (
      <div>
        <br/>
        <h4 className="center">Top Three Donors</h4>
        {donorList}
        {donorsSource}
        <br/>
        <br/>
         <div className="center">
         <Button
           circular icon="large undo"
           onClick={this.hideDonors}
           className="undo button"
           data-tooltip={undoTip}
         />
       </div>

      </div>
    )

  }

}
export default MemberDonors
