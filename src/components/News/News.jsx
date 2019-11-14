import React from 'react';
import s from "./News.module.css"
import NewNews from "./NewNews/NewNews";
import {addNewsCreator, updateNewNewsCreator} from "../../redux/newsReduser";

const News = (props) => {
  let newNewsElement = props.stateNews.newsData.map(n => <NewNews newsMessage={n.newsMessage}/>);

  let newNews = () => {
    props.dispatch(addNewsCreator());
  };
  let changeNewNewsText = (event) => {
    let text = event.target.value;
    props.dispatch(updateNewNewsCreator(text))
  };

  return (
    <div className={s.news__block}>
      <div className={s.addNews__block}>
        <textarea className={s.newNewsMessage}
                  onChange={changeNewNewsText}
                  value={props.stateNews.newNewsText}/>
        <button className={s.addNewsMessage}
                onClick={newNews}>New News</button>
      </div>
      {newNewsElement}
    </div>
  )
};

export default News;