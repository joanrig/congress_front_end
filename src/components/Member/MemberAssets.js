import React, { PureComponent } from 'react'


class MemberAssets extends PureComponent {
  constructor(props) {
    super(props)
      this.state = {
        showAssets: this.props.showAssets
       }
     }

  render(){
    let member = this.props.member
    let report = member.asset_report

    let assetSource
    let netWorthRange
    if (this.state.showAssets) {
      if (report){
        assetSource =
          <a href={member.report.source} className="center">
          more assets & details from Center for Responsive Politics</a>

        netWorthRange =
        <>
          Estimated net worth range
          {report.net_low.to_localeString()} to {report.net_high.to_localeString()}
        </>
      }
    }
  



    return (
      <div>
        <br/>
        {netWorthRange}
        <hr/>
        <h4 className="center">Top Three Assets</h4>
        <br/>
        <br/>
        {assetSource}
        <br/>
      </div>
    )

  }

}
export default MemberAssets
