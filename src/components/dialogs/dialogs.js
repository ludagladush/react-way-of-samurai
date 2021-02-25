import React from 'react';
import s from './dialogs.module.css';
import DialogItem from './dialog-item';
import Message from './message';
import { Redirect } from 'react-router-dom';
import AddMessageForm from './add-message-form';


const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( 
        d => <DialogItem name={ d.name } id={ d.id } key={ d.id }/> );
    let messagesElements = state.messages.map( 
        m => <Message message={ m.message } oldMessages={ m.text } key={ m.id }/> );
    let newMessageBody = state.newMessageBody;
    
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };
    
    if (!props.isAuth) return <Redirect to={'/login'} />


    return(
        <div className={ s.dialogs }>
            <div className={ s.dialogsItems }>
               { dialogsElements }
            </div>
            <div className={ s.messages }>
                { messagesElements }
                <AddMessageForm onSubmit={ addNewMessage }/>
            </div>
        </div>
    )
};

export default Dialogs;