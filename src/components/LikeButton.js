import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

class LikeButton extends Component {
  state = {}

  handleLikeClick = () => {
    this.setState(prevState => ({ active: !prevState.active }))
    //toggle favorite status in database
    //search database based on favorites
  }





  render() {
    const { active } = this.state

    return (
      <Button toggle active={active} onClick={this.handleLikeClick}>
        <Icon name='heart'/>
      </Button>
    )
  }
}

export default LikeButton
