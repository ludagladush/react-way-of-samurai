import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import s from '../common/form-controls/forms-control.module.css';
import { createField, Input } from '../common/form-controls/forms-control';


const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={ handleSubmit }>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
            {/* <div> */}
                {/* <Field placeholder={ 'Email' } 
                        validate={ [required] } 
                        component={ Input } 
                        name={ 'email' }/>
            </div>
            <div>
                <Field placeholder={ 'Password ' } 
                        validate={ [required] } 
                        component={ Input }
                        type={ 'password' } 
                        name={ 'password' }/>
            </div>
            <div>
                <Field  type={ 'checkbox' } component={ Input } name={ 'rememberMe' }/> remember me
            </div> */}
            { error && <div className={ s.formSummaryError }>
                {  error }
            </div> } 
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={ onSubmit }/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login } )(Login);