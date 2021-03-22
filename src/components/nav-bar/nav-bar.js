import React from 'react';
// import s from './nav-bar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav >
          <div >
            <NavLink to='/profile' >Profile</NavLink></div>
          <div>
            <NavLink to='users'>Users</NavLink></div>
          <div>
            <NavLink to='dialogs'>Messages</NavLink></div>
          <div >
            <NavLink to='news'>News</NavLink></div>
          <div>
            <NavLink to='music'>Music</NavLink></div>
          <div>
            <NavLink to='settings'>Settings</NavLink></div>
      </nav>
    )
};

export default Navbar;