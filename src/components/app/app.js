import React, { Component } from 'react';
import './app.css';
import Navbar from '../nav-bar';
import { HashRouter, Route, withRouter } from 'react-router-dom';
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



class App extends Component {

      componentDidMount() {
            this.props.initializeApp();
            
        }

      render() {
            if (!this.props.initialized) {
                  return <Preloader />
            }
            return (
                  <div className='appWrapper'> 
                    <HeaderContainer />
                    <Navbar />
          
                    <div className='content'>
                      <Route path='/profile/:userId?' 
                            render={ () => <ProfileContainer /> }/>
                      <Route path='/dialogs' 
                            render={ () => <DialogsContainer /> } /> 
                      <Route path='/users' 
                            render={ () => <UsersContainer /> }/>
                      <Route path='/news' />
                      <Route path='/music' />
                      <Route path='/settings' />
                      <Route path='/login' 
                            render={ () => <Login /> }/>
                    </div>
          
                  </div>
            );
      }
 
}

const mapStateToProps = (state) => ({
      initialized: state.app.initialized
})

let AppContainer = compose(
      withRouter,
      connect(mapStateToProps, {initializeApp}))(App)
  
  const SamuraiJSApp = (props) => {
      return <HashRouter basename={process.env.PUBLIC_URL}>
          <Provider store={store}>
              <AppContainer/>
          </Provider>
      </HashRouter>
  }

export default SamuraiJSApp; 