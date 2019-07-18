import React, { Component } from 'react'
import Senate from '../components/Senate'
import House from '../components/House'

const Congress = () => {

    return (
      <div>
        <h1>Congress container</h1>
        <Senate/>
        <House />
      </div>
    )
}

export default Congress


//two fetch requests, one to senate, one to house. on each component you have filter -
//as is - separate fetch request for each data presentation
//senate and house will have their own state
