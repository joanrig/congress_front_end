import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHouse } from './HouseActions'
import { Container } from 'semantic-ui-react'
import HouseSorter from './HouseSorter'
// import HouseSearchBar from './HouseSearchBar'
import MemberSearchBar from '../Member/MemberSearchBar'


class HouseContainer extends Component {
  constructor() {
    super()

    this.state = {
      members: [],
    }
  }

  componentDidMount(){
    console.log("a")
    this.props.fetchHouse()
    console.log("b")
    //a, b, c, d, a
  }


  render(){
    return (
      <Container>
        <br/>
        <br/>
        <HouseSorter/>
        <br/>
        <MemberSearchBar members={this.state.members}/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({members: state.members})

export default connect(mapStateToProps, {fetchHouse })(HouseContainer)
