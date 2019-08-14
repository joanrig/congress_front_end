import React, { Component} from 'react'
import { Button } from 'semantic-ui-react'
import { fetchHouse, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge } from '../actions/house'
import { connect } from 'react-redux'


class HouseSorter extends Component {

  render (){
    let tips = (
        `You can sort after searching or vice-versa!`
    )


    return (
      <>
        <h1 className="center">
          Who's Who in the U.S. House of Representatives?  Let's sort them out!
        </h1>
        <h4 className="center">How to play: Search or sort to narrow results, then see if you can guess the names!  Stumped? Click on "Guess Who?"</h4>

        <div className='social center'>
          <Button size="big" color="green" onClick={() => this.props.fetchLoyalists()}>Party Loyalists</Button>
          <Button size="big" color="blue" onClick={() => this.props.fetchMavericks()}>Party Mavericks</Button>
          <Button size="big" color="red" onClick={() => this.props.fetchTruants()}>Most Truant</Button>
          <Button size="big" color="black" onClick={() => this.props.fetchBySeniority()}>Longest Serving</Button>
          <Button size="big" color="orange" onClick={() => this.props.fetchByAge()}>Oldest</Button>
          <Button
            size="big"
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


export default connect(null, { fetchHouse, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge })(HouseSorter)
