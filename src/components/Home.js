import React from 'react';
import { Container } from 'semantic-ui-react'
import HomePageGraphics from './HomePageGraphics'


const Home = () => {

  return (
    <Container>
      <h1 className="ui block header center">
        Who's Who in the 116th United States Congress?
      </h1>
      <br/>
      <h3 className="center">powered by data from ProPublica</h3>
      <h4 className="ui block header center">
        Who represents you? Who's served the longest? Who's the oldest? Most truant? Most Maverick? How many are women? Click the buttons above to find out!
      </h4>
      <HomePageGraphics />
    </Container>
  )
}
export default Home;
