import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <div className='navbar' class='center'>
      <Link to='/' exact><Button size='massive' color=' purple'>Home</Button></Link>
      <Link to='/senate' exact><Button size='massive' color='red'>Senate</Button></Link>
      <Link to='/house' exact><Button size='massive' color='blue'>House</Button></Link>
      <Link to='/about' exact><Button size='massive' color='grey'>About</Button></Link>
    </div>
  );
};

export default NavBar;
