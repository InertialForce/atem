const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE =  "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, message: "Hello", likes: 23},
        {id: 2, message: "How are you?", likes: 3},
        {id: 3, message: "Hey", likes: 42},
      ],
      newPostText: ""
    },
    messagePage: {
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
    },
    friendsPage: {
      friendData: [
        {name: "Kirill"},
        {name: "Viki"},
        {name: "Petr"},
      ]
    }
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likes: 0
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state)
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state)
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 6,
        message: this._state.messagePage.newMessageText
      };
      this._state.messagePage.messagesData.push(newMessage);
      this._state.messagePage.newMessageText = "";
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagePage.newMessageText = action.newText;
      this._callSubscriber(this._state)
    }
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default store;