import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to='/' exact><Button size='massive'>Home</Button></Link>
      <Link to='/senate' exact><Button size='massive'>Senate</Button></Link>
      <Link to='/house' exact><Button size='massive'>House</Button></Link>
      <Link to='/about' exact><Button size='massive'>About</Button></Link>
    </div>
  );
};

export default NavBar;
