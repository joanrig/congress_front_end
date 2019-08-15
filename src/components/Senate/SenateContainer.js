import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSenate } from './SenateActions'
import { Container } from 'semantic-ui-react'
import MemberSorter from '../Member/MemberSorter'
import MemberSearchBar from '../Member/MemberSearchBar'


class SenateContainer extends Component {
  constructor() {
    super()

    this.state = {
      senate: [],
    }
  }

  componentDidMount(){
    this.props.fetchSenate()
  }

  render(){
    return (
      <Container >
        <br/>
        <br/>
        <MemberSorter renderedBy="senate"/>
        <br/>
        <MemberSearchBar senate={this.state.senate} house={this.state.house} renderedBy="senate"/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({members: state.members})

export default connect(mapStateToProps, {fetchSenate })(SenateContainer)
