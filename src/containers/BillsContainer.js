import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import BillsSearchBar from '../components/BillsSearchBar'


class BillsContainer extends React.Component {
  constructor(props) {
    super()

    this.state = {
      bills: []
    }
  }

  componentDidMount(){
    this.setState({bills: this.props.bills})
   }


  render(){
    // this.state.bills => {bills: Array(0)}
    return (
      <Container>
        <BillsSearchBar/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({bills: state.bills})

export default connect(mapStateToProps)(BillsContainer)
