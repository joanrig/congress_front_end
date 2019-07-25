import React from 'react'
import { connect } from 'react-redux'
import { fetchBillsByMember } from '../actions/bills'
import { Container, Card } from 'semantic-ui-react'
import BillCard from '../components/BillCard'



class BillsContainer extends React.Component {
  debugger
  constructor() {
    super()

    this.state = {
      bills: [],
    }
  }

  componentDidMount(){
    this.props.fetchBillsByMember()
    debugger
  }


  render(){
    console.log('hello from bills container render')
    return (
      <Container>
        <Card.Group itemsPerRow={5}>
          <BillCard />
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = state => ({bills: state.bills})

export default connect(mapStateToProps, {fetchBillsByMember })(BillsContainer)


// {this.props.bills.map(bill =>
//   <BillCard key={bill.id} bill={bill}/>)}
// )}
