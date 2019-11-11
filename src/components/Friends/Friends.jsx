import React from "react"
import s from "./Friends.module.css"
import Friend from "./Friend/Friend";

let Friends = (props) => {

  let friendElement = props.stateFriends.friendData.map((f) => <Friend name={f.name}/>);

  return (
    <div className={s.friends}>
      <span className={s.heading__friends}>Friends:</span>
      {friendElement}
    </div>
  )
};

export default Friends;