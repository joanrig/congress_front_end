import React, { Component } from 'react'
import { fetchHouse } from '../actions/house'
import { connect } from 'react-redux'

class House extends React.Component {
  state = { reps: []}

  componentDidMount(){
    // fetch('http://localhost:3000/search/reps')
    // .then(function(response) {
    // return response.json();
    //   })
    //   .then(reps => this.setState({reps}));
    this.props.fetchHouse()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>House component</h1>
        <ul>
          {this.props.house.map(rep => <li>{rep.party}-{rep.state}: {rep.last_name}, {rep.first_name}</li>)}
        </ul>
      </div>
    )

  }
}

const mapStateToProps = state => ({house: state.house})


export default connect(mapStateToProps, {fetchHouse})(House)
