import React from 'react'
import { Button } from 'semantic-ui-react'
import { fetchSenate, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge } from '../actions/senate'
import { connect } from 'react-redux'


class SenateSorter extends React.Component {
  constructor(props) {
    super()
  }

  render (){
    return (
      <>
        <h1 className="ui block header center">
          Who's Who in the U.S. Senate?  Let's sort them out!
        </h1>
        <div className='social center'>
          <Button size="huge" color="green" onClick={() => this.props.fetchLoyalists()}>Party Loyalists</Button>
          <Button size="huge" color="blue" onClick={() => this.props.fetchMavericks()}>Party Mavericks</Button>
          <Button size="huge" color="red" onClick={() => this.props.fetchTruants()}>Most Truant</Button>
          <Button size="huge" color="black" onClick={() => this.props.fetchBySeniority()}>Longest Serving</Button>
          <Button size="huge" color="orange" onClick={() => this.props.fetchByAge()}>Oldest</Button>
        </div>
      </>
    )
  }
}


export default connect(null, { fetchSenate, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge })(SenateSorter)
