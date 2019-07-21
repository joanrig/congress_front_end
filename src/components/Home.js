import React from 'react';
import { Container, Image } from 'semantic-ui-react'
import HomePageGraphics from './HomePageGraphics'


const Home = () => {

  return (
    <Container>
      <h1 class="ui block header center">
        The 116th U.S. Congress Flashcards
      </h1>
      <br/>
      <br/>
      <h4 class="ui block header center">
        Who represents you? Who's served the longest? Who's the oldest? Most truant? Most Maverick? How many are women? Click the buttons above to find out!
      </h4>
      <HomePageGraphics />
    </Container>
  )
}
export default Home;
