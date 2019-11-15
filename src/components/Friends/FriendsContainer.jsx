import React from "react"
import Friends from "./Friends";
import StoreContext from "../../StoreContext";

let FriendsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        return <Friends friendData={state.friendsPage.friendData}/>
      }
      }
    </StoreContext.Consumer>
  )
};

export default FriendsContainer;