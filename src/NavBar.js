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

  componentDidMount() {
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
    let navbarStyle
    if (isMobile) {
      buttonSize = "small"
      navbarStyle = "NavBar mobile"
    } else {
      buttonSize = "huge"
      navbarStyle = "NavBar desktop"
    }


    return (

      <div className={navbarStyle}>
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
