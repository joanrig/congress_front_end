import React from 'react';
import { Container } from 'semantic-ui-react'
import HomePageGraphics from './HomePageGraphics'


const Home = () => {

  return (
    <Container className="center">
      <h1>
        Who's Who in the 116th United States Congress?
      </h1>
      <h4>powered by data from ProPublica and Center For Responsive Politics</h4>
      <br/>
      <h2 className="ui block header home intro">
        Who's served the longest? Who's the oldest? <br/>
        Most truant? Most Maverick? How many are women? <br/>
        Click the buttons above to find out!
      </h2>
      <br/>
      <HomePageGraphics image={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vote-lead-01-1520883451.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*'}/>
    </Container>
  )
}
export default Home
