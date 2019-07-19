import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

class LikeButton extends Component {
  state = {}
  handleClick = () => this.setState(prevState => ({ active: !prevState.active }))

  render() {
    const { active } = this.state

    return (
      <Button toggle active={active} onClick={this.handleClick}>
        <Icon name='heart'/>
      </Button>
    )
  }
}

export default LikeButton
