import React, { Component } from 'react'
import { fetchSenate } from '../actions/senate'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import SenateCard from './SenatorCard'


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


//  <button class="ui button get_senate" role="button">Senate</button>
  // <button class="ui button get_house" role="button">House</button>

    // {this.props.senate.map(senator => <li>{senator.party}-{senator.state}: {senator.last_name}, {senator.first_name}</li>)}
