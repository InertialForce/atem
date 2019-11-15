import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let newMessage = () => {
    props.store.dispatch(addMessageCreator());
  };

  let changeNewMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextCreator(text))
  };

  return (
    <Dialogs dialogsData={state.messagePage.dialogsData}
             messagesData={state.messagePage.messagesData}
             newMessageText={state.messagePage.newMessageText}
             addMessage={newMessage}
             updateNewMessageText={changeNewMessageText}/>
  )
};

export default DialogsContainer;