import React from "react";
import s from "./Users.module.css";
import usersIcon from "./../../img/users_icon.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return <span key={p.id} className={props.currentPage === p && s.selectedPage}
                       onClick={(e) => props.onPageChanged(p)}>{p}</span>
        })}
      </div>
      {props.usersData.map(u =>
        <div key={u.id}>
          <div>
            <NavLink to={`/profile/${u.id}`}>
              <img className={s.photoUser} src={u.photos.small != null ? u.photos.small : usersIcon} alt="img"/>
            </NavLink>
            {u.followed
              ? <button onClick={() => {

                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "99834798-6d3b-41d8-80dc-f22134f354a9"
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(u.id);
                    }
                  });
              }}>Unfollow</button>
              : <button onClick={() => {

                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "99834798-6d3b-41d8-80dc-f22134f354a9"
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id);
                    }
                  });
              }}>Follow</button>
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
        </div>
      )}
    </div>
  )
};

export default Users;