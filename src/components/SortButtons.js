import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { fetchSenate, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge } from '../actions/senate'
import { connect } from 'react-redux'


class SortButtons extends React.Component {
  constructor(props) {
    super()
  }

  render (){
    return (
        <div class='social center'>
          <Button size="huge" color="green" onClick={() => this.props.fetchLoyalists()}>Party Loyalists</Button>
          <Button size="huge" color="blue" onClick={() => this.props.fetchMavericks()}>Party Mavericks</Button>
          <Button size="huge" color="red" onClick={() => this.props.fetchTruants()}>Most Truant</Button>
          <Button size="huge" color="black" onClick={() => this.props.fetchBySeniority()}>Longest Serving</Button>
          <Button size="huge" color="orange" onClick={() => this.props.fetchByAge()}>Oldest</Button>
        </div>    
    )
  }
}



// const mapDispatchToProps = dispatch => ({
//   fetchSenate: () => dispatch({ type: 'FETCH_SENATE', senate }),
//   fetchLoyalists: () => dispatch({ type: 'LOYALISTS', loyalists}),
//   fetchMavericks: () => dispatch({ type: 'MAVERICKS', mavericks }),
//   fetchTruants: () => dispatch({ type: 'TRUANTS', truants}),
//   fetchBySeniority: () => dispatch({ type: 'SENIORITY', seniority}),
//   fetchByAge: () => dispatch({ type: 'AGE', age})
// })

export default connect(null, { fetchSenate, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge })(SortButtons)
