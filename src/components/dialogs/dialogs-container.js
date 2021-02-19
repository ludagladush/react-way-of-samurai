import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/auth-redirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
        // isAuth: state.auth.isAuth 
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)