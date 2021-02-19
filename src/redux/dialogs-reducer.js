const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
      ]
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return { 
                ...state, 
                messages: [...state.messages, { id: 6, message: body }], 
            }; 
        default:
            return state;
    }
}

export let sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });
    

export default dialogsReducer;