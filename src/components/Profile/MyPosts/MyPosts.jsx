import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

  let postsElement = props.postsData.map(p => <Post message={p.message} like={p.likes}/>);

  let addPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostCreator());
  };

  let changePostMessage = () => {
    let text = addPostElement.current.value;
    props.dispatch(updateNewPostTextCreator(text))
  };

  return (
    <div className={s.prof__posts}>
      <div className={s.add__post}>
        <textarea className={s.add__posts}
                  onChange={changePostMessage}
                  value={props.newPostText}
                  ref={addPostElement}/>
        <button className={s.post__button} onClick={addPost}>Add Post</button>
      </div>
      <div className={s.posts}>
        <div className={s.myPost}>My Posts:</div>
        {postsElement}
      </div>
    </div>
  )
};

export default MyPosts;