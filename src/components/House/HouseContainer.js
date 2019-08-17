import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { connect } from 'react-redux'
import { fetchHouse } from './HouseActions'
import { Container } from 'semantic-ui-react'
import MemberSearchBar from '../Member/MemberSearchBar'
import MemberSorter from '../Member/MemberSorter'


const LoadableMemberSearchBar = Loadable({
  loader: () => import('../Member/MemberSearchBar'),
  loading: MemberSearchBar
})


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
        <MemberSorter renderedBy="house"/>
        <br/>
        <LoadableMemberSearchBar senate={this.state.senate} house={this.state.house} renderedBy="house"/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({reps: state.reps})

export default connect(mapStateToProps, {fetchHouse })(HouseContainer)
