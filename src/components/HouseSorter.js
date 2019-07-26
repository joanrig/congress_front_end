import React from 'react'
import { Button } from 'semantic-ui-react'
import { fetchHouse, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge } from '../actions/house'
import { connect } from 'react-redux'


class HouseSorter extends React.Component {
  constructor(props) {
    super()
  }

  render (){
    let tips = (
      `Click on any card's gavel icon to get or update the Senator's most recent bill!`
    )
    return (
      <>
        <h1 className="center">
          Who's Who in the U.S. House of Representatives?  Let's sort them out!
        </h1>

        <div className='social center'>
          <Button size="huge" color="green" onClick={() => this.props.fetchLoyalists()}>Party Loyalists</Button>
          <Button size="huge" color="blue" onClick={() => this.props.fetchMavericks()}>Party Mavericks</Button>
          <Button size="huge" color="red" onClick={() => this.props.fetchTruants()}>Most Truant</Button>
          <Button size="huge" color="black" onClick={() => this.props.fetchBySeniority()}>Longest Serving</Button>
          <Button size="huge" color="orange" onClick={() => this.props.fetchByAge()}>Oldest</Button>
          <Button
            size="huge"
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
