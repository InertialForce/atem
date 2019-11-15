import React from 'react';
import s from "./Profile.module.css"
import ProfInfo from "./ProfInfo/ProfInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={s.prof}>
      <ProfInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  )
};

export default Profile;