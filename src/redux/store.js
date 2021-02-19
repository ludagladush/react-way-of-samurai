import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {

    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likes: 15 },
            { id: 2, message: 'It\'s my first post', likes: 20 },
            { id: 3, message: 'Dada', likes: 21 },
            { id: 4, message: 'Blabla', likes: 6 }
          ],
        newPostText: ''
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Luda' },
            { id: 2, name: 'Sasha' },
            { id: 3, name: 'Vika' },
            { id: 4, name: 'Nika' }
          ],
    
          messages: [
            { id: 1, text: 'Hi' },
            { id: 2, text: 'How are you?' },
            { id: 3, text: 'What is your name?' },
            { id: 4, text: 'What is your favorite color? ' }
          ],
          newMessageBody: ''
    },
    sidebar: {}
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};


window.store = store;

export default store;