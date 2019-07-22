import React, { Component } from 'react'
import { fetchSenate, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge } from '../actions/senate'
import { connect } from 'react-redux'
import SenatorsList from '../components/SenatorsList'


class SenateContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      senators: [],
      search: ''
    }
  }

  componentDidMount(){
    this.props.fetchSenate()
  }

  render() {
    return <SenatorsList senate={this.props.senate} />;
  }
}


const mapStateToProps = state => ({senate: state.senate})

export default connect(mapStateToProps, { fetchSenate, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge })(SenateContainer)
