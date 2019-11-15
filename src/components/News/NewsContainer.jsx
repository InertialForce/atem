import React from 'react';
import {addNewsCreator, updateNewNewsCreator} from "../../redux/newsReducer";
import News from "./News";

const NewsContainer = (props) => {
  let state = props.store.getState();

  let newNews = () => {
    props.store.dispatch(addNewsCreator());
  };
  let changeNewNewsText = (text) => {
    props.store.dispatch(updateNewNewsCreator(text))
  };

  return (
    <News addNews={newNews}
          newsData={state.newsPage.newsData}
          newNewsText={state.newsPage.newNewsText}
          updateNewNews={changeNewNewsText}/>
  )
};

export default NewsContainer;