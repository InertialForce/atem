import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const App = (props) => {
  return (
    <div className="app__wrapper">
      <Sidebar/>
      <div className="content">
        <Route path="/profile"
               render={() => <Profile stateProfile={props.state.profilePage}
                                      dispatch={props.dispatch}/>}/>
        <Route path="/dialogs"
               render={() => <Dialogs stateDialogs={props.state.messagePage}
                                      dispatch={props.dispatch}/>}/>
        <Route path="/news" render={News}/>
        <Route path="/music" render={Music}/>
        <Route path="/settings" render={Settings}/>
      </div>

      <Friends stateFriends={props.state.friendsPage}/>
    </div>
  );
};

export default App;