import React from "react"
import Friends from "./Friends";
import {connect} from "react-redux";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/authReducer";

class FriendsContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }

  render() {
    return <Friends {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    friendData: state.friendsPage.friendData,
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
};

export default connect(mapStateToProps, {setAuthUserData})(FriendsContainer);