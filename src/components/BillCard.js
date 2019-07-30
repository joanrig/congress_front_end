import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'


class BillCard extends PureComponent {

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
    let cos = bill.cosponsors_by_party

    if (cos["D"]){
      democratSponsors = "Democrats" +' '+ cos["D"]
    }

    if (cos["R"]){
      republicanSponsors = "Republicans" + ' '+cos["R"]
    }

    if (cos["I"]){
      independentSponsors = "Independents" + ' ' +cos["I"]
    }

    //tried to move to back end, doesn't work there.
    let sponsorColor
    if (bill.cosponsors){
      if(cos["R"] && cos["R"] > cos["D"]){
        sponsorColor = "red"
      } else if (cos["R"] && !cos["D"]){
        sponsorColor = "red"
      } else if (cos["D"] && cos["D"] > cos["R"]){
        sponsorColor = "blue"
      } else if (cos["D"] && !cos["R"]){
        sponsorColor = "blue"
      } else if (cos["R"] && cos["D"] && cos["R"] === cos["D"]){
        sponsorColor = "purple"
      }
      else {
        sponsorColor = "white"
      }
    }

    let sponsorTitle
    if (bill.bill_type === "s"){
      sponsorTitle = "Sen."
    } else {
      sponsorTitle = "Rep."
    }

    let sponsorInfo = bill.sponsor_party + '-' + bill.sponsor_state
    let sponsorName = sponsorTitle + ' ' + bill.sponsor_name
    let image="https://vignette.wikia.nocookie.net/p__/images/f/f3/Bill_schoolhouse_rock.png/revision/latest?cb=20161029171330&path-prefix=protagonist"


    return (

      <Card >
        <Image
          src={image}
          wrapped ui={false}
          background-color="blue"
        />
        <Card.Content onClick={this.toggleCard}>
          <Card.Header>
            {bill.number}<br/>
          </Card.Header>

          <Card.Description>
            <h3>
              Sponsor <br/>
              {sponsorName}<br/>
              {sponsorInfo}<br/>
            </h3>
            <br/>
              {billTitle}<br/>
            <hr />
              Primary Subject: <br/>
              {bill.primary_subject}<br/>
            <br/>
              Introduced: <br/>
              {bill.introduced_date}<br/>
          </Card.Description>
        </Card.Content>


        <Card.Content extra className={sponsorColor}>
          <div>
            <strong>Cosponsors: {bill.cosponsors}</strong><br/>
            {democratSponsors}<br/>
            {republicanSponsors}<br/>
            {independentSponsors}
          </div>
        </Card.Content>
      </Card>
    )
  }
}


const mapStateToProps = state => ({ bills: state.bills })

export default connect(mapStateToProps)(BillCard)
