import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import newsReducer from "./newsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducersBatch = combineReducers(
  {
    profilePage: profileReducer,
    messagePage: messageReducer,
    friendsPage: friendsReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer,
  }
);

let store = createStore(reducersBatch);

window.store = store;

export default store;