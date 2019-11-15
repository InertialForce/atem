import React from 'react';
import {addNewsCreator, updateNewNewsCreator} from "../../redux/newsReducer";
import News from "./News";
import StoreContext from "../../StoreContext";

const NewsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();

        let newNews = () => {
          store.dispatch(addNewsCreator());
        };
        let changeNewNewsText = (text) => {
          store.dispatch(updateNewNewsCreator(text))
        };
        return <News addNews={newNews}
                     newsData={state.newsPage.newsData}
                     newNewsText={state.newsPage.newNewsText}
                     updateNewNews={changeNewNewsText}/>
      }
      }
    </StoreContext.Consumer>
  )
};

export default NewsContainer;