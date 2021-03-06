import React, { Component } from 'react'
import Loadable from 'react-loadable'
import Countdown from './Countdown'

const LoadableCountdown = Loadable({
  loader: () => import('./Countdown'),
  loading: Countdown
})


class RegisterToVote extends Component {


  render(){

    let nextFederalElectionDate = "11/03/2020"


    return (
    <>
      <br/>
      <br/>
      <br/>
      <LoadableCountdown date={nextFederalElectionDate} />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <iframe
        className = "register-to-vote"
        title="register-to-vote"
        src="https://register.rockthevote.com/?partner=1&source=ovrpage" ></iframe>
    </>
    )
  }



  }

export default RegisterToVote
