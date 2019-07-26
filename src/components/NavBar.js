import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const NavBar = () => {
  return (

    <div>
        <br/>
        <div className='navbar center'>
          <Link to='/' ><Button size='massive' color='purple'>Home</Button></Link>
          <Link to='/senate' ><Button size='massive' color='red'>Senate</Button></Link>
          <Link to='/house' ><Button size='massive' color='blue'>House</Button></Link>
          <Link to='/bills' ><Button size='massive' color='pink'>Bills</Button></Link>
          <Link to='/about' ><Button size='massive' color='grey'>About</Button></Link>
          <br/>
          <br/>
        </div>
    </div>
  );
};

export default NavBar;

// <Link to='/presidential-candidates' ><Button size='massive' color='pink'>up for President</Button></Link>
