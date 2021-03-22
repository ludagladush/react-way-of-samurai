import React from 'react';
import { NavLink } from 'react-router-dom';
// import s from './header.module.css';

const Header = (props) => {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/profile">SamuraiJS</a>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to='/profile' className="nav-link">Profile
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='users' className="nav-link">Users</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='dialogs' className="nav-link">Messages</NavLink>
            </li>
          </ul>
        </div>

        <header > 
          <div >
            { props.isAuth 
              ? <div>{props.login} - <button onClick={ props.logout } className="btn btn-secondary my-2 my-sm-0">Log Out</button></div>
                : <button><NavLink to={ '/login' } className="btn btn-secondary my-2 my-sm-0">Login</NavLink></button>}
          </div>
        </header>
      </nav>
    )
};

export default Header;