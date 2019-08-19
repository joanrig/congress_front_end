import React, { PureComponent } from 'react';
import { Container } from 'semantic-ui-react'
import HomePageGraphics from './HomePageGraphics'


class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth
     }
   }

  componentDidMount() {
     window.addEventListener('resize', this.handleWindowSizeChange)
   }

  componentWillUnmount() {
     window.removeEventListener('resize', this.handleWindowSizeChange)
   }

  handleWindowSizeChange = () => {
     this.setState({ width: window.innerWidth })
   }

  render(){

    let isMobile
    const width = this.state.width
    width <= 500 ? isMobile = true : isMobile = false


    // intro font size
    let style
    if (isMobile) {
      style = "ui block header home intro mobile"
    } else {
      style = "ui block header home intro desktop"
    }


    return (
      <Container className="center">
        <br/>
        <h1>
          Who's Who in the 116th United States Congress?
        </h1>
        <h4>powered by data from ProPublica and Center For Responsive Politics</h4>
        <br/>
        <div className={style}>
          Who's served the longest? Who's the oldest? <br/>
          Most truant? Most Maverick? How many are women? <br/>
          Click the buttons above to find out!
        </div>
        <br/>
        <HomePageGraphics image={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vote-lead-01-1520883451.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*'}/>
      </Container>
    )

  }


}
export default Home
