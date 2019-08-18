import React, { PureComponent } from 'react'
import { Button } from 'semantic-ui-react'
import { fetchSenateLoyalists, fetchSenateMavericks, fetchSenateTruants, fetchSenateBySeniority, fetchSenateByAge } from '../Senate/SenateActions'
import { fetchHouseLoyalists, fetchHouseMavericks, fetchHouseTruants, fetchHouseBySeniority, fetchHouseByAge } from '../House/HouseActions'

import { connect } from 'react-redux'


class MemberSorter extends PureComponent {
  constructor(props) {
    super()

    this.state = {
      width: window.innerWidth
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  }

  render (){

    let isMobile
    const width = this.state.width
    width <= 500 ? isMobile = true : isMobile = false


    let headline
    let buttonSize
    if (isMobile) {
      buttonSize = "tiny"
      headline = "center headline mobile"
    } else {
      buttonSize = "large"
      headline = "center headline desktop"
    }


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
        <h1 className={headline}>
          Who's Who in the U.S. {chamber}?  <br/> Let's sort them out.
        </h1>
        <h4 className="center">How to play: Search or sort to narrow results, then see if you can guess the names!  Stumped? Click on "Guess Who?"</h4>

        <div className="center">
          <Button size={buttonSize} color="green" onClick={() => loyalists()}>Party Loyalists</Button>
          <Button size={buttonSize} color="blue" onClick={() => mavericks()}>Party Mavericks</Button>
          <Button size={buttonSize} color="red" onClick={() => truants()}>Most Truant</Button>
          <Button size={buttonSize} color="black" onClick={() => seniority()}>Longest Serving</Button>
          <Button size={buttonSize} color="orange" onClick={() => age()}>Oldest</Button>
          <Button
            size={buttonSize}
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
