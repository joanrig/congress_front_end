import React, { Component } from 'react'
import { Container, Button } from 'semantic-ui-react'

class UpVote extends Component {

  state = {
      upVoteCount: 0
   }

    handleUpvote = () => this.setState({upVoteCount: this.state.upVoteCount + 1})

  render(){

    let upVoteCount = this.state.upVoteCount
    return (
    <>
      {upVoteCount}
      <Button onClick={this.handleUpvote}>upvote</Button>
    </>
    )
  }

}

export default UpVote
