import React from 'react'
import AboutText from './AboutText'
import { Container, Segment, Image } from 'semantic-ui-react'


const About = () => {
  return (

    <Container>
      <Segment>
        <h1 className="ui block header center">
          About
        </h1>
        <div>
          <Image src="https://vignette.wikia.nocookie.net/p__/images/f/f3/Bill_schoolhouse_rock.png/revision/latest?cb=20161029171330&path-prefix=protagonist" floated="left"/>
        </div>
        <br/>
        <AboutText />
      </Segment>
    </Container>

  )
}

export default About;
