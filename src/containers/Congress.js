import React, { Component } from 'react'
import Senate from '../components/Senate'
import House from '../components/House'
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

  handleResetClick = () => {
    console.log("reset state fired")
    this.setState({
      senate: [],
      house: [],
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
        <Button className="reset" onClick={this.handleResetClick}>
          Reset State
        </Button>
        {this.state.showSenate ? <Senate /> : null}
        {this.state.showHouse ? <House /> : null}
      </>
    )
  }
}

export default Congress


//two fetch requests, one to senate, one to house. on each component you have filter -
//as is - separate fetch request for each data presentation
//senate and house will have their own state
