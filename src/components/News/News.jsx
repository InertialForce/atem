import React from 'react';
import s from "./News.module.css"
import NewNews from "./NewNews/NewNews";

const News = (props) => {
  let newNewsElement = props.newsData.map(n => <NewNews key={n.id} newsMessage={n.newsMessage}/>);

  let newNews = () => {
    props.addNews();
  };
  let changeNewNewsText = (event) => {
    let text = event.target.value;
    props.updateNewNews(text)
  };

  return (
    <div className={s.news__block}>
      <div className={s.addNews__block}>
        <textarea className={s.newNewsMessage}
                  onChange={changeNewNewsText}
                  value={props.newNewsText}/>
        <button className={s.addNewsMessage}
                onClick={newNews}>New News</button>
      </div>
      {newNewsElement}
    </div>
  )
};

export default News;