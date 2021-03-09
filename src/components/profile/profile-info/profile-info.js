import React, {useState} from 'react';
import s from './profile-info.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from './profile-status/profile-status-with-hooks';
import image from '../../common/profile-photo/profile-photo.jpg';
import ProfileDataForm from './profile-data-form';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);
    
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return(
        <div>
            <div className={s.descriptionBlock}>
                <img className={ s.cover } src='https://i.pinimg.com/564x/ab/07/dd/ab07dd2ad38d737748f7ce4ddfa6b655.jpg' alt='cover'></img>
                <img src={ profile.photos.large || image } className={ s.avatar } alt='avatar'/>
                { isOwner && <input type={ 'file' } onChange={ onMainPhotoSelected }/> }

                { editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/> }

                <ProfileStatusWithHooks status={ status } updateStatus={ updateStatus }/>
            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }

        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
