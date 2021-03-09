import React from 'react';
import MyPostsContainer from './my-posts/my-posts-container';
import ProfileInfo from './profile-info';
// import s from './profile.module.css';

const Profile = (props) => {

    return(
        <div>
            <ProfileInfo savePhoto={ props.savePhoto } 
                        isOwner={ props.isOwner } 
                        profile={ props.profile } 
                        status={ props.status } 
                        saveProfile={props.saveProfile}
                        updateStatus={ props.updateStatus }/>
            <MyPostsContainer />
      </div>
    )
};

export default Profile;
    