import React from 'react';
import s from "./Dialogs.module.css"
import send__b from "./../../img/email.svg"
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/messageReduser";

const Dialogs = (props) => {
  let dialogsElement = props.stateDialogs.dialogsData.map(d => <Dialog id={d.id} name={d.name}/>);
  let messagesElement = props.stateDialogs.messagesData.map(m => <Message message={m.message}/>);

  let newMessage = () => {
    props.dispatch(addMessageCreator());
  };

  let changeNewMessageText = (event) => {
    let text = event.target.value;
    props.dispatch(updateNewMessageTextCreator(text))
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        <div className={s.message__bg}>
          {messagesElement}
        </div>
        <div className={s.addNewMessage}>
          <textarea className={s.newMessage}
                    value={props.stateDialogs.newMessageText}
                    onChange={changeNewMessageText}/>
          <button className={s.send__b} onClick={newMessage}>
            <img src={send__b} alt="New Message"/>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;