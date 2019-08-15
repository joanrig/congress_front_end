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

    let loyalists
    let mavericks
    let truants
    let seniority
    let age

    let actions = this.props
    let chamber

    if (actions.renderedBy === "senate"){
      chamber = "Senate"
      loyalists = actions.fetchSenateLoyalists
      mavericks = actions.fetchSenateMavericks
      truants = actions.fetchSenateTruants
      seniority = actions.fetchSenateBySeniority
      age = actions.fetchSenateByAge

    }  else {
      chamber = "House of Representatives"
      loyalists = actions.fetchHouseLoyalists
      mavericks = actions.fetchHouseMavericks
      truants = actions.fetchHouseTruants
      seniority = actions.fetchHouseBySeniority
      age = actions.fetchHouseByAge
    }


    return (
      <>
        <h1 className="center">
          Who's Who in the U.S. {chamber}?  Let's sort them out.
        </h1>
        <h4 className="center">How to play: Search or sort to narrow results, then see if you can guess the names!  Stumped? Click on "Guess Who?"</h4>

        <div className="center">
          <Button size="large" color="green" onClick={() => loyalists()}>Party Loyalists</Button>
          <Button size="large" color="blue" onClick={() => mavericks()}>Party Mavericks</Button>
          <Button size="large" color="red" onClick={() => truants()}>Most Truant</Button>
          <Button size="large" color="black" onClick={() => seniority()}>Longest Serving</Button>
          <Button size="large" color="orange" onClick={() => age()}>Oldest</Button>
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
