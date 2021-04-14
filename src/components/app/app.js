import React, { Component } from 'react';
import './app.css';
// import Navbar from '../nav-bar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import DialogsContainer from '../dialogs/dialogs-container';
import UsersContainer from '../users/users-container';
import ProfileContainer from '../profile/profile-container';
import HeaderContainer from '../header/header-container';
import Login from '../login/login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp} from '../../redux/app-reducer';
import Preloader from '../common/preloader/preloader';
import store from '../../redux/redux-store';
import {withSuspense} from "../../hoc/with-suspence";

// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
      catchAllUnhandledErrors = (reason, promise) => {
            alert("Some error occured");
            //console.error(promiseRejectionEvent);
        }
      componentDidMount() {
            this.props.initializeApp();
            window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);    
        }
        componentWillUnmount() {
            window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
        }

      render() {
            if (!this.props.initialized) {
                  return <Preloader />
            }
            return (
                  <div className='appWrapper container-lg'> 
                    <HeaderContainer />
                    {/* <Navbar /> */}
          
                    <div className='content card mb-3'>
                        <Switch>
                              <Route exact path='/'
                                    render={() => <Redirect to={"/profile"}/>}/>
                              <Route path='/profile/:userId?'
                                    render={withSuspense(ProfileContainer)}/>
                              <Route path='/dialogs'
                                    render={withSuspense(DialogsContainer)}/>
                              <Route path='/users' 
                                    render={ () => <UsersContainer /> }/>
                              <Route path='/login' 
                                    render={ () => <Login /> }/>
                              <Route path='*'
                                    render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </div>
                  </div>
            )
      }
 
}

const mapStateToProps = (state) => ({
      initialized: state.app.initialized
})

let AppContainer = compose(
      withRouter,
      connect(mapStateToProps, {initializeApp}))(App);
  
  const SamuraiJSApp = (props) => {
      return <BrowserRouter basename="react-way-of-samurai">
                  <Provider store={ store }>
                        <AppContainer/>
                  </Provider>
            </BrowserRouter>
  }

export default SamuraiJSApp; 