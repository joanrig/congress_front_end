import React, { Component } from 'react'
import { fetchSenate } from '../actions/senate'
import { connect } from 'react-redux'

class Senate extends React.Component {
  state = { senators: []}

  componentDidMount(){
    this.props.fetchSenate()
    debugger
  }

  render() {
    return (
      <div>
        <h1>Senate component</h1>
        <ul>
          {this.props.senate.map(senator => <li>{senator.party}-{senator.state}: {senator.last_name}, {senator.first_name}</li>)}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = state => ({senate: state.senate})


export default connect(mapStateToProps, {fetchSenate})(Senate)
