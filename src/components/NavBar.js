import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

class NavBar extends PureComponent {
  constructor(props) {
    super()

    this.state = {
      width: window.innerWidth
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  }

  render(){

    let isMobile
    const width = this.state.width
    width <= 500 ? isMobile = true : isMobile = false


    let buttonSize
    if (isMobile) {
      buttonSize = "small"
    } else {
      buttonSize = "huge"
    }


    return (

      <div className="NavBar">
          <div className='navbar center'>
            <Link to='/' ><Button size={buttonSize} color='purple'>Home</Button></Link>
            <Link to='/senate' ><Button size={buttonSize} color='red'>Senate</Button></Link>
            <Link to='/house' ><Button size={buttonSize} color='blue'>House</Button></Link>
            <Link to='/bills' ><Button size={buttonSize} color='pink'>Bills</Button></Link>
            <Link to='/vote' ><Button size={buttonSize} color='green'>Vote</Button></Link>
            <Link to='/about' ><Button size={buttonSize} color='grey'>About</Button></Link>
          </div>
      </div>
    )

  }




}

export default NavBar;

// <Link to='/presidential-candidates' ><Button size='massive' color='pink'>up for President</Button></Link>
