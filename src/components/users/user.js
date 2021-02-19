import React from 'react';
// import image from './users-image.jpg';
import { NavLink } from 'react-router-dom';
import ProfilePhoto from '../common/profile-photo/profile-photo';



const User = ({ user, followingInProgress, unfollow, follow }) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={ '/profile/' + user.id }>
                    <ProfilePhoto photo={ user.photos.small }/>
                    {/* <img src={ user.photos.small != null ? user.photos.small : image } 
                        alt='avatar' className={ styles.userPhoto }/> */}
                    </NavLink>
                </div>
                <div>
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
            <span>
                <span>
                    <div>{ user.name }</div>
                    <div>{ user.status }</div>
                </span>
                <span>
                    <div>{ 'u.location.city' }</div>
                    <div>{ 'u.location.country' }</div>
                </span>
            </span>
            </div>)
}


export default User;