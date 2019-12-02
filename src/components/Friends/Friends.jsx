import React from "react"
import s from "./Friends.module.css"
import Friend from "./Friend/Friend";
import {NavLink} from "react-router-dom";

const Friends = (props) => {

  let friendElement = props.friendData.map((f) => <Friend key={f.id} name={f.name}/>);

  return (
    <div>
      <div className={s.loginBlock}>
        {props.isAuth ? <span className={s.login}>{props.login}</span>
          : <NavLink className={s.login} to={"/login"}>Login</NavLink>}
      </div>
      <div className={s.friends}>
        <span className={s.heading__friends}>Friends:</span>
        {friendElement}
      </div>
    </div>
  )
};

export default Friends;