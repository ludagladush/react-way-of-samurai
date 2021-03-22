import React, {useState} from 'react';
import './profile-info.css';
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
        <div className='container'>
            <div className='row'>
                <div className='avatar col-4'>
                    <img src={ profile.photos.large || image } className='jumbotron ' alt='avatar'/>
                    
                    <label className='ch-ph-button'>
                        { isOwner && <input type={ 'file' } onChange={ onMainPhotoSelected } /> }
                    </label>
                </div>

                <div className='pforile-data col-8'>
                    <div className='name-and-status col-8'>
                        <h1 className='full-name'>{profile.fullName}</h1>
                        <ProfileStatusWithHooks status={ status } updateStatus={ updateStatus } className='status'/>  
                    </div>
                    
                    { editMode
                            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                            : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/> }
                </div>
            </div>       
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-10'> 
                    <table className="table table-hover">
                        {/* <thread> */}
                            <tr>
                                <th scope="row"><b>Looking for a job</b>:</th>
                                <td>{ profile.lookingForAJob ? "yes" : "no" }</td>
                            </tr>
                            
                                { profile.lookingForAJob &&
                                    <tr>
                                        <th scope="row"><b>My professional skills</b>:</th>
                                        <td>{ profile.lookingForAJobDescription }</td>
                                    </tr>
                                }   
                            
                            <tr>
                                <th scope="row"><b>About me</b>:</th>
                                <td>{profile.aboutMe}</td>
                            </tr>
                            <tr>
                                <th scope="row"><b>Contacts</b>:</th>
                                <td>{Object.keys(profile.contacts).map(key => {
                                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                            })}</td>
                            </tr>

                        {/* </thread> */}
                    </table>
                    {/* <div>
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
                    </div> */}
                </div>
                <div className='col-2'>
                    {isOwner && <div><button onClick={goToEditMode} className='btn btn-primary'>Edit</button></div>}
                </div>
            </div> 
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    // return <div className=''><b>{contactTitle}</b>: {contactValue}</div>
    return <a href={contactValue} >{contactTitle} <br/></a>
}

export default ProfileInfo;
