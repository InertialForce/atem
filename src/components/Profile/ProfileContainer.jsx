import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setProfileUser} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setProfileUser(response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
};


export default connect(mapStateToProps,{setProfileUser})(ProfileContainer);