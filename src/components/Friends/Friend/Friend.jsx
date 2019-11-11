import React from "react"
import s from "./Friend.module.css"
import iconFriends from "./../../../img/batman-icon.png"

let Friend = (props) => {
  return (
    <divv className={s.friend__name}>
      <img className={s.iconFriends} src={iconFriends} alt=""/>
      <span>{props.name}</span>
    </divv>
  )
};

export default Friend;