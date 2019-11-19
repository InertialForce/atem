import React from 'react';
import s from "./Users.module.css"
import usersIcon from "./../../img/users_icon.png"
import * as axios from "axios";

const Users = (props) => {
  if (props.usersData.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        props.setUsers(response.data.items)
    });
  }
  return (
    <div>
      {props.usersData.map(u =>
        <div key={u.id}>
          <div>
            <img className={s.photoUser} src={u.photos.small != null ? u.photos.small : usersIcon} alt="img"/>
            {u.followed
              ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
              : <button onClick={() => {props.follow(u.id)}}>Follow</button>
            }
          </div>
          <div>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </div>
          </div>
        </div>)}
    </div>
  )
};

export default Users;