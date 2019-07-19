import React, { Component } from 'react'
import { fetchSenate } from '../actions/senate'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import SenateCard from './SenatorCard'
// import Filter from './Filter'


class Senate extends React.Component {
  state = { senators: []}

  componentDidMount(){
    this.props.fetchSenate()
  }

  render() {
    return (
      <div>
        <h1>Senate component</h1>
        <Card.Group itemsPerRow={5}>
          {this.props.senate.map(senator =>
            <SenateCard key={senator.id} senator={senator}/>)}
        </Card.Group>
      </div>
    )
  }

}

const mapStateToProps = state => ({senate: state.senate})


export default connect(mapStateToProps, {fetchSenate})(Senate)
