import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './header.module.css';

const Header = (props) => {
    return(
        <header className={s.header}> 
        {/* <img src='#' alt='logo'/> */}
        <div className={ s.loginBlock }>
          { props.isAuth 
            ? <div>{props.login} - <button onClick={ props.logout }>Log Out</button></div>
              : <NavLink to={ '/login' } className={ s.loginBlockLink }>Login</NavLink>}
        </div>
      </header>
    )
};

export default Header;