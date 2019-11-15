import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import NewsContainer from "./components/News/NewsContainer";

const App = (props) => {
  return (
    <div className="app__wrapper">
      <Sidebar/>
      <div className="content">
        <Route path="/profile"
               render={() => <Profile store={props.store}/>}/>
        <Route path="/dialogs"
               render={() => <DialogsContainer store={props.store}/>}/>
        <Route path="/news"
               render={() => <NewsContainer store={props.store}/>}/>
        <Route path="/music" render={Music}/>
        <Route path="/settings" render={Settings}/>
      </div>
      <FriendsContainer store={props.store}/>
    </div>
  );
};

export default App;