import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import newsReducer from "./newsReducer";
import friendsReducer from "./friendsReducer";

let reducersBatch = combineReducers(
  {
    profilePage: profileReducer,
    messagePage: messageReducer,
    friendsPage: friendsReducer,
    newsPage: newsReducer
  }
);

let  store = createStore(reducersBatch);

export default store;