import React from "react";
import preloader from "../../../img/Dual Ring-1.3s-200px.svg";

let Preloader = (props) => {
  return (
    <img style={{width: "80px", height: "80px"}} src={preloader} alt="preloader"/>
  )
};

export default Preloader;