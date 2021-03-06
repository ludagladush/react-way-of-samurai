import React from 'react';
import s from './profile-info.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from './profile-status/profile-status-with-hooks';
import image from '../../common/profile-photo/profile-photo.jpg';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return(
        <div>
            <img className={ s.cover } src='https://i.pinimg.com/564x/ab/07/dd/ab07dd2ad38d737748f7ce4ddfa6b655.jpg' alt='cover'></img>
            <img src={ profile.photos.large || image } className={ s.avatar } alt='avatar'/>
            { isOwner && <input type={ 'file' } onChange={ onMainPhotoSelected }/> }
            <ProfileStatusWithHooks status={ status } updateStatus={ updateStatus }/>
        </div>
    )
};

export default ProfileInfo;
