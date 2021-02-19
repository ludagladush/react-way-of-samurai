import React from 'react';
import s from './message.module.css';

const Message = (props) => {
    return(
        <div className={ s.message }>{ props.message} { props.oldMessages }</div>
    )
};

export default Message;