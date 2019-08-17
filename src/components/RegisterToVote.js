import React, { Component, Suspense, lazy } from 'react'
const Countdown = React.lazy(() => import('./Countdown'))




class RegisterToVote extends Component {


  render(){

    let nextFederalElectionDate = "11/03/2020"


    return (
    <>
      <br/>
      <br/>
      <br/>
      <Suspense fallback={<div>Loading ....</div>}>
        <Countdown date={nextFederalElectionDate} />
      </Suspense>
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
