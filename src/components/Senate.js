import React, { Component } from 'react'
import { fetchSenate } from '../actions/senate'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import SenateCard from './SenatorCard'


class Senate extends React.Component {
  constructor() {
    super()

    this.state = {
      senators: [],
      search: 'search'
    }
  }

  componentDidMount(){
    this.props.fetchSenate()
  }

  updateSearch= (event) => {
    this.setState({search: event.target.value.substr(0, 30)})
  }

  render() {
    return (
      <div>
        <h1>Senate component</h1>
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <h3>this was the card group</h3>
      </div>
    )
  }

}

const mapStateToProps = state => ({senate: state.senate})


export default connect(mapStateToProps, {fetchSenate})(Senate)
