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

    if (bill.sponsors && bill.cosponsorsByParty["D"]){
      democratSponsors = bill.cosponsorsByParty["D"]
    }


    if (bill.sponsors && bill.cosponsorsByParty["R"]){
      republicanSponsors = bill.cosponsorsByParty["R"]
    }


    if (bill.sponsors && bill.cosponsorsByParty["R"]){
      independentSponsors = bill.cosponsorsByParty["I"]
    }




    return (

      <Card >
        <Image src="https://vignette.wikia.nocookie.net/p__/images/f/f3/Bill_schoolhouse_rock.png/revision/latest?cb=20161029171330&path-prefix=protagonist" wrapped ui={false} />

        <Card.Content onClick={this.toggleCard}>
          <Card.Header>
            {bill.number}<br/>
            {bill.primary_subject}
            {bill.sponsor_name}
            {bill.status}
          </Card.Header>

          <Card.Description>
            {billTitle}
          </Card.Description>
        </Card.Content>

        <Card.Content extra >
          <div>
            Cosponsors: {bill.cosponsors} <br/>
            {democratSponsors} <br/>
            {republicanSponsors} <br/>
            {independentSponsors}
          </div>
        </Card.Content>
      </Card>
    )
  }
}


const mapStateToProps = state => ({ bills: state.bills })

export default connect(mapStateToProps)(BillCard)
