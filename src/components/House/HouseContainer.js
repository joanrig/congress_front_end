import React, { Component, Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { fetchHouse } from './HouseActions'
import { Container } from 'semantic-ui-react'


const MemberSorter = lazy(() => import('../Member/MemberSorter'))
const MemberSearchBar = lazy(() => import('../Member/MemberSearchBar'))


class HouseContainer extends Component {
  constructor() {
    super()

    this.state = {
      reps: [],
    }
  }

  componentDidMount(){
    console.log("a")
    this.props.fetchHouse()
    console.log("b")
  }

  shouldComponentUpdate(nextProps, nextState) {
   if (this.props.reps === nextProps.reps) {
     return false;
   } else {
     return true;
   }
 }


  render(){
    return (
      <Container>
        <br/>
        <br/>
        <Suspense fallback={<div>Loading ...</div>}>
          <MemberSorter renderedBy="house"/>
          <br/>
          <MemberSearchBar senate={this.state.senate} house={this.state.house} renderedBy="house"/>
        </Suspense>
      </Container>
    )
  }
}

const mapStateToProps = state => ({reps: state.reps})

export default connect(mapStateToProps, {fetchHouse })(HouseContainer)
