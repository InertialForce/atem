import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();

        let newMessage = () => {
          store.dispatch(addMessageCreator());
        };

        let changeNewMessageText = (text) => {
          store.dispatch(updateNewMessageTextCreator(text))
        };
        return <Dialogs dialogsData={state.messagePage.dialogsData}
                        messagesData={state.messagePage.messagesData}
                        newMessageText={state.messagePage.newMessageText}
                        addMessage={newMessage}
                        updateNewMessageText={changeNewMessageText}/>
      }
      }
    </StoreContext.Consumer>
  )
};

export default DialogsContainer;