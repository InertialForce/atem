import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followCreator, setUsersCreator, unfollowCreator} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followCreator(userID))
    },
    unfollow: (userID) => {
      dispatch(unfollowCreator(userID))
    },
    setUsers: (users) => {
      dispatch(setUsersCreator(users))
    }
  }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;