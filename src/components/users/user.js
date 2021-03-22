import React from 'react';
// import image from './users-image.jpg';
import { NavLink } from 'react-router-dom';
import ProfilePhoto from '../common/profile-photo/profile-photo';
import './users.css';




const User = ({ user, followingInProgress, unfollow, follow }) => {

    return (
        <div className='users'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'> </div>
                    <div className='col-2'>
                        <NavLink to={ '/profile/' + user.id }>
                        <ProfilePhoto photo={ user.photos.small }/>
                        {/* <img src={ user.photos.small != null ? user.photos.small : image } 
                            alt='avatar' className={ styles.userPhoto }/> */}
                        </NavLink>
                    </div>
                        <div className='col-3'>
                            <span>
                                <h5>{ user.name }</h5>
                                <div>{ user.status }</div>
                            </span>
                            <span>
                            <div className=''>
                        { user.followed 
                            ? <button disabled={ followingInProgress
                                .some( id => id === user.id) } 
                                    onClick={ () => { unfollow(user.id); } }>
                                    Unfollow</button>

                            : <button disabled={ followingInProgress
                                .some( id => id === user.id) } 
                                    onClick={ () => { follow(user.id) } }>
                                    Follow</button>}
                    </div>
                            </span>
                        </div>
                        <div className='col-4'></div>
                
                    </div>
            </div>
            {/* <div className='container'> 
                <div className='row'> 
                    <div className='col-4'></div>
                    <div className='col-4'>
                        { user.followed 
                            ? <button disabled={ followingInProgress
                                .some( id => id === user.id) } 
                                    onClick={ () => { unfollow(user.id); } }>
                                    Unfollow</button>

                            : <button disabled={ followingInProgress
                                .some( id => id === user.id) } 
                                    onClick={ () => { follow(user.id) } }>
                                    Follow</button>}
                    </div>
                    <div className='col-4'></div>
                </div>
            </div> */}
        </div>

        )
}


export default User;