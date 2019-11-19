import React from 'react';
import logo_a from "../../img/logo_a.svg";
import s from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className={s.sidebar}>
      <img src={logo_a} alt=""/>
      <nav>
        <div className={s.nav__link}>
          <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
        </div>
        <div className={s.nav__link}>
          <NavLink activeClassName={s.active} to="/users">Users</NavLink>
        </div>
        <div className={s.nav__link}>
          <NavLink activeClassName={s.active} to="/dialogs">Message</NavLink>
        </div>
        <div className={s.nav__link}>
          <NavLink activeClassName={s.active} to="/news">News</NavLink>
        </div>
        <div className={s.nav__link}>
          <NavLink activeClassName={s.active} to="/music">Music</NavLink>
        </div>
        <div className={s.nav__link}>
          <NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
        </div>
      </nav>
    </div>
  )
};

export default Sidebar;