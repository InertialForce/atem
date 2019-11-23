import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
  followCreator,
  setCurrentPageCreator,
  setTotalUsersCountCreator,
  setUsersCreator,
  unfollowCreator
} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageCreator(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountCreator(totalCount))
    }
  }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;