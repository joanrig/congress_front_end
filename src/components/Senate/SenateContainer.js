import React from 'react'
import { connect } from 'react-redux'
import { fetchSenate } from './SenateActions'
import { Container } from 'semantic-ui-react'
import SenateSorter from './SenateSorter'
import MemberSearchBar from '../Member/MemberSearchBar'


class SenateContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      members: [],
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
        <SenateSorter/>
        <br/>
        <MemberSearchBar members={this.state.members}/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({members: state.members})

export default connect(mapStateToProps, {fetchSenate })(SenateContainer)
