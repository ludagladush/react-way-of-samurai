import React from 'react';
import s from './dialog-item.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    
    return(
        <div className={ s.dialog + ' ' + s.active }>
            <NavLink to={ path } className={ s.nameLink }>{ props.name }</NavLink>
        </div>
    )
};

export default DialogItem;