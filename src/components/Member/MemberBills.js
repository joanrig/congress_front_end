import React, { Component } from 'react'


class MemberDonors extends Component {
  constructor(props) {
    super(props)
      this.state = {
        showBills: this.props.showBills
       }
     }


  render(){
    let member = this.props.member

    let bills
    if (member.bills){
      bills = member.bills.slice(0,5).map(bill =>
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

     let billsSource =
     <div className="center">
       <a href="https://www.propublica.org/about/" className="center">source: Propublica</a>
     </div>

    return (
      <div>
        <h4 className="center">Recent Bills</h4>
        {billList}
        {billsSource}
      </div>
    )

  }

}
export default MemberDonors
