import React from 'react'
import { connect } from 'react-redux'
import { fetchHouse } from '../actions/house'
import { Container } from 'semantic-ui-react'
import HouseSorter from '../components/HouseSorter'
import HouseSearchBar from '../components/HouseSearchBar'


class HouseContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reps: [],
    }
  }


  render(){
    console.log('hello from house container render')
    return (
      <Container>
        <br/>
        <br/>
        <HouseSorter/>
        <br/>
        <HouseSearchBar />
      </Container>
    )
  }
}

const mapStateToProps = state => ({reps: state.reps})

export default connect(mapStateToProps, {fetchHouse })(HouseContainer)
