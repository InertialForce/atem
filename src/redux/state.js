let rerenderEntireTree = () => {

};

let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likes: 0
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state)
};
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state)
};

export const addMessage = () => {
  let newMessage = {
    id: 6,
    message: state.messagePage.newMessageText
  };
  state.messagePage.messagesData.push(newMessage);
  state.messagePage.newMessageText = "";
  rerenderEntireTree(state)
};
export const updateNewMessageText = (newText) => {
  state.messagePage.newMessageText = newText;
  rerenderEntireTree(state)
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;