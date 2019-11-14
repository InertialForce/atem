const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    {id: 1, name: "Kirill"},
    {id: 2, name: "Yuri"},
    {id: 3, name: "Nadya"},
    {id: 4, name: "Alex"},
    {id: 5, name: "Max"},
    {id: 6, name: "Petr"},
    {id: 7, name: "Viki"}
  ],
  messagesData: [
    {id: 1, message: "Hi"},
    {id: 2, message: "How"},
    {id: 3, message: "Took"},
    {id: 4, message: "Now"},
    {id: 5, message: "Root"}
  ],
  newMessageText: ""
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default messageReducer;