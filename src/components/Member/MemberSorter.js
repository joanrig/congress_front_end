import React from 'react'
import { Button } from 'semantic-ui-react'
import { fetchSenateLoyalists, fetchSenateMavericks, fetchSenateTruants, fetchSenateBySeniority, fetchSenateByAge } from '../Senate/SenateActions'
import { fetchHouseLoyalists, fetchHouseMavericks, fetchHouseTruants, fetchHouseBySeniority, fetchHouseByAge } from '../House/HouseActions'

import { connect } from 'react-redux'


class MemberSorter extends React.Component {
  constructor(props) {
    super()
  }


  render (){
    let tips = `You can sort after searching or vice-versa!`

    let chamber
    let sortingButtons
    if (this.props.renderedBy === "senate"){
      chamber = "Senate"
      sortingButtons =
        <>
          <Button size="large" color="green" onClick={() => this.props.fetchSenateLoyalists()}>Party Loyalists</Button>
          <Button size="large" color="blue" onClick={() => this.props.fetchSenateMavericks()}>Party Mavericks</Button>
          <Button size="large" color="red" onClick={() => this.props.fetchSenateTruants()}>Most Truant</Button>
          <Button size="large" color="black" onClick={() => this.props.fetchSenateBySeniority()}>Longest Serving</Button>
          <Button size="large" color="orange" onClick={() => this.props.fetchSenateByAge()}>Oldest</Button>
        </>
    } else {
      chamber = "House of Representatives"
      sortingButtons =
        <>
          <Button size="large" color="green" onClick={() => this.props.fetchHouseLoyalists()}>Party Loyalists</Button>
          <Button size="large" color="blue" onClick={() => this.props.fetchHouseMavericks()}>Party Mavericks</Button>
          <Button size="large" color="red" onClick={() => this.props.fetchHouseTruants()}>Most Truant</Button>
          <Button size="large" color="black" onClick={() => this.props.fetchHouseBySeniority()}>Longest Serving</Button>
          <Button size="large" color="orange" onClick={() => this.props.fetchHouseByAge()}>Oldest</Button>
        </>

    }


    return (
      <>
        <h1 className="center">
          Who's Who in the U.S. {chamber}?  Let's sort them out.
        </h1>
        <h4 className="center">How to play: Search or sort to narrow results, then see if you can guess the names!  Stumped? Click on "Guess Who?"</h4>

        <div className="center">
          {sortingButtons}
          <Button
            size="large"
            color="yellow"
            className="ui icon button"
            data-tooltip={tips}>
            <i className="question icon"></i>
          </Button>
        </div>
      </>
    )
  }
}




export default connect(null, { fetchSenateLoyalists, fetchSenateMavericks, fetchSenateTruants, fetchSenateBySeniority, fetchSenateByAge, fetchHouseLoyalists, fetchHouseMavericks, fetchHouseTruants, fetchHouseBySeniority, fetchHouseByAge })(MemberSorter)
