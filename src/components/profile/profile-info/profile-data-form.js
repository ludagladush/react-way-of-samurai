import React from 'react';
import './profile-info.css';
import {createField, Input, Textarea} from '../../common/form-controls/forms-control'
import {reduxForm} from 'redux-form';
// import style from '../../common/form-controls/forms-control.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return <form onSubmit={handleSubmit}>
        <div className='container'>
            <div className='row'>
                <div className='col-10'>
                    <div>
                        <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
                    </div>
                    <div>
                        <b>Looking for a job</b>: { createField("", "lookingForAJob", [], Input, {type: "checkbox", className: 'lookingForAJob'} )}
                    </div>

                    <div>
                        <b>My professional skills</b>:
                        { createField("My professional skills", "lookingForAJobDescription", [], Textarea  )}
                    </div>


                    <div>
                        <b>About me</b>:
                        { createField("About me", "aboutMe", [], Textarea  )}
                    </div>
                    <div>
                        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className='contact'>
                        <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                        </div>
                    })}
                    </div>
                </div>
                <div class-name='col-2'>
                    <div><button type="button" id="btnFetch" class="btn btn-primary mb-2">Save</button></div>
                        {error && <div className='formSummaryError'>
                            {error}
                        </div>
                        }
                </div>
            </div>
        </div>
        
       
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;