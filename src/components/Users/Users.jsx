import React from "react";
import s from "./Users.module.css";
import usersIcon from "./../../img/users_icon.png";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map( p => {
          return <span className={props.currentPage === p && s.selectedPage}
                       onClick={ (e) => props.onPageChanged(p)}>{p}</span>
        })}
      </div>
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
        </div>
      )}
    </div>
  )
};

export default Users;