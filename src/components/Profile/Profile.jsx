import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfInfo from "./ProfInfo/ProfInfo";

const Profile = (props) => {
  return (
    <div className={s.prof}>
      <ProfInfo/>
      <MyPosts postsData={props.stateProfile.postsData}
               newPostText={props.stateProfile.newPostText}
               updateNewPostText={props.updateNewPostText}
               addPost={props.addPost}/>
    </div>
  )
};

export default Profile;