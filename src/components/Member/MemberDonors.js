import React, { Component } from 'react'
import { Popup, Button } from 'semantic-ui-react'


class MemberDonors extends Component {
  constructor(props) {
    super(props)
      this.state = {
        showDonors: this.props.showDonors
       }
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
        </>
      )}
    }

    let notice =
    <div className="center">
      <Popup
        content={member.financial_disclosure.notice}
        trigger={<Button circular icon='question' color="yellow"/>}
        id="donorNotice"
      />
    </div>

    return (
      <div>
        <h4 className="center">Top Three Donors</h4>
        {notice}
        {donorList}
        <br/>
        {donorsSource}
        <br/>
        <br/>
      </div>
    )

  }

}
export default MemberDonors
