import React from 'react'
import { connect } from 'react-redux'
import { fetchSenate } from './SenateActions'
import { Container } from 'semantic-ui-react'
import SenateSorter from './SenateSorter'
import SenateSearchBar from './SenateSearchBar'


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
        <SenateSorter/>
        <br/>
        <SenateSearchBar/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({senate: state.senate})

export default connect(mapStateToProps, {fetchSenate })(SenateContainer)
