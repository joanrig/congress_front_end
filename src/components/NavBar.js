import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const NavBar = () => {
  return (

    <div className="NavBar">
        <br/>
        <div className='navbar center'>
          <Link to='/' ><Button size='huge' color='purple'>Home</Button></Link>
          <Link to='/senate' ><Button size='huge' color='red'>Senate</Button></Link>
          <Link to='/house' ><Button size='huge' color='blue'>House</Button></Link>
          <Link to='/bills' ><Button size='huge' color='pink'>Bills</Button></Link>
          <Link to='/vote' ><Button size='huge' color='green'>Vote</Button></Link>
          <Link to='/about' ><Button size='huge' color='grey'>About</Button></Link>
          <br/>
          <br/>
        </div>
    </div>
  );
};

export default NavBar;

// <Link to='/presidential-candidates' ><Button size='massive' color='pink'>up for President</Button></Link>
