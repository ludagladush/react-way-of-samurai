import React from 'react';
import s from './profile-info.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from './profile-status/profile-status-with-hooks';
import ProfilePhoto from '../../common/profile-photo/profile-photo';

const ProfileInfo = ({ profile, status, updateStatus }) => {

    if (!profile) {
        return <Preloader />
    }

    return(
        <div>
            <img className={ s.cover } src='https://i.pinimg.com/564x/ab/07/dd/ab07dd2ad38d737748f7ce4ddfa6b655.jpg' alt='cover'></img>
            {/* <img className={ s.avatar } src={ profile.photos.large } alt='cover'></img> */}
            <ProfilePhoto photo={ profile.photos.large } className={ s.avatar }/>
            {/* <ProfileStatus status={ props.status } updateStatus={ props.updateStatus }/> */}
            <ProfileStatusWithHooks status={ status } updateStatus={ updateStatus }/>
            <div className={ s.description }>
               Login: { profile.name }
               
            </div>
        </div>
    )
};

export default ProfileInfo;
