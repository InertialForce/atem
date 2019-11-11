import React from 'react';
import s from "./Post.module.css"
import logo from "./../../../../img/batman-icon.png"


const Post = (props) => {
  return (
    <div>
      <div className={s.post}>
        <img src={logo} alt=""/>
        <span className={s.message}>{props.message}</span>
      </div>
      <div className={s.number__likes}>Like {props.like}</div>
    </div>
  )
};

export default Post;