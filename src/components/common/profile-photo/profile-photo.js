import React from 'react';
import image from './profile-photo.jpg';
import styles from './profile-photo.module.css';



const ProfilePhoto = ({ photo }) => {

    return (
        <img src={ photo != null ? photo : image } 
                        alt='avatar' className={ styles.userPhoto }/>
    )
}

export default ProfilePhoto;