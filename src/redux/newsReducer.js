const ADD_NEWS = "ADD-NEWS";
const UPDATE_NEW_NEWS_TEXT = "UPDATE-NEW-NEWS-TEXT";

let initialState = {
  newsData: [
    {id: 1, newsMessage: "Смешная картинка"},
    {id: 2, newsMessage: "Не смешная картинка"}
  ],
  newNewsText: ""
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      let newNews = {
        id: 3,
        newsMessage: state.newNewsText
      };
      return {
        ...state,
        newsData: [...state.newsData, newNews],
        newNewsText: ""
      };
    case UPDATE_NEW_NEWS_TEXT:
      return {
        ...state,
        newNewsText: action.newText
      };
    default:
      return state;
  }
};

export const addNewsCreator = () => ({type: ADD_NEWS});
export const updateNewNewsCreator = (text) => ({type: UPDATE_NEW_NEWS_TEXT, newText: text});

export default newsReducer;