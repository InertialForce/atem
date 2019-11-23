import React from 'react';
import {connect} from "react-redux";
import {
  followCreator,
  setCurrentPageCreator,
  setTotalUsersCountCreator,
  setUsersCreator,
  unfollowCreator
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      });
  };

  render() {
    return <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
                  usersData={this.props.usersData}/>
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);