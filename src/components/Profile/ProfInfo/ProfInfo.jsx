import React from 'react';
import icon from "./../../../img/batman-icon.png"
import s from "./ProfInfo.module.css"


const ProfInfo = (props) => {
  return (
    <div className={s.prof__info}>
      <img className={s.prof__img} src={icon} alt=""/>
      <div className={s.prof__text}>
        <p>Name</p>
      </div>
    </div>
  )
};

export default ProfInfo;