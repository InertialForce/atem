import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostCreator());
        };

        let changePostMessage = (text) => {
          store.dispatch(updateNewPostTextCreator(text))
        };
        return <MyPosts addPost={addPost}
                        postsData={state.profilePage.postsData}
                        newPostText={state.profilePage.newPostText}
                        updateNewPostText={changePostMessage}/>
      }
      }
    </StoreContext.Consumer>
  )
};

export default MyPostsContainer;