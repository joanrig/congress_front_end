import React, { Component } from 'react'
import SenatorsList from '../components/senate/SenatorsList'
import RepsList from '../components/RepsList'
import { Button } from 'semantic-ui-react'

class Congress extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      senate: [],
      house: [],
      showSenate: false,
      showHouse: false
    }
  }

  handleSenateClick = () => {
    console.log("handleSenateClick fired")
    this.setState({
      house: [],
      showHouse: false,
      showSenate: true
    })
  }

  handleHouseClick = () => {
    this.setState({
      senate: [],
      showSenate: false,
      showHouse: true,
    })
  }

  render() {
    return (
      <>
        <h1>Congress container</h1>
        <Button className="senate" onClick={this.handleSenateClick}>
          Senate
        </Button>
        <Button className="house" onClick={this.handleHouseClick}>
          House
        </Button>
        {this.state.showSenate ? <SenatorsList /> : null}
        {this.state.showHouse ? <RepsList /> : null}
      </>
    )
  }
}

export default Congress
