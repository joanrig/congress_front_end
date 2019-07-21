import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <li><Link to='/' exact>Congress</Link></li>
      <li><Link to='/senate' exact>Senate</Link></li>
      <li><Link to='/house' exact>House</Link></li>
    </div>
  );
};

export default NavBar;
