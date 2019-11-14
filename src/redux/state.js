import profileReducer from "./profileReducer";
import newsReducer from "./newsReducer";
import messageReducer from "./messageReducer";

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
    },
    newsPage: {
      newsData: [
        {id: 1, newsMessage: "Смешная картинка"},
        {id: 2, newsMessage: "Не смешная картинка"}
      ],
      newNewsText: ""
    },
  },
  _callSubscriber() {
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this._state.newsPage = newsReducer(this._state.newsPage, action);

    this._callSubscriber(this._state)
  }
};

export default store;