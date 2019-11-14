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
      state.newsData.push(newNews);
      state.newNewsText = "";
      return state;
    case UPDATE_NEW_NEWS_TEXT:
      state.newNewsText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addNewsCreator = () => ({type: ADD_NEWS});
export const updateNewNewsCreator = (text) => ({type: UPDATE_NEW_NEWS_TEXT, newText: text});

export default newsReducer;