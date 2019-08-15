import React, { PureComponent } from 'react'
import { Popup, Button } from 'semantic-ui-react'


class MemberDonors extends PureComponent {
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
        donorsSource =
          <a href={member.financial_disclosure.source} className="center">
          visit Center for Responsive Politics for more details</a>

        donorList = member.donors.slice(0,3).map(donor =>
        <div key={donor.id}>
          <br/>
          <strong>{donor.org_name}</strong>
          <li>total: ${donor.total.toLocaleString()}</li>
          <li>pacs: ${donor.pacs.toLocaleString()}</li>
          <li>individuals: ${donor.indivs.toLocaleString()}</li>
        </div>
      )}
    }

    let notice
    let popUpNotice

    if (member.financial_disclosure){
      notice =
      <>
        {member.financial_disclosure.notice}
        <br/>
        <em>--notice from data provider Center for Responsive Politics</em>
      </>

      popUpNotice =
      <div className="center">
        <Popup
          content={notice}
          trigger={<Button circular icon='large question' color="yellow"/>}
          id="donorNotice"
        />
      </div>
    }


    return (
      <div>
        <br/>
        <hr/>
        <h4 className="center">Top Three Donors</h4>
        {popUpNotice}
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
