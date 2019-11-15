import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElement = props.postsData.map(p => <Post message={p.message} like={p.likes}/>);

  let addPost = () => {
    props.addPost();
  };

  let changePostMessage = (event) => {
    let text = event.target.value;
    props.updateNewPostText(text)
  };

  return (
    <div className={s.prof__posts}>
      <div className={s.add__post}>
        <textarea className={s.add__posts}
                  onChange={changePostMessage}
                  value={props.newPostText}/>
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