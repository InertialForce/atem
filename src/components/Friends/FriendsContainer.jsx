import React from "react"
import Friends from "./Friends";

let FriendsContainer = (props) => {
  let state = props.store.getState();

  return (
    <Friends friendData={state.friendsPage.friendData}/>
  )
};

export default FriendsContainer;