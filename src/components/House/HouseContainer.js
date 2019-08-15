import React from 'react'
import { connect } from 'react-redux'
import { fetchHouse } from './HouseActions'
import { Container } from 'semantic-ui-react'
import MemberSorter from '../Member/MemberSorter'
import MemberSearchBar from '../Member/MemberSearchBar'


class HouseContainer extends React.Component {
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
        <MemberSearchBar senate={this.state.senate} house={this.state.house} renderedBy="house"/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({reps: state.reps})

export default connect(mapStateToProps, {fetchHouse })(HouseContainer)
