import React from 'react';
import s from "./Profile.module.css"
import ProfInfo from "./ProfInfo/ProfInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={s.prof}>
      <ProfInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  )
};

export default Profile;