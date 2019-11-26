import React from 'react';
import icon from "./../../../img/batman-icon.png"
import s from "./ProfInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";


const ProfInfo = (props) => {
  if(!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={s.prof__info}>
      <img className={s.prof__img} src={props.profile.photos.large} alt=""/>
      <div className={s.prof__text}>
        <p>Full name: {props.profile.fullName}</p>
        <p>About me: {props.profile.aboutMe}</p>
        <p>Job: {props.profile.lookingForAJob}</p>
        <p>Name: {props.profile.fullName}</p>
        <p>Name: {props.profile.fullName}</p>
      </div>
    </div>
  )
};

export default ProfInfo;