const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE_USER = "SET-PROFILE-USER";

let initialState = {
  postsData: [
    {id: 1, message: "Hello", likes: 23},
    {id: 2, message: "How are you?", likes: 3},
    {id: 3, message: "Hey", likes: 42},
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        likes: 0
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ""
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_PROFILE_USER:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};

export const addPostCreator = () => ({type: ADD_POST});
export const setProfileUser = (profile) => ({type: SET_PROFILE_USER, profile});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;