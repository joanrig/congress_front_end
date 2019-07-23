import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { fetchCandidates } from '../actions/Candidates'
import CandidatesList from '../components/CandidatesList'


class CandidatesContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      candidates: [],
    }
  }

  componentDidMount(){
    console.log('calling fetchCandidates from candidates container')
    fetchCandidates()
  }

  render(){
    return (
      <Container>
        <CandidatesList candidates={this.props.candidates}/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({candidates: state.candidates})

export default connect(mapStateToProps, {fetchCandidates})(CandidatesContainer)
