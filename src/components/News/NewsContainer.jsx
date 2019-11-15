import React from 'react';
import {addNewsCreator, updateNewNewsCreator} from "../../redux/newsReducer";
import News from "./News";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    newsData: state.newsPage.newsData,
    newNewsText: state.newsPage.newNewsText
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNews: () => {
      dispatch(addNewsCreator())
    },
    updateNewNews: (text) => {
      dispatch(updateNewNewsCreator(text))
    }
  }
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;