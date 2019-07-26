import React from 'react'
import { connect } from 'react-redux'
import { fetchBillsBySubject } from '../actions/bills'
import { Container, Card } from 'semantic-ui-react'
import BillCard from '../components/BillCard'
import BillsSearchBar from '../components/BillsSearchBar'



class BillsContainer extends React.Component {
  constructor(props) {
    super()

    this.state = {
      bills: [],
    }
  }




  render(){
    return (
      <Container>
        <BillsSearchBar/>
        <Card.Group itemsPerRow={5}>
          <BillCard />
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = state => ({bills: state.bills})

export default connect(mapStateToProps, { fetchBillsBySubject })(BillsContainer)
