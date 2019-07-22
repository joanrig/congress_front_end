import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSenate } from '../actions/senate'
import { Container, Card, Button } from 'semantic-ui-react'
import SenateCard from '../components/SenatorCard'
import SortButtons from '../components/SortButtons'
import SenateSearchBar from '../components/SenateSearchBar'


class SenateContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      senators: [],
    }
  }

  componentDidMount(){
    this.props.fetchSenate()
  }

  render(){
    return (
      <Container>
        <br/>
        <br/>
        <SortButtons/>
        <br/>
        <SenateSearchBar/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({senate: state.senate})

export default connect(mapStateToProps, {fetchSenate })(SenateContainer)
