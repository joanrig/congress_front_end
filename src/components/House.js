import React, { Component } from 'react'
import { fetchHouse } from '../actions/house'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import RepCard from './RepCard'

class House extends React.Component {
  state = { reps: []}

  componentDidMount(){
    this.props.fetchHouse()
  }

  render() {
    return (
      <div>
        <h1>House component</h1>
        <Card.Group itemsPerRow={5}>
          {this.props.house.map(rep => <RepCard key={rep.id} rep={rep}/>)}
        </Card.Group>
      </div>
    )

  }
}

const mapStateToProps = state => ({house: state.house})


export default connect(mapStateToProps, {fetchHouse})(House)
