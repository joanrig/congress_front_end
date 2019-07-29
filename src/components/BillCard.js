import React from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'



class BillCard extends React.Component {
  constructor(props) {
    super()

    this.state = {
      search: '',
    }
  }

  // updateSearch= (event) => {
  //   this.setState({search: event.target.value.substr(0, 100)})
  // }

  render (){
    const bill = this.props

    let url = ""
    let billTitle
    let title = bill.short_title.substring(0,75)+'...'
    url = bill.govtrack_url
    billTitle = <a href={url}>{title}</a>

    let democratSponsors
    let republicanSponsors
    let independentSponsors

    if (bill.cosponsors_by_party["D"]){
      democratSponsors = "Democrats" +' '+ bill.cosponsors_by_party["D"]
    }

    if (bill.cosponsors_by_party["R"]){
      republicanSponsors = "Republicans" + ' '+bill.cosponsors_by_party["R"]
    }

    if (bill.cosponsors_by_party["I"]){
      independentSponsors = "Independents" + ' ' +bill.cosponsors_by_party["I"]
    }

    let color
    if (bill.cosponsors){
      if(bill.cosponsors_by_party["R"] &&
        bill.cosponsors_by_party["R"] > bill.cosponsors_by_party["D"]){
        color = "red"
      } else if (bill.cosponsors_by_party["D"] &&
        bill.cosponsors_by_party["D"] > bill.cosponsors_by_party["R"]){
        color = "blue"
      } else if (bill.cosponsors_by_party["R"] &&
        bill.cosponsors_by_party["D"] && bill.cosponsors_by_party["R"] === bill.cosponsors_by_party["D"])
        color = "purple"
      }
    else {
      color = "white"
    }



    let sponsorTitle
    if (bill.bill_type === "s"){
      sponsorTitle = "Sen."
    } else {
      sponsorTitle = "Rep."
    }

    let sponsorInfo = bill.sponsor_party + '-' + bill.sponsor_state
    let sponsorName = sponsorTitle + ' ' + bill.sponsor_name



    return (

      <Card >
        <Image src="https://vignette.wikia.nocookie.net/p__/images/f/f3/Bill_schoolhouse_rock.png/revision/latest?cb=20161029171330&path-prefix=protagonist" wrapped ui={false} background-color="blue" />

        <Card.Content onClick={this.toggleCard}>
          <Card.Header>
            {bill.number}<br/>
          </Card.Header>

          <Card.Description>
            Sponsor: <br/>
            {sponsorName}<br/>
            {sponsorInfo}<br/>
            {billTitle}<br/>
            <hr />
            Primary Subject: {bill.primary_subject}<br/>

          </Card.Description>
        </Card.Content>


        <Card.Content extra background-color={color}>
          <div>
            Cosponsors: {bill.cosponsors}<br/>
            {democratSponsors}<br/>
            {republicanSponsors}<br/>
            {independentSponsors}<br/>
          </div>
        </Card.Content>
      </Card>
    )
  }
}


const mapStateToProps = state => ({ bills: state.bills })

export default connect(mapStateToProps)(BillCard)
