import React, { Component } from 'react'
import { fetchHouse } from '../actions/house'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import RepCard from './RepCard'

class House extends React.Component {
  constructor(){
    super()

    this.state = {
      reps: [],
      search: ''
    }
  }

  componentDidMount(){
    this.props.fetchHouse()
  }

  updateSearch= (event) => {
    this.setState({search: event.target.value.substr(0, 100)})
  }

  render() {
    let filteredReps = this.props.house.filter(
      (rep) => {
        let name = rep.last_name.toUpperCase() + rep.first_name.toUpperCase() + rep.state_full_name.toUpperCase()
        let input = this.state.search.toUpperCase()
        //!== -1 means not found?
        return name.indexOf(input) !== -1
      }
    )

    return (
      <div>
        <h1>U.S. House of Representatives</h1>
        Search for a representative by name
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <br/>
        <br/>

        <Card.Group itemsPerRow={7}>
          {filteredReps.map(rep => <RepCard key={rep.id} rep={rep}/>)}
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = state => ({house: state.house})


export default connect(mapStateToProps, {fetchHouse})(House)
