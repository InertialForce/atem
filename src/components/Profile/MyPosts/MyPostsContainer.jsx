import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostCreator());
  };

  let changePostMessage = (text) => {
    props.store.dispatch(updateNewPostTextCreator(text))
  };

  return (
    <MyPosts addPost={addPost}
             postsData={state.profilePage.postsData}
             newPostText={state.profilePage.newPostText}
             updateNewPostText={changePostMessage}/>)
};

export default MyPostsContainer;