import React from 'react';
import s from "./NewNews.module.css"
import funny_picture from "./../../../img/funny_picture.jpg"

const NewNews = (props) => {
  return (
    <div className={s.newNews}>
      <div className={s.newsText}>{props.newsMessage}</div>
      <img className={s.funny__picture} src={funny_picture} alt=""/>
    </div>
  )
};

export default NewNews;