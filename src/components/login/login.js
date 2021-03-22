import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import s from '../common/form-controls/forms-control.module.css';
import './login.css';
import { createField, Input } from '../common/form-controls/forms-control';


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <form onSubmit={ handleSubmit } >
                    <div class="form-group">
                        {createField("Email", "email", [required], Input)}
                        {createField("Password", "password", [required], Input, {type: "password"})}
                        <div className="row justify-content-center align-items-center">
                                {createField(null, "rememberMe", [], Input, { id: 'rememberMe', type: "checkbox", className:''})}
                                <label htmlFor="rememberMe" className="">Remember me</label>
                        </div>

                            {/* <input class="form-check-input" type="checkbox" value="" checked="">
                            Option one is this and that—be sure to include why it's great</label> */}

                        
                        { captchaUrl && <img src={captchaUrl} alt=''/>}
                        { captchaUrl &&  createField("Symbols from image", "captcha", [required], Input, {}) }

                        
                        { error && <div className={ s.formSummaryError }>
                            {  error }
                        </div> } 
                        <div>
                            <button>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    
    return <div className='login-form'>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={ onSubmit } captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login } )(Login);