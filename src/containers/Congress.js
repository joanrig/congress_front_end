import React, { Component } from 'react'
import Senate from '../components/Senate'
import House from '../components/House'
import { Button } from 'semantic-ui-react'

class Congress extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    }
  }

  handleClick = () => {
    this.setState({
      showComponent: true
    })
  }

  render() {
    return (
      <>
        <h1>Congress container</h1>
        <Button className="Senate" onClick={this.handleClick}>
          Senate
        </Button>
        {this.state.showComponent ? <Senate /> : null}
      </>
    )
  }
}

export default Congress


//two fetch requests, one to senate, one to house. on each component you have filter -
//as is - separate fetch request for each data presentation
//senate and house will have their own state
